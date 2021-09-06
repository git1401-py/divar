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
  <div class="" v-if="group_subitem_name == 'آپارتمان'"></div>
  <div class="" v-if="group_subitem_name == 'خانه و ویلا'"></div>
  <div class="" v-if="group_subitem_name == 'زمین کلنگی'"></div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import CllapseBtntwo from "../../UI/CllapseBtntwo.vue";
import Agahi from "../../UI/Agahi.vue";
import MovingBtn from "../../UI/MovingBtn.vue";
export default {
  components: {
    CllapseBtntwo,
    Agahi,
    MovingBtn,
  },
  setup() {
    const info = inject("info");
    const group_item_name = computed(() => info.group_item_name);
    const sellMelkMarks = computed(() => info.subItem.price_melk);
    console.log(sellMelkMarks);
    console.log(info.subItem.price_melk);
    
    const sellMelkSpaceMarks = computed(() => info.subItem.space_sell_melk);
    const sellMelkPrice_items = ref(["قیمت کل", "حداقل", "حداکثر"]);
    const sellMelkSpace_items = ref(["متراژ", "از", "تا"]);
    const del_tavafoghi = computed(() => info.del_tavafoghi);
    function conTavafoghiFn() {
      info.del_tavafoghi = !info.del_tavafoghi;
    }
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

    return {
      group_item_name,

      sellMelkMarks,
      sellMelkPrice_items,

      sellMelkSpaceMarks,
      sellMelkSpace_items,

      minp,
      maxp,
      minS,
      maxS,
      adviser,
      del_tavafoghi,
      conTavafoghiFn,
    };
  },
};
</script>

<style></style>
