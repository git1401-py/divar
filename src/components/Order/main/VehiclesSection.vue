<template>
  <div class="" v-if="group_item_name == 'قایق و لوازم جانبی'">
    <ghaiegh />
  </div>
  <div class="" v-if="group_item_name == 'قطعات یدکی و لوازم جانبی خودرو'">
    <ghataateyadaki />
  </div>
  <div class="" v-if="group_item_name == 'خودرو'">
    <khodro />
  </div>
  <div class="" v-if="group_item_name == 'موتور سیکلت و لوازم جانبی'">
    <motor />
  </div>
  <cllapse-btntwo
    :price_items="khodroPrice_items"
    :marks="khodroMarks"
    @minp="minp"
    @maxp="maxp"
    id="khodro"
    exm="700,000,000"
    txt="تومان"
  />
  <hr />
  <cllapse-btnone
    :data_items="type_adv_items"
    :marks="type_advMarks"
    @dataFn="type_advFn"
    id="type_adv"
    exm="فروشی یا درخواستی"
  />

  <hr />
  <agahi id="adviserMelk" @adviser="adviser" />
  <hr />
  <moving-btn
    :conValue="del_tavafoghi"
    @conFn="conTavafoghiFn"
    title=" حذف توافقی ها"
  />
  <hr />
  <cllapse-btnone
    :data_items="moaveze_items"
    :marks="moavezeMarks"
    @dataFn="moavezeFn"
    id="moaveze"
    exm="نمایش معاوضه ها"
  />
</template>

<script>
import ghaiegh from "./vehicles/ghaiegh.vue";
import ghataateyadaki from "./vehicles/ghataateyadaki.vue";
import khodro from "./vehicles/khodro.vue";
import motor from "./vehicles/motor.vue";
import { computed, inject, ref } from "@vue/runtime-core";
import CllapseBtntwo from "../UI/CllapseBtntwo.vue";
import CllapseBtnone from "../UI/CllapseBtnone.vue";
import Agahi from "../UI/Agahi.vue";
import MovingBtn from "../UI/MovingBtn.vue";
export default {
  components: {
    ghaiegh,
    ghataateyadaki,
    khodro,
    motor,
    CllapseBtntwo,
    CllapseBtnone,
    Agahi,
    MovingBtn,
  },
  setup() {
    const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const khodroMarks = computed(() => order_data.subItem.price);
    const khodroPrice_items = ref(["قیمت", "حداقل", "حداکثر"]);
    const type_advMarks = ["فروشی", "درخواستی"];
    const type_adv_items = ref("نوع آگهی");

    const moavezeMarks = ["نمایش فقط معاوضه ها", "حذف معاوشه ها"];
    const moaveze_items = ref("نمایش  معاوضه ها");

    const del_tavafoghi = computed(() => order_data.del_tavafoghi);
    const tormajazi = computed(() => order_data.tormajazi);

    function conTavafoghiFn() {
      order_data.del_tavafoghi = !order_data.del_tavafoghi;
    }
    function conTormajaziFn() {
      order_data.tormajazi = !order_data.tormajazi;
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
    function adviser(adviser_melk) {
      order_data.adviser_melk = adviser_melk;
    }
    function type_advFn(type_adv) {
      order_data.type_adv = type_adv;
    }
    function moavezeFn(moaveze) {
      order_data.moaveze = moaveze;
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

      moavezeMarks,
      moaveze_items,
      moavezeFn,

      group_item_name,
    };
  },
};
</script>

<style></style>
