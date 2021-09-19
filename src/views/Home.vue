<template>
  <div class="container-fluid">
    <div class="row position-relative">
      <main-section>
        <!-- <template v-slot:main>
          {{ info.maxprice }}<br />
          قیمت:
          {{ minprice }}--
          {{ maxprice }}<br />
          ویعه ملک : {{ min_vadie_melk }}--
          ویعه ملک : {{ max_vadie_melk }}<br />
          اجاره ملک : {{ min_ejare_melk }}--
          اجاره ملک : {{ max_ejare_melk }}<br />
          ودیعه تجاری : {{ min_vadie_tejari }}--
          ودیعه تجاری : {{ max_vadie_tejari }}<br />
          اجاره تجاری : {{ min_ejare_tejari }}--
          اجاره تجاری : {{ max_ejare_tejari }}<br />
          {{ info.subItem }}<br />
          group_name:{{ info.group_name }}<br />
          group_item_name:{{ info.group_item_name }}<br />
          group_subitem_name:{{ info.group_subitem_name }}<br />
          spaceFrom_melk:{{ info.spaceFrom_melk }}<br />
          spaceTo_melk:{{ info.spaceTo_melk }}<br />
          آگهی دهنده:{{ info.adviser_melk }}<br />
          سال ساخت:{{ info.yearsofbuild }}<br />
          minroof_melk:{{ info.minroof_melk }}<br />
          maxroof_melk:{{ info.maxroof_melk }}<br />

          عکس دار:{{ info.just_img }}<br />
          فوری:{{ info.just_imediate }}<br />
          حذف توافقی:{{ info.del_tavafoghi }}<br />
          تور مجازی:{{ info.tormajazi }}<br />
          اتاق:{{ info.room_melk }}<br />
          آسانسور:{{ info.lift_melk }}<br />
          پارکینگ:{{ info.parking_melk }}<br />
          انبار:{{ info.anbar_melk }}<br />
          بالکن:{{ info.balkon_melk }}<br />
          مجرد:{{ info.just_single }}<br />
          سند ادازی:{{ info.sanad_edari }}<br />
          فقط تایید شده ها:{{ info.taeed_shode }}<br />
          نوع آگهی:{{ info.type_adv }}<br />
          معاوضه:{{ info.moaveze }}<br />
          برند موتور:{{ info.brande_motor }}<br />
          سال ساخت:{{ info.minyearsofbuild_vehicle }}<br />
          سال ساخت:{{ info.maxyearsofbuild_vehicle }}<br />
        </template> -->
        <template v-slot:main>
          <!-- {{ ODatas }} -->
          <div
            class="m-1 p-1 h-100 bg-success w-100"
            v-for="order in ODatas"
            :key="order.id"
          >
            {{ order.group_name }}//{{ order.group_item_name }}//{{
              order.group_subitem_name
            }}//{{ order.price }}//{{ order.mobile }}//{{ order.space }}
          </div>
        </template>
      </main-section>
    </div>
  </div>
  <side-header />

  <main-section> </main-section>
</template>

<script>
import { computed, reactive, ref } from "@vue/reactivity";
import SideHeader from "../components/home/header/sideheader/main/SideHeader.vue";
import MainSection from "../components/home/mainsection/MainSection.vue";
import { onMounted, onUpdated, provide, watch } from "@vue/runtime-core";
import calNumber from "../components/js/calNumber.js";
import useFilter from "../components/js/useFilter.js";
import useFiltergroup_item_name from "../components/js/useFiltergroup_item_name.js";
import useFiltergroup_subitem_name from "../components/js/useFiltergroup_subitem_name.js";
import { useStore } from "vuex";

export default {
  name: "Home",
  components: {
    SideHeader,
    MainSection,
  },
  setup() {
    const store = useStore();

    const info = reactive({
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
      builder_tablet: "",
      type_console: "",
      simNumber: "",
      esalatBrand: "",
      Rom_mobile: "",
      Ram_mobile: "",
      sellType: "",
      simType: "",
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
      zemanat: "",

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
      darRagMokhtalef: "",
      tolidi: "",

      // vihicle
      type_order_vehicle: "",
      color_vehicle: "",
      karkard: "",
      minkarkard:"",
      maxkarkard:"",
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
      spaceFrom_melk: "",
      spaceTo_melk: "",
      room_melk: "",
      allroof_melk: "",
      minroof_melk: "",
      maxroof_melk: "",
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
      adviser_melk: "",
      sanad_edari: "",

      adviser: "",
      city: "",
      price: "",
      minprice: "",
      maxprice: "",
      min_vadie_melk: "",
      max_vadie_melk: "",
      min_ejare_melk: "",
      max_ejare_melk: "",
      vadie_ejare_melk: "",
      min_vadie_tejari: "",
      max_vadie_tejari: "",
      min_ejare_tejari: "",
      max_ejare_tejari: "",
      status: "",
      viewMobile: "",
      img_urls:"",
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
    fetchOrder_data();

    // const order_data = inject("order_data");

    const miliard = ref(0);
    const milion = ref(0);
    const hezar = ref(0);
    // const maxprice = ref(0);
    const sectionsInfo = reactive({
      adver: "",
      data: "",
      minprice: "",
      maxprice: "",
    });
    provide("sectionsInfo", sectionsInfo);
    provide("info", info);
    const maxprice = computed(() =>
      calNumber(info.maxprice, miliard, milion, hezar)
    );
    const minprice = computed(() =>
      calNumber(info.minprice, miliard, milion, hezar)
    );
    const min_vadie_melk = computed(() =>
      calNumber(info.min_vadie_melk, miliard, milion, hezar)
    );
    const max_vadie_melk = computed(() =>
      calNumber(info.max_vadie_melk, miliard, milion, hezar)
    );
    const min_ejare_melk = computed(() =>
      calNumber(info.min_ejare_melk, miliard, milion, hezar)
    );
    const max_ejare_melk = computed(() =>
      calNumber(info.max_ejare_melk, miliard, milion, hezar)
    );
    const min_vadie_tejari = computed(() =>
      calNumber(info.min_vadie_tejari, miliard, milion, hezar)
    );
    const max_vadie_tejari = computed(() =>
      calNumber(info.max_vadie_tejari, miliard, milion, hezar)
    );
    const min_ejare_tejari = computed(() =>
      calNumber(info.min_ejare_tejari, miliard, milion, hezar)
    );
    const max_ejare_tejari = computed(() =>
      calNumber(info.max_ejare_tejari, miliard, milion, hezar)
    );
    let orderData = reactive([]);
    orderData = store.getters["user_orders/alluser_ordersDATA"];
    // const arr = reactive([
    //   {name:"a",family:"fa"},
    //   {name:"b",family:"fb"},
    //   {name:"c",family:"fc"},
    //   {name:"d",family:"fd"},
    //   {name:"a",family:"fa2"}
    // ]);
    let ODatas = reactive([]);

    onUpdated(() => {
      //    orderData.forEach((el) => {
      //     ODatas.push(el);
      // });
    });
    onMounted(() => {

    });
    console.log("order_data", info.group_name);
    const group_name = ref("");
    const group_item_name = ref("");
    const group_subitem_name = ref("");
    watch(info, () => {
      group_name.value = info.group_name;
      group_item_name.value = info.group_item_name;
      group_subitem_name.value = info.group_subitem_name;
      console.log("name", group_name.value);
    });

    watch(group_name, () => {
      console.log("WATCHname", group_name.value);
        useFilter(info, ODatas, orderData , group_name,minprice.value,maxprice.value);
        watch(info, () => {
          useFilter(info, ODatas, orderData , group_name,minprice.value,maxprice.value);
    });
    });
    watch(group_item_name, () => {
        useFiltergroup_item_name(info, ODatas, orderData , group_item_name,minprice,maxprice);
        watch(info, () => {
        useFiltergroup_item_name(info, ODatas, orderData , group_item_name,minprice.value,maxprice.value,min_vadie_melk.value,max_vadie_melk.value,min_ejare_melk.value,max_ejare_melk.value,info.spaceFrom_melk,info.spaceTo_melk);
        });
    });
    watch(group_subitem_name, () => {
        useFiltergroup_subitem_name(info, ODatas, orderData , group_subitem_name);
    });
    
    console.log("*********", orderData.value);
    async function fetchOrder_data() {
      await store.dispatch("user_orders/fetchUser_orders");
      orderData = store.getters["user_orders/alluser_ordersDATA"];
      orderData.forEach((el) => {
          ODatas.push(el);
      });

    }

    return {
      info,
      maxprice,
      minprice,
      min_vadie_melk,
      max_vadie_melk,
      min_ejare_melk,
      max_ejare_melk,
      min_vadie_tejari,
      max_vadie_tejari,
      min_ejare_tejari,
      max_ejare_tejari,
      ODatas,
      orderData,
    };
  },
};
</script>
