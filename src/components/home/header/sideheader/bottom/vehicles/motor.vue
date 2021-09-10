<template>
  <cllapse-btnone
    :data_items="brande_motor_items"
    :marks="brande_motorMarks"
    @dataFn="brande_motorFn"
    id="brande_motor"
    exm="تعیین برند موتور"
  />

  <hr />
  <cllapse-btntwo
    :price_items="yearsofbuild_vehicle_items"
    :marks="yearsofbuild_vehicleMarks"
    @minp="minyearsofbuild_vehicle"
    @maxp="maxyearsofbuild_vehicle"
    id="yearsofbuild_vehicle"
    exm="1393"
    txt="تومان"
  />

  <hr />
  <div class="" v-if="group_subitem_name == 'سواری'"></div>
  <div class="" v-if="group_subitem_name == 'کلاسیک'"></div>
  <div class="" v-if="group_subitem_name == 'اجاره ای'"></div>
  <div class="" v-if="group_subitem_name == 'سنگین'"></div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import CllapseBtntwo from "../../UI/CllapseBtntwo.vue";
import CllapseBtnone from "../../UI/CllapseBtnone.vue";
export default {
  components: {
    CllapseBtntwo,
    CllapseBtnone,
  },
  setup() {
    const info = inject("info");
    const group_subitem_name = computed(() => info.group_subitem_name);
    const khodroMarks = computed(() => info.subItem.price);
    const khodroPrice_items = ref(["قیمت", "حداقل", "حداکثر"]);
    const type_advMarks = ["فروشی", "درخواستی"];
    const type_adv_items = ref(["نوع آگهی", "فروشی یا درخواستی"]);
    const brande_motorMarks = computed(() => info.subItem.brande_motor);
    const brande_motor_items = ref("برند");
    const yearsofbuild_vehicleMarks = computed(
      () => info.subItem.yearsofbuild_vehicle
    );
    const yearsofbuild_vehicle_items = ref(["سال ساخت", "از", "تا"]);


    const del_tavafoghi = computed(() => info.del_tavafoghi);
    const tormajazi = computed(() => info.tormajazi);

    function conTavafoghiFn() {
      info.del_tavafoghi = !info.del_tavafoghi;
    }
    function conTormajaziFn() {
      info.tormajazi = !info.tormajazi;
    }
    /*
vadie_melk: "",
      ejare_melk: "",
      vadie_ejare_melk: "",
      vadie_tejari: "",
      ejare_tejari: "",
 */
    function minp(minprice) {
      info.minprice = minprice;
    }
    function maxp(maxprice) {
      info.maxprice = maxprice;
    }
    function minyearsofbuild_vehicle(yearsofbuild_vehicle) {
      info.minyearsofbuild_vehicle = yearsofbuild_vehicle;
    }
    function maxyearsofbuild_vehicle(yearsofbuild_vehicle) {
      info.maxyearsofbuild_vehicle = yearsofbuild_vehicle;
    }
    function adviser(adviser_melk) {
      info.adviser_melk = adviser_melk;
    }
    function type_advFn(type_adv) {
      info.type_adv = type_adv;
    }
    
    function brande_motorFn(brande_motor) {
      info.brande_motor = brande_motor;
    }
    return {
      group_subitem_name,

      khodroMarks,
      khodroPrice_items,

      minp,
      maxp,
      adviser,
      del_tavafoghi,
      conTavafoghiFn,
      tormajazi,
      conTormajaziFn,
      type_advMarks,
      type_adv_items,
      type_advFn,

      brande_motorMarks,
      brande_motor_items,
      brande_motorFn,
      yearsofbuild_vehicleMarks,
      yearsofbuild_vehicle_items,
      maxyearsofbuild_vehicle,
      minyearsofbuild_vehicle,
    };
  },
};
</script>

<style></style>
