<template>
  <div class="bg-danger" style="width: 300px; height: 100vh">
    <ul class="bg-success">
      دسته‌بندی‌ها
      <div class="" v-if="display" @click="allTitle">
        <span class="titles">همهٔ آگهی‌ها</span>
      </div>
      <template v-for="title in titles" :key="title.id">
        <div v-if="displayItam == '' || displayItam == title.id">
          <li
            class="p-0 disp"
            :id="title.id"
            @click="fetchItems(title.path, title.id)"
            style="cursor: pointer"
          >
            {{ title.title }}
          </li>
          <ul v-if="display">
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
            {{
              items
            }}
          </ul>
        </div>
      </template>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted, onUpdated, watch } from "@vue/runtime-core";

export default {
  setup() {
    const display = ref(false);
    const displayItam = ref("");
    const store = useStore();
    fetchTitles();
    fetchDefaultItem();
    const titles = computed(() => store.getters["titles/allTitles"]);
    const items = computed(() => store.getters["items/allItems"]);

    console.log(display.value);
    async function fetchTitles() {
      await store.dispatch("titles/fetchTitles");
    }
    onMounted(() => {});
    onUpdated(() => {
      items.value = computed(() => store.getters["items/allItems"]);
    });
    watch(() => {});
    async function fetchDefaultItem() {
      await store.dispatch("items/fetchItems", "melk/amlak.json");
    }
    async function fetchItems(path, id) {
      items.value = [];
      displayItam.value = id;
      await store.dispatch("items/fetchItems", path);
      console.log(id);
      display.value = true;
    }
    function allTitle() {
      displayItam.value = "";
      display.value = false;
      items.value = [
        {
          id: 1,
          name: "",
        },
      ];
      //   document.getElementsByClassName("disp").classList.remove("non-display");
      //   document.getElementsByClassName("disp").classList.remove("activeItem");
    }
    return {
      titles,
      fetchItems,
      items,
      display,
      allTitle,
      displayItam,
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
li:hover {
  color: #000;
}
.activeItem {
  color: #000;
}
</style>
