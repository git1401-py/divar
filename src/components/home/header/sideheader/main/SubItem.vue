<template>
  <div v-if="displaySubitam == '' || displaySubitam == item.id">
    <li
      class="Item"
      :class="{ activeItem: displaySub }"
      @click="fetchSubItems(item.path, item.id, item.subItem)"
    >
      {{ item.name }}
      <ul v-if="displaySub">
        <li
          v-for="subItem in subItems"
          class="item"
          :key="subItem.id"
          @click="fetchSubItem(subItem.code)"
        >
          <router-link class="sub-item" to="/x">
            {{ subItem.name }}
          </router-link>
        </li>
      </ul>
    </li>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
// import { computed, ref } from "@vue/reactivity";
// import { useGeolocation } from "../useGeolocation";
import { useStore } from "vuex";
import { inject, onUpdated } from "@vue/runtime-core";

export default {
  props: ["item", "displaySubitam", "displaySub"],
  setup(props, { emit }) {
    const store = useStore();
    const displayDitails = inject("displayDitails");
    const displayItemDitails = inject("displayItemDitails");

    fetchDefaultSubItems();

    const subItems = computed(() => store.getters["subItems/allSubItems"]);
    async function fetchDefaultSubItems() {
      await store.dispatch("subItems/fetchSubItems", "melk/sellMelk.json");
    }
    onUpdated(() => {
      subItems.value = computed(() => store.getters["subItems/allSubItems"]);
    });

    async function fetchSubItems(path, id, hasSub) {
      emit("disSub", true);
      emit("disSubitam", id);
      await store.dispatch("subItems/fetchSubItems", path);
      displayDitails.value = false;
      if (hasSub == "no") displayDitails.value = true;
      console.log(id);
    }
    async function fetchSubItem(id) {
      displayItemDitails.value = true;
      console.log(id);
    }
    return {
      fetchSubItems,
      fetchSubItem,
      subItems
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
