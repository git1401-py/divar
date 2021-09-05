<template>
  <div class="p-2" style="width: 300px; height: 100vh">
    <form action="">
      <ul class="">
        دسته‌بندی‌ها
        <div class="" v-if="display" @click="allTitle">
          <span class="titles">همهٔ آگهی‌ها</span>
        </div>
        <template v-for="title in titles" :key="title.id">
          <sub-items
            :displayItam="displayItam"
            :display="display"
            :title="title"
            @dis="dis"
            @disItam="disItam"
            @disDitails="disDitails"
          />
        </template>
      </ul>
      <hr />
      <bottom-section />
     
      <hr />
      <item-details v-if="displayDitails || displayItemDitails" />
    </form>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import SubItems from "./SubItems.vue";
import { provide } from "@vue/runtime-core";
import ItemDetails from "./ItemDetails.vue";
import BottomSection from "./bottom/BottomSection.vue";

export default {
  components: { SubItems, ItemDetails , BottomSection},
  setup() {
    const display = ref(false);
    const displayItam = ref("");
    const displayDitails = ref(false);
    const displayItemDitails = ref(false);
    provide("displayDitails", displayDitails);
    provide("displayItemDitails", displayItemDitails);
    const store = useStore();
    fetchTitles();
    const titles = computed(() => store.getters["titles/allTitles"]);

    async function fetchTitles() {
      await store.dispatch("titles/fetchTitles");
    }

    function allTitle() {
      displayItam.value = "";
      display.value = false;
    }
    function disItam(id) {
      displayItam.value = id;
    }
    function dis(con) {
      display.value = con;
    }
    function disDitails(con) {
      displayDitails.value = con;
    }
    return {
      titles,
      display,
      displayItam,
      allTitle,
      displayDitails,
      displayItemDitails,
      disItam,
      dis,
      disDitails,
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
