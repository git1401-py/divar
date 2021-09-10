<template>
  <div v-if="displayItam == '' || displayItam == title.id">
    <li
      :class="{ activeItem: display }"
      class="p-0 disp"
      :id="title.id"
      @click="fetchItems(title.path, title.id, title.title)"
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
    <!-- {{a}}<br>
    {{info.subItem}} -->
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { inject, onUpdated, watch } from "@vue/runtime-core";
import SubItem from "./SubItem.vue";
import useClear from "./useClear.js";

export default {
  components: { SubItem },
  props: ["title", "displayItam", "display"],
  setup(props, { emit }) {
    const info = inject("info");
    const displaySub = ref(false);
    const displaySubitam = ref("");
    const pathing_module = ref("");

    const store = useStore();
    fetchDefaultItems();
    fetchDefaultItem();
    const items = computed(() => store.getters["items/allItems"]);
    info.subItem = computed(() => store.getters["melkDetails/allmelkDetails"]);
async function fetchDefaultItems() {
      await store.dispatch("subItems/fetchSubItems", "melk/sellMelk.json");
      pathing_module.value="melk/sellMelk.json";
    }
    onUpdated(() => {
      items.value = computed(() => store.getters["items/allItems"]);
    });
    watch(() => {});
    async function fetchDefaultItem() {
      await store.dispatch("items/fetchItems", "melk/amlak.json");
    }
    watch(pathing_module,()=>{
      info.subItem = computed(() => store.getters[pathing_module.value]);
    })
const a = ref("");

    async function fetchItems(path, id, name) {
      info.group_name = name;
      if (info.group_name == "املاک") {
        pathing_module.value = "melkDetails/allmelkDetails";
        await store.dispatch("melkDetails/fetchMelkDetails");
      }
      if (info.group_name == "وسایل نقلیه") {a.value = "vvvvvvv";
        pathing_module.value = "vehicleDetails/allvehicleDetails";
        await store.dispatch("vehicleDetails/fetchVehicleDetails");
      }
      if (info.group_name == "لوازم الکتریکی") {a.value = "eeeeeeeeeeee";
        pathing_module.value = "electrikiDetails/allelectrikiDetails";
        await store.dispatch("electrikiDetails/fetchElectrikiDetails");
      }
      if (info.group_name == "استخدام و کاریابی") {
        pathing_module.value = "estekhdamDetails/allestekhdamDetails";
        await store.dispatch("estekhdamDetails/fetchEstekhdamDetails");
      }
      if (info.group_name == "مربوط به خانه") {
        pathing_module.value = "homeDetails/allhomeDetails";
        await store.dispatch("homeDetails/fetchHomeDetails");
      }
      if (info.group_name == "خدمات") {
        pathing_module.value = "kasbvakarDetails/allkasbvakarDetails";
        await store.dispatch("kasbvakarDetails/fetchKasbvakarDetails");
      }
      if (info.group_name == "وسایل شخصی") {
        pathing_module.value = "persionalItemDetails/allpersionalItemDetails";
        await store.dispatch("persionalItemDetails/fetchPersionalItemDetails");
      }
      if (info.group_name == "سرگرمی و فراعت") {
        pathing_module.value = "sargarmiDetails/allsargarmiDetails";
        await store.dispatch("sargarmiDetails/fetchsargarmiDetails");
      }
      if (info.group_name == "اجتماعی") {
        pathing_module.value = "socialDetails/allsocialDetails";
        await store.dispatch("socialDetails/fetchSocialDetails");
      }
      items.value = [];
      await store.dispatch("items/fetchItems", path);
      console.log(id);
      emit("dis", true);
      emit("disItam", id);
      displaySubitam.value = "";
      displaySub.value = false;
      


      // ********************************
      useClear(info);

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
      a,info
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
