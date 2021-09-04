<template>
  <div v-if="displayItam == '' || displayItam == title.id">
    <li
      :class="{ activeItem: display }"
      class="p-0 disp"
      :id="title.id"
      @click="fetchItems(title.path, title.id)"
      style="cursor: pointer"
    >
      {{ title.title }}
    </li>
    <ul v-if="display">
      <template v-for="item in items" :key="item.id">
        <sub-item
          v-if="item"
          :displaySubitam="displaySubitam"
          :displaySub="displaySub"
          :item="item"
          @disSub="disSub"
          @disSubitam="disSubitam"
        />
      </template>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onUpdated, watch } from "@vue/runtime-core";
import SubItem from "./SubItem.vue";

export default {
  components: { SubItem },
  props: ["title", "displayItam", "display"],
  setup(props, { emit }) {
    const displaySub = ref(false);
    const displaySubitam = ref("");
    const store = useStore();
    fetchDefaultItem();
    const items = computed(() => store.getters["items/allItems"]);

    onUpdated(() => {
      items.value = computed(() => store.getters["items/allItems"]);
    });
    watch(() => {});
    async function fetchDefaultItem() {
      await store.dispatch("items/fetchItems", "melk/amlak.json");
    }

    async function fetchItems(path, id) {
      items.value = [];
      await store.dispatch("items/fetchItems", path);
      console.log(id);
      emit("dis", true);
      emit("disItam", id);
      displaySubitam.value = "";
      displaySub.value = false;
    }

    function disSubitam(id) {
      displaySubitam.value = id;
    }
    function disSub(con) {
      displaySub.value = con;
    }
    return {
      fetchItems,
      items,
      displaySub,
      displaySubitam,
      disSubitam,
      disSub,
    };
  },
};
</script>

<style scoped>
ul li {
  list-style-type: circle;
}
.display {
  display: block;
}
.non-display {
  display: none;
}
.titles,
li {
  color: gray;
  cursor: pointer;
}
.titles:hover,
.item:hover,
li:hover {
  color: #222;
}
.activeItem {
  color: #222;
}
.item a {
  padding-right: 20px;
}
.item a.router-link-exact-active {
  color: rgb(207, 19, 19) !important;
  border-right: 1px solid rgb(207, 19, 19);
}
</style>
