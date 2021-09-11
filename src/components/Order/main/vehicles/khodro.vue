<template>
  <cllapse-btntwo
    :price_items="yearsofbuild_vehicle_items"
    :marks="yearsofbuild_vehicleMarks"
    @minp="minyearsofbuild_vehicle"
    @maxp="maxyearsofbuild_vehicle"
    id="yearsofbuild_vehicle"
    exm="1393"
    txt=""
  />
  <hr />
  <cllapse-btntwo
    :price_items="karkard_items"
    :marks="karkardMarks"
    @minp="minkarkard"
    @maxp="maxkarkard"
    id="karkard"
    exm="1000"
    txt="کیلومتر"
  />


  <hr />
  <div class="" v-if="group_subitem_name == 'سواری'">
    <cllapse-btnone
      :data_items="brande_savari_items"
      :marks="brande_savariMarks"
      @dataFn="brande_savariFn"
      id="brande_savari"
      exm="برند و مدل"
    />
    <hr />
    <moving-btn
      :conValue="with_zemanat"
      @conFn="conWith_zemanatFn"
      title="فقط با ضمانت کارنامه"
    />
    <hr />
  </div>
  <div class="" v-if="group_subitem_name == 'کلاسیک'"></div>
  <div class="" v-if="group_subitem_name == 'اجاره ای'"></div>
  <div class="" v-if="group_subitem_name == 'سنگین'"></div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import CllapseBtntwo from "../../UI/CllapseBtntwo.vue";
import CllapseBtnone from "../../UI/CllapseBtnone.vue";
import MovingBtn from "../../UI/MovingBtn.vue";
export default {
  components: {
    CllapseBtntwo,
    CllapseBtnone,
    MovingBtn,
  },
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const yearsofbuild_vehicleMarks = computed(
      () => order_data.subItem.yearsofbuild_vehicle
    );
    const yearsofbuild_vehicle_items = ref(["سال ساخت", "از", "تا"]);
    const karkardMarks = computed(() => order_data.subItem.karkard);
    const karkard_items = ref(["کارکرد", "از", "تا"]);

    const type_advMarks = ["فروشی", "درخواستی"];
    const type_adv_items = ref(["نوع آگهی", "فروشی یا درخواستی"]);

    const brande_savariMarks = computed(() => order_data.subItem.brande_savari);
    const brande_savari_items = ref("تعیین برند خودرو");

    const del_tavafoghi = computed(() => order_data.del_tavafoghi);
    const with_zemanat = computed(() => order_data.with_zemanat);

    function conTavafoghiFn() {
      order_data.del_tavafoghi = !order_data.del_tavafoghi;
    }
    function conWith_zemanatFn() {
      order_data.with_zemanat = !order_data.with_zemanat;
    }
    /*

 */
    function minyearsofbuild_vehicle(yearsofbuild_vehicle) {
      order_data.minyearsofbuild_vehicle = yearsofbuild_vehicle;
    }
    function maxyearsofbuild_vehicle(yearsofbuild_vehicle) {
      order_data.maxyearsofbuild_vehicle = yearsofbuild_vehicle;
    }
    function minkarkard(karkard) {
      order_data.minkarkard = karkard;
    }
    function maxkarkard(karkard) {
      order_data.maxkarkard = karkard;
    }
    function adviser(adviser_melk) {
      order_data.adviser_melk = adviser_melk;
    }
    function type_advFn(type_adv) {
      order_data.type_adv = type_adv;
    }
    function brande_savariFn(brande_savari) {
      order_data.brande_savari = brande_savari;
    }
    return {
      group_subitem_name,

      yearsofbuild_vehicleMarks,
      yearsofbuild_vehicle_items,
      minyearsofbuild_vehicle,
      maxyearsofbuild_vehicle,

      karkardMarks,
      karkard_items,
      minkarkard,
      maxkarkard,

      adviser,
      del_tavafoghi,
      conTavafoghiFn,
      with_zemanat,
      conWith_zemanatFn,
      type_advMarks,
      type_adv_items,
      type_advFn,

      brande_savariMarks,
      brande_savari_items,
      brande_savariFn,
    };
  },
};
</script>

<style></style>
