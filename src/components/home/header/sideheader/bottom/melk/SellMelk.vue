<template>
  <cllapse-btntwo
    :price_items="sellMelkPrice_items"
    :marks="sellMelkMarks"
    @minp="minp"
    @maxp="maxp"
    id="sellMelk"
    exm="800,000,000"
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
  <agahi id="adviserMelk" @adviser="adviser" />
  <hr />
  <moving-btn
    :conValue="del_tavafoghi"
    @conFn="conTavafoghiFn"
    title=" حذف توافقی ها"
  />
  <div class="" v-if="group_subitem_name == 'آپارتمان'">
    <hr />
    <moving-btn
      :conValue="tormajazi"
      @conFn="conTormajaziFn"
      title=" تور مجازی"
    />
    <hr />
    <room id="rooms" :roomsValues="roomsValues" @roomFn="roomFn" />
    <hr />
    <cllapse-btnone
      :data_items="years_items"
      :marks="yearsMarks"
      @dataFn="yearsofbuildFn"
      id="apyearsofbuildFn"
      exm="مثلا 100"
    />
    <hr />
    <cllapse-btntwo
      :price_items="roofs_items"
      :marks="roofsMarks"
      @minp="minRoof"
      @maxp="maxRoof"
      id="sellMelkRroofs"
      exm="2"
      txt=""
    />

    <hr />
    <moving-btn
      :conValue="lift_melk"
      @conFn="conLift_melkFn"
      title="با آسانسور"
    />
    <hr />
    <moving-btn
      :conValue="parking_melk"
      @conFn="conParking_melkFn"
      title="با پارکینگ"
    />
    <hr />
    <moving-btn
      :conValue="anbar_melk"
      @conFn="conAnbar_melkFn"
      title="با انباری"
    />
  </div>
  <div class="" v-if="group_subitem_name == 'خانه و ویلا'">
    <hr />
    <moving-btn
      :conValue="tormajazi"
      @conFn="conTormajaziFn"
      title=" تور مجازی"
    />
    <hr />
    <room id="rooms" :roomsValues="roomsValues" @roomFn="roomFn" />
    <hr />
    <cllapse-btnone
      :data_items="years_items"
      :marks="yearsMarks"
      @dataFn="yearsofbuildFn"
      id="viyearsofbuildFn"
      exm="100"
    />
    <hr />
    <cllapse-btntwo
      :price_items="roofs_items"
      :marks="roofsMarks"
      @minp="minRoof"
      @maxp="maxRoof"
      id="sellMelkRroofs"
      exm="2"
      txt=""
    />

    <hr />
    <moving-btn
      :conValue="lift_melk"
      @conFn="conLift_melkFn"
      title="با آسانسور"
    />
    <hr />
    <moving-btn
      :conValue="parking_melk"
      @conFn="conParking_melkFn"
      title="با پارکینگ"
    />
    <hr />
    <moving-btn
      :conValue="anbar_melk"
      @conFn="conAnbar_melkFn"
      title="با انباری"
    />
    <hr />
    <moving-btn
      :conValue="balkon_melk"
      @conFn="conBalkon_melkFn"
      title="با بالکن"
    />
  </div>
  <div class="" v-if="group_subitem_name == 'زمین کلنگی'"></div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import CllapseBtntwo from "../../UI/CllapseBtntwo.vue";
import CllapseBtnone from "../../UI/CllapseBtnone.vue";
import Agahi from "../../UI/Agahi.vue";
import Room from "../../UI/Room.vue";
import MovingBtn from "../../UI/MovingBtn.vue";
export default {
  components: {
    CllapseBtntwo,
    CllapseBtnone,
    Agahi,
    MovingBtn,
    Room,
  },
  setup() {
    const info = inject("info");
    const group_subitem_name = computed(() => info.group_subitem_name);
    const sellMelkMarks = computed(() => info.subItem.price_melk);

    const sellMelkSpaceMarks = computed(() => info.subItem.space_sell_melk);
    const sellMelkPrice_items = ref(["قیمت کل", "حداقل", "حداکثر"]);
    const sellMelkSpace_items = ref(["متراژ", "از", "تا"]);
    const roomsValues = ref(["بدون اتاق", "1", "2", "3", "4", "بیشتر از 4"]);
    const del_tavafoghi = computed(() => info.del_tavafoghi);
    const tormajazi = computed(() => info.tormajazi);
    const yearsMarks = computed(() => info.subItem.yearsofbuild);
    const years_items = ref("سال ساخت بنا");
    const roofsMarks = computed(() => info.subItem.roof);
    const roofs_items = ref(["طبقه", "حداقل", "حداکثر"]);
    const lift_melk = computed(() => info.lift_melk);
    const parking_melk = computed(() => info.parking_melk);
    const anbar_melk = computed(() => info.anbar_melk);
    const balkon_melk = computed(() => info.balkon_melk);

    function conTavafoghiFn() {
      info.del_tavafoghi = !info.del_tavafoghi;
    }
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
      del_tavafoghi,
      conTavafoghiFn,
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
