<template>
  <div
    id="style-2"
    class="p-2 pt-4 scrollable position-fixed end-0"
    style="width: 351px; height: 88vh; top: 70px; z-index: 3"
    :class="{ bottom: fixedsideheader }"
  >
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
    </form>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { inject, provide } from "@vue/runtime-core";
import SubItems from "./SubItems.vue";
import BottomSection from "../bottom/BottomSection.vue";
import useClear from "./useClear.js";


export default {
  components: { SubItems, BottomSection },
  setup() {
    const fixedsideheader = ref(false);
    const display = ref(false);
    const displayItam = ref("");
    const displayDitails = ref(false);
    const displayItemDitails = ref(false);
    provide("displayDitails", displayDitails);
    provide("displayItemDitails", displayItemDitails);
    const store = useStore();
    fetchTitles();
    const titles = computed(() => store.getters["titles/allTitles"]);
    if (window.scrollY == 100) {
      fixedsideheader.value = true;
    } else {
      fixedsideheader.value = false;
    }
    async function fetchTitles() {
      await store.dispatch("titles/fetchTitles");
    }
    const info = inject("info");
    function allTitle() {
      info.group_name = "";
      info.group_item_name = "";
      info.group_subitem_name = "";

      info.khadamat_link = "";

    useClear(info);

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
      fixedsideheader,
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
.bottom {
  bottom: 0;
}
.scrollable {
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(7, 31, 7, 0.1) #e0e0e0;
  /* scrollbar-color: #6969dd #e0e0e0;
   scrollbar-color: auto | dark | light | <color>;
  scrollbar-width: auto | thin | none;
    scrollbar-gutter: [ auto | [ stable | always ] && both? && force? ] */
}
.scrollable:hover {
  scrollbar-color: rgba(7, 31, 7, 0.6) #e0e0e0;
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
