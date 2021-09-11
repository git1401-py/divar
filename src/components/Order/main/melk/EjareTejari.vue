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
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);

    const vadieMelkMarks = computed(() => order_data.subItem.vadie_melk);
    const vadieMelkPrice_items = ref(["ودیعه", "حداقل", "حداکثر"]);

    const ejareMelkMarks = computed(() => order_data.subItem.ejare_melk);
    const ejareMelkPrice_items = ref(["اجاره", "حداقل", "حداکثر"]);

    const vadieMelkSpaceMarks = computed(() => order_data.subItem.space_ejare_melk);
    const vadieMelkSpace_items = ref(["متراژ", "از", "تا"]);

    const roomsValues = ref(["بدون اتاق", "1", "2", "3", "4", "بیشتر از 4"]);
    const del_tavafoghi = computed(() => order_data.del_tavafoghi);
    const tormajazi = computed(() => order_data.tormajazi);
    const yearsMarks = computed(() => order_data.subItem.yearsofbuild);
    const years_items = ref("سال ساخت بنا");
    const roofsMarks = computed(() => order_data.subItem.roof);
    const roofs_items = ref(["طبقه", "حداقل", "حداکثر"]);
    const lift_melk = computed(() => order_data.lift_melk);
    const parking_melk = computed(() => order_data.parking_melk);
    const anbar_melk = computed(() => order_data.anbar_melk);
    const balkon_melk = computed(() => order_data.balkon_melk);
    const just_single = computed(() => order_data.just_single);

    function conTavafoghiFn() {
      order_data.del_tavafoghi = !order_data.del_tavafoghi;
    }
    function conTormajaziFn() {
      order_data.tormajazi = !order_data.tormajazi;
    }
    function conLift_melkFn() {
      order_data.lift_melk = !order_data.lift_melk;
    }
    function conParking_melkFn() {
      order_data.parking_melk = !order_data.parking_melk;
    }
    function conAnbar_melkFn() {
      order_data.anbar_melk = !order_data.anbar_melk;
    }
    function conBalkon_melkFn() {
      order_data.balkon_melk = !order_data.balkon_melk;
    }
    function conJust_singleFn() {
      order_data.just_single = !order_data.just_single;
    }
    /*
vadie_melk: "",
      ejare_melk: "",
      vadie_ejare_melk: "",
      vadie_tejari: "",
      ejare_tejari: "",
 */
    function minvadie(minprice) {
      order_data.min_vadie_melk = minprice;
    }
    function maxvadie(maxprice) {
      order_data.max_vadie_melk = maxprice;
    }
    function minejare(minprice) {
      order_data.min_ejare_melk = minprice;
    }
    function maxejare(maxprice) {
      order_data.max_ejare_melk = maxprice;
    }
    function minSvadie(space) {
      order_data.spaceFrom_melk = space;
    }
    function maxSvadie(space) {
      order_data.spaceTo_melk = space;
    }
    function adviser(adviser_melk) {
      order_data.adviser_melk = adviser_melk;
    }
    function roomFn(room_melk) {
      order_data.room_melk = room_melk;
    }
    function yearsofbuildFn(yearsofbuild) {
      order_data.yearsofbuild = yearsofbuild;
    }
    function minRoof(roofs) {
      order_data.minroof_melk = roofs;
    }
    function maxRoof(roofs) {
      order_data.maxroof_melk = roofs;
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
