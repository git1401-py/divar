<template>
  <div v-if="displaySubitam == '' || displaySubitam == item.id">
    <li
      class="Item"
      :class="{ activeItem: displaySub }"
      @click="fetchSubItems(item.path, item.id, item.subItem, item.name)"
    >
      {{ item.name }}
      <ul v-if="displaySub">
        <li
          v-for="subItem in subItems"
          class="item"
          :key="subItem.id"
          @click="fetchSubItem(item.id, subItem.code, subItem.name)"
        >
          <!-- <router-link class="sub-item" to="/x"> -->
          {{ subItem.name }}
          <!-- </router-link> -->
        </li>
      </ul>
    </li>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
// import { computed, ref } from "@vue/reactivity";
// import { useGeolocation } from "../useGeolocation";
import { useStore } from "vuex";
import { inject, onUpdated } from "@vue/runtime-core";

export default {
  props: ["item", "displaySubitam", "displaySub"],
  setup(props, { emit }) {
    const info = inject("info");

    const store = useStore();
    const displayDitails = inject("displayDitails");
    const displayItemDitails = inject("displayItemDitails");
    const pathing_module = ref("");

    fetchDefaultSubItems();
    fetchDefaultSubItem();

    const subItems = computed(() => store.getters["subItems/allSubItems"]);
    const subItem = computed(() => store.getters["melkDetails/allmelkDetails"]);


    async function fetchDefaultSubItems() {
      await store.dispatch("subItems/fetchSubItems", "melk/sellMelk.json");
    }
    onUpdated(() => {
      subItems.value = computed(() => store.getters["subItems/allSubItems"]);
    subItem.value= computed(() => store.getters[pathing_module.value]);
    console.log(subItem,subItem.value);
    info.subItem = subItem.value;

    });

    async function fetchSubItems(path, id, hasSub, name) {
      info.group_item_name = name;
      emit("disSub", true);
      emit("disSubitam", id);
      await store.dispatch("subItems/fetchSubItems", path);
      displayDitails.value = false;
      if (hasSub == "no") displayDitails.value = true;
      console.log(id);
    }
    async function fetchDefaultSubItem() {
      if (info.group_name == "املاک") {
        const pathing = ref("");
        pathing.value = "./json/melk/sellMelkD.json";

        pathing_module.value = "melkDetails/allmelkDetails";

        await store.dispatch("melkDetails/fetchMelkDetails", pathing.value);
      }
      }
    async function fetchSubItem(parentId, id, name) {
      if (info.group_name == "املاک") {
        /*if (info.group_item_name == "فروش مسکونی") {
          info.type_item = "sellMelkD";
        }
        if (info.group_item_name == "اجاره مسکونی") {
          info.type_item = "ejareMelkD";
        }
        if (info.group_item_name == "فروش اداری و تجاری") {
          info.type_item = "sellTejariD";
        }
        if (info.group_item_name == "اجاره اداری و تجاری") {
          info.type_item = "ejareTejariD";
        }
        if (info.group_item_name == "اجاره کوتاه مدت") {
          info.type_item = "littletimeEjareD";
        }
        if (info.group_item_name == "پروژه های ساخت و ساز") {
          info.type_item = "buildingProjectD";
        }*/
        const pathing = ref("");
        pathing.value = "./json/melk/sellMelkD.json";

        pathing_module.value = "melkDetails/allmelkDetails";

        await store.dispatch("melkDetails/fetchMelkDetails", pathing.value);
      }
      // if (info.group_name == "وسایل نقلیه") {
      // }
      // if (info.group_name == "لوازم الکتریکی") {
      // }
      // if (info.group_name == "مربوط به خانه") {
      // }
      // if (info.group_name == "خدمات") {
      // }
      // if (info.group_name == "وسایل شخصی") {
      // }
      // if (info.group_name == "سرگرمی و فراعت") {
      // }
      // if (info.group_name == "اجتماعی") {
      // }
      // if (info.group_name == "برای کسب و کار") {
      // }
      // if (info.group_name == "استخدام و کاریابی") {
      // }
      // await store.dispatch("", parentId);
      info.group_subitem_name = name;
      displayItemDitails.value = true;
      console.log(id);
    }
    return {
      fetchSubItems,
      fetchSubItem,
      subItems,
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
