<template>
  <cllapse-btntwo
    :price_items="sellMelkPrice_items"
    :marks="sellMelkMarks"
    @minp="minp"
    @maxp="maxp"
    id="sellMelk"
    exm="اجاره تا"
    txt="تومان"
  />
  <hr />
  <cllapse-btntwo
    :price_items="sellMelkSpace_items"
    :marks="sellMelkSpaceMarks"
    @minp="minS"
    @maxp="maxS"
    id="sellMelkSpace"
    exm="100"
    txt="متر"
  />

  <hr />
  <room id="rooms" :roomsValues="roomsValues" @roomFn="roomFn" />

  <hr />
  <agahi id="adviserMelk" @adviser="adviser" />
  <hr />
  <moving-btn
    :conValue="taeed_shode"
    @conFn="conTaeed_shodeFn"
    title="فقط تایید شده ها"
  />

  <div class="" v-if="group_subitem_name == 'آپارتمان و سوئیت'"></div>
  <div class="" v-if="group_subitem_name == 'ویلا و باغ'"></div>
  <div class="" v-if="group_subitem_name == 'دفتر کار و فضای آموزشی'"></div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import CllapseBtntwo from "../../UI/CllapseBtntwo.vue";
import Agahi from "../../UI/Agahi.vue";
import Room from "../../UI/Room.vue";
import MovingBtn from "../../UI/MovingBtn.vue";
export default {
  components: {
    CllapseBtntwo,
    Agahi,
    MovingBtn,
    Room,
  },
  setup() {
    const info = inject("info");
    const group_subitem_name = computed(() => info.group_subitem_name);
    const sellMelkMarks = computed(() => info.subItem.price_melk);

    const sellMelkSpaceMarks = computed(() => info.subItem.space_sell_melk);
    const sellMelkPrice_items = ref(["اجاره روزانه", "حداکثر", "حداقل"]);
    const sellMelkSpace_items = ref(["متراژ", "از", "تا"]);
    const roomsValues = ref(["بدون اتاق", "1", "2", "3", "4", "بیشتر از 4"]);
    const taeed_shode = computed(() => info.taeed_shode);
    const tormajazi = computed(() => info.tormajazi);
    const yearsMarks = computed(() => info.subItem.yearsofbuild);
    const years_items = ref(["سال ساخت بنا", "سال ساخت بنا ار انتخاب کنید"]);
    const roofsMarks = computed(() => info.subItem.roof);
    const roofs_items = ref(["طبقه", "حداقل", "حداکثر"]);
    const lift_melk = computed(() => info.lift_melk);
    const parking_melk = computed(() => info.parking_melk);
    const anbar_melk = computed(() => info.anbar_melk);
    const balkon_melk = computed(() => info.balkon_melk);

    function conTormajaziFn() {
      info.tormajazi = !info.tormajazi;
    }
    function conLift_melkFn() {
      info.lift_melk = !info.lift_melk;
    }
    function conParking_melkFn() {
      info.parking_melk = !info.parking_melk;
    }
    function conAnbar_melkFn() {
      info.anbar_melk = !info.anbar_melk;
    }
    function conBalkon_melkFn() {
      info.balkon_melk = !info.balkon_melk;
    }
    function conTaeed_shodeFn() {
      info.balkon_melk = !info.balkon_melk;
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
    function minS(space) {
      info.spaceFrom_melk = space;
    }
    function maxS(space) {
      info.spaceTo_melk = space;
    }
    function adviser(adviser_melk) {
      info.adviser_melk = adviser_melk;
    }
    function roomFn(room_melk) {
      info.room_melk = room_melk;
    }
    function yearsofbuildFn(yearsofbuild) {
      info.yearsofbuild = yearsofbuild;
    }
    function minRoof(roofs) {
      info.minroof_melk = roofs;
    }
    function maxRoof(roofs) {
      info.maxroof_melk = roofs;
    }

    return {
      group_subitem_name,

      sellMelkMarks,
      sellMelkPrice_items,

      sellMelkSpaceMarks,
      sellMelkSpace_items,

      yearsMarks,
      years_items,
      roofs_items,
      roofsMarks,

      minp,
      maxp,
      minS,
      maxS,
      minRoof,
      maxRoof,
      adviser,
      taeed_shode,
      conTaeed_shodeFn,
      tormajazi,
      conTormajaziFn,
      roomsValues,
      roomFn,
      yearsofbuildFn,
      lift_melk,
      conLift_melkFn,
      parking_melk,
      conParking_melkFn,
      anbar_melk,
      conBalkon_melkFn,
      balkon_melk,
      conAnbar_melkFn,
    };
  },
};
</script>

<style></style>
