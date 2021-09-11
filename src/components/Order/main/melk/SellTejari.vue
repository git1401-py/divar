<template>
  <cllapse-btntwo
    :price_items="sellTejariPrice_items"
    :marks="sellTejariMarks"
    @minp="minp"
    @maxp="maxp"
    id="sellTejari"
    exm="800,000,000"
    txt="تومان"
  />
  <hr />
  <cllapse-btntwo
    :price_items="sellTejariSpace_items"
    :marks="sellTejariSpaceMarks"
    @minp="minS"
    @maxp="maxS"
    id="sellTejariSpace"
    exm="100"
    txt="متر"
  />

  <hr />
  <agahi id="adviserMelk" @adviser="adviser" />
  <hr />
  <cllapse-btnone
    :data_items="sanad_edari_items"
    :marks="sanad_edariMarks"
    @dataFn="sanad_edariFn"
    id="sanad_edari"
    exm="دارد یا ندارد"
  />
  <moving-btn
    :conValue="del_tavafoghi"
    @conFn="conTavafoghiFn"
    title=" حذف توافقی ها"
  />
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
      id="sellRroofs"
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
    const sellTejariMarks = computed(() => order_data.subItem.price_tejari);
    const sellTejariPrice_items = ref(["قیمت کل", "حداقل", "حداکثر"]);

    const sellTejariSpaceMarks = computed(() => order_data.subItem.space_sell_tejari);
    const sellTejariSpace_items = ref(["متراژ", "از", "تا"]);
    const roomsValues = ref(["بدون اتاق", "1", "2", "3", "4", "بیشتر از 4"]);
    const del_tavafoghi = computed(() => order_data.del_tavafoghi);
    const tormajazi = computed(() => order_data.tormajazi);
    const yearsMarks = computed(() => order_data.subItem.yearsofbuild);
    const years_items = ref("سال ساخت بنا");
    const sanad_edariMarks = ["دارد", "ندارد"];
    const sanad_edari_items = ref("سند اداری");
    const roofsMarks = computed(() => order_data.subItem.roof);
    const roofs_items = ref(["طبقه", "حداقل", "حداکثر"]);
    const lift_melk = computed(() => order_data.lift_melk);
    const parking_melk = computed(() => order_data.parking_melk);
    const anbar_melk = computed(() => order_data.anbar_melk);
    const balkon_melk = computed(() => order_data.balkon_melk);

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
    /*
vadie_melk: "",
      ejare_melk: "",
      vadie_ejare_melk: "",
      vadie_tejari: "",
      ejare_tejari: "",
 */
    function minp(minprice) {
      order_data.minprice = minprice;
    }
    function maxp(maxprice) {
      order_data.maxprice = maxprice;
    }
    function minS(space) {
      order_data.spaceFrom_melk = space;
    }
    function maxS(space) {
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
    function sanad_edariFn(sanad_edari) {
      order_data.sanad_edari = sanad_edari;
    }
    function minRoof(roofs) {
      order_data.minroof_melk = roofs;
    }
    function maxRoof(roofs) {
      order_data.maxroof_melk = roofs;
    }

    return {
      group_subitem_name,

      sellTejariMarks,
      sellTejariPrice_items,

      sellTejariSpaceMarks,
      sellTejariSpace_items,

      yearsMarks,
      years_items,

      sanad_edariMarks,
      sanad_edari_items,

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
      sanad_edariFn,
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
