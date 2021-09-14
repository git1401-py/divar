<template>
  <div v-if="newpageOrder == false" class="mt-5 pt-5">
    <div v-if="catagoryname == 'title'">
      <order-page
        :order_data="order_data"
        :data_items="data_titles"
        :catagoryname="catagoryname"
        @Gettitle="Gettitle"
        @Resetgroup_name="Resetgroup_name"
        @Resetgroup_item_name="Resetgroup_item_name"
      />
    </div>
    <div v-if="catagoryname == 'items'">
      <order-page
        :order_data="order_data"
        :data_items="data_items"
        :catagoryname="catagoryname"
        @Getitem="Getitem"
        @Resetgroup_name="Resetgroup_name"
        @Resetgroup_item_name="Resetgroup_item_name"
      />
    </div>
    <div v-if="catagoryname == 'subitems'">
      <order-page
        :order_data="order_data"
        :data_items="data_subitems"
        :catagoryname="catagoryname"
        @Getsubitem="Getsubitem"
        @Resetgroup_name="Resetgroup_name"
        @Resetgroup_item_name="Resetgroup_item_name"
      />
    </div>
  </div>
  <div v-else class="mt-5 pt-5">
    <new-order-page @Resetgroup_subitem_name="Resetgroup_subitem_name" />
  </div>
</template>

<script>
import { computed, reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onUpdated, provide, watch } from "@vue/runtime-core";
import OrderPage from "../components/Order/UI/OrderPage.vue";
import NewOrderPage from "../components/Order/NewOrderPage.vue";
import useClear from "../components/Order/main/useClear.js";
import useAboutTitle from "../components/Order/main/useAboutTitle";

export default {
  components: { OrderPage, NewOrderPage },
  setup() {
    const store = useStore();
    const order_data = reactive({
      type_item: "",
      pathing_module: "",
      subItem: {},

      group_name: "",
      group_item_name: "",
      group_subitem_name: "",
      group_item_code: "",

      khadamat_link: "",

      // electrisite
      type_mobile: "",
      brand_mobile: "",
      mobiles: "",
      builder_tablet: "",
      type_console: "",
      esalatBrand: "",
      Rom_mobile: "",
      Ram_mobile: "",
      sellType: "",
      simType: "",
      simNumber: "",
      simSuport: "",
      builder_pc: "",
      HDD_pc: "",
      Ram_pc: "",
      cpu_pc: "",
      color_electric: "",

      // estekhdam
      typeHamkari: "",
      dorkari: "",
      typePardakht: "",
      timekar: "",
      bime: "",
      sabeghe: "",
      sarbazi: "",

      // house
      type_building_system: "",
      type_device: "",
      type_fornither_zarf: "",
      type_fornither_iakh: "",
      type_fornither_gaz: "",
      type_fornither_lebas: "",
      type_taziv_tazini: "",
      type_tazin_nor: "",
      type_tazin_farsh: "",
      baft: "",
      type_tazin_sandali: "",
      jenseBody: "",
      jenseRokesh: "",
      numberNeshiman: "",
      zemanat: false,

      // persional
      type_araiesh: "",
      jens_adalt: "",
      jens_child: "",
      type_kif: "",
      type_clothes: "",
      type_watch: "",
      type_javaher: "",
      type_badalijat: "",
      jenskala_javaher: "",
      darRagMokhtalef: false,
      tolidi: "",

      // vihicle
      type_order_vehicle: "",
      color_vehicle: "",
      karkard: "",
      type_adv: "",
      moaveze: "",
      brande_motor: "",
      brande_savari: "",
      minyearsofbuild_vehicle: "",
      maxyearsofbuild_vehicle: "",
      motor_vehicle: "",
      shasi_vehicle: "",
      body_vehicle: "",
      bime3_vehicle: "",
      sanad_vehicle: "",
      girbox_vehicle: "",
      sellType_vehicle: "",
      with_zemanat: false,

      // melk
      yearsofbuild: "",
      space: "",
      room_melk: "",
      roof_melk: "",
      allroof_melk: "",
      vahedinroof_melk: "",
      jahatbuilding_melk: "",
      bazsazi_melk: "",
      jensekaf_melk: "",
      sevicebehdashti_melk: "",
      sarmaiesh_melk: "",
      garmaieshi_melk: "",
      boilwater_melk: "",
      balkon_melk: false,
      lift_melk: false,
      parking_melk: false,
      anbar_melk: false,
      taeed_shode: false,
      sanad_edari: "",
      sanad: "",
      adviser: "",

      city: "",
      price: "",
      vadie_melk: "",
      ejare_melk: "",
      vadie_ejare_melk: "",
      status: "",
      chat: false,
      viewMobile: false,
      just_img: false,
      just_imediate: false,
      del_tavafoghi: false,
      tormajazi: false,
      just_single: false,
      mobile: "",
      codemeli: "",
      title: "",
      explation: "",
    });
    provide("order_data", order_data);
    const pathing_module = ref("");
    const newpageOrder = ref(false);
    const catagory = ref("");
    const catagoryname = ref("title");

    fetchTitles();
    fetchitems();
    const data_titles = computed(() => store.getters["titles/allTitles"]);
    const data_items = computed(() => store.getters["items/allItems"]);
    const data_subitems = computed(() => store.getters["subItems/allSubItems"]);

    onUpdated(() => {
      data_titles.value = computed(() => store.getters["titles/allTitles"]);

      data_items.value = computed(() => store.getters["items/allItems"]);
      data_subitems.value = computed(
        () => store.getters["subItems/allSubItems"]
      );
    });

    watch(pathing_module, () => {
      order_data.subItem = computed(() => store.getters[pathing_module.value]);
    });
    async function Gettitle(title) {
      catagoryname.value = "items";
      order_data.group_name = title.title;
      await store.dispatch("items/fetchItems", title.path);
      if (order_data.group_name == "املاک") {
        pathing_module.value = "melkDetails/allmelkDetails";
        await store.dispatch("melkDetails/fetchMelkDetails");
      }
      if (order_data.group_name == "وسایل نقلیه") {
        pathing_module.value = "vehicleDetails/allvehicleDetails";
        await store.dispatch("vehicleDetails/fetchVehicleDetails");
      }
      if (order_data.group_name == "لوازم الکتریکی") {
        pathing_module.value = "electrikiDetails/allelectrikiDetails";
        await store.dispatch("electrikiDetails/fetchElectrikiDetails");
      }
      if (order_data.group_name == "استخدام و کاریابی") {
        pathing_module.value = "estekhdamDetails/allestekhdamDetails";
        await store.dispatch("estekhdamDetails/fetchEstekhdamDetails");
      }
      if (order_data.group_name == "مربوط به خانه") {
        pathing_module.value = "homeDetails/allhomeDetails";
        await store.dispatch("homeDetails/fetchHomeDetails");
      }
      if (order_data.group_name == "خدمات") {
        pathing_module.value = "kasbvakarDetails/allkasbvakarDetails";
        await store.dispatch("kasbvakarDetails/fetchKasbvakarDetails");
      }
      if (order_data.group_name == "وسایل شخصی") {
        pathing_module.value = "persionalItemDetails/allpersionalItemDetails";
        await store.dispatch("persionalItemDetails/fetchPersionalItemDetails");
      }
      if (order_data.group_name == "سرگرمی و فراعت") {
        pathing_module.value = "sargarmiDetails/allsargarmiDetails";
        await store.dispatch("sargarmiDetails/fetchsargarmiDetails");
      }
      if (order_data.group_name == "اجتماعی") {
        pathing_module.value = "socialDetails/allsocialDetails";
        await store.dispatch("socialDetails/fetchSocialDetails");
      }
    }
    async function Getitem(item) {
      catagoryname.value = "subitems";

      order_data.group_item_name = item.name;
      await store.dispatch("subItems/fetchSubItems", item.path);
    }
    const aboutTitle = reactive({
      title: "",
      title_ex: "",
      explation:
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .",
      explation_ex: "",
    });
    provide("aboutTitle", aboutTitle);

    function Getsubitem(item) {
      useClear(order_data);
      //   catagoryname.value = "subitems";
      order_data.group_subitem_name = item.name;
      newpageOrder.value = true;

      // *********** aboutTitle ******
      useAboutTitle(order_data,aboutTitle);
      
    }

    function Resetgroup_name() {
      order_data.group_name = "";
      order_data.group_item_name = "";
      catagoryname.value = "title";
    }
    function Resetgroup_item_name() {
      order_data.group_item_name = "";
      catagoryname.value = "items";
    }
    function Resetgroup_subitem_name() {
      order_data.group_subitem_name = "";
      newpageOrder.value = false;
    }

    async function fetchTitles() {
      await store.dispatch("titles/fetchTitles");
    }

    async function fetchitems() {
      //   await store.dispatch(
      //     "items/allItems",
      //     "vehicleDetails/fetchVehicleDetails"
      //   );
    }

    async function allTitle() {
      await store.dispatch("titles/fetchTitles");
    }
    return {
      catagory,
      Getitem,
      Gettitle,
      Getsubitem,
      Resetgroup_name,
      Resetgroup_item_name,
      Resetgroup_subitem_name,
      allTitle,
      data_titles,
      data_items,
      data_subitems,
      order_data,
      newpageOrder,
      catagoryname,
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
