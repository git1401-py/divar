<template>
  <cllapse-btntwo
    :price_items="vadieMelkPrice_items"
    :marks="vadieMelkMarks"
    @minp="minvadie"
    @maxp="maxvadie"
    id="vadieMelk"
    exm="70,000,000"
    txt="تومان"
  />
  <hr />
  <cllapse-btntwo
    :price_items="ejareMelkPrice_items"
    :marks="ejareMelkMarks"
    @minp="minejare"
    @maxp="maxejare"
    id="ejareMelk"
    exm="70,000,000"
    txt="تومان"
  />
  <hr />
  <cllapse-btntwo
    :price_items="vadieMelkSpace_items"
    :marks="vadieMelkSpaceMarks"
    @minp="minSvadie"
    @maxp="maxSvadie"
    id="vadieMelkSpace"
    exm="100"
    txt="متر"
  />

  <!-- <hr />
  <moving-btn
    :conValue="del_tavafoghi"
    @conFn="conTavafoghiFn"
    title=" حذف توافقی ها"
  /> -->

  <hr />
  <agahi id="adviserMelk" @adviser="adviser" />

  <div class="" v-if="group_subitem_name == 'دفتر کار،اتاق اداری و مطب'">
    <hr />
    <room id="rooms" :roomsValues="roomsValues" @roomFn="roomFn" />
    <hr />
    <cllapse-btnone
      :data_items="years_items"
      :marks="yearsMarks"
      @dataFn="yearsofbuildFn"
      id="yearsofbuildFn"
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
      :conValue="anbar_melk"
      @conFn="conAnbar_melkFn"
      title="با انباری"
    />
    <hr />
    <moving-btn
      :conValue="parking_melk"
      @conFn="conParking_melkFn"
      title="با پارکینگ"
    />
  </div>
  <div class="" v-if="group_subitem_name == 'مغازه و غرفه'">
    <hr />
    <room id="rooms" :roomsValues="roomsValues" @roomFn="roomFn" />
    <hr />
    <cllapse-btnone
      :data_items="years_items"
      :marks="yearsMarks"
      @dataFn="yearsofbuildFn"
      id="yearsofbuildFn"
      exm="100"
    />
  </div>
  <div class="" v-if="group_subitem_name == 'صنعتی، کشاورزی و تجاری'">
    <hr />
    <room id="rooms" :roomsValues="roomsValues" @roomFn="roomFn" />
    <hr />
    <cllapse-btnone
      :data_items="years_items"
      :marks="yearsMarks"
      @dataFn="yearsofbuildFn"
      id="yearsofbuildFn"
      exm="100"
    />
  </div>
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

    const vadieMelkMarks = computed(() => info.subItem.vadie_melk);
    const vadieMelkPrice_items = ref(["ودیعه", "حداقل", "حداکثر"]);

    const ejareMelkMarks = computed(() => info.subItem.ejare_melk);
    const ejareMelkPrice_items = ref(["اجاره", "حداقل", "حداکثر"]);

    const vadieMelkSpaceMarks = computed(() => info.subItem.space_ejare_melk);
    const vadieMelkSpace_items = ref(["متراژ", "از", "تا"]);

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
    const just_single = computed(() => info.just_single);

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
    function conJust_singleFn() {
      info.just_single = !info.just_single;
    }
    /*
vadie_melk: "",
      ejare_melk: "",
      vadie_ejare_melk: "",
      vadie_tejari: "",
      ejare_tejari: "",
 */
    function minvadie(minprice) {
      info.min_vadie_melk = minprice;
    }
    function maxvadie(maxprice) {
      info.max_vadie_melk = maxprice;
    }
    function minejare(minprice) {
      info.min_ejare_melk = minprice;
    }
    function maxejare(maxprice) {
      info.max_ejare_melk = maxprice;
    }
    function minSvadie(space) {
      info.spaceFrom_melk = space;
    }
    function maxSvadie(space) {
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

      vadieMelkMarks,
      vadieMelkPrice_items,

      ejareMelkMarks,
      ejareMelkPrice_items,

      vadieMelkSpaceMarks,
      vadieMelkSpace_items,

      yearsMarks,
      years_items,
      roofs_items,
      roofsMarks,

      minvadie,
      maxvadie,
      minejare,
      maxejare,
      minSvadie,
      maxSvadie,
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
      just_single,
      conJust_singleFn,
    };
  },
};
</script>

<style></style>
