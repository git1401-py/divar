<template>
  <div class="" v-if="group_item_name == 'بلیط'">
    <blit />
  </div>
  <div class="" v-if="group_item_name == 'تور و چادر'">
    <torvaChador />
  </div>
  <div class="" v-if="group_item_name == 'کتاب و مجله'">
    <books />
  </div>
  <div class="" v-if="group_item_name == 'دوچرخه/اسکیت/اسکوتر'">
    <docharkhe />
  </div>
  <div class="" v-if="group_item_name == 'حیوانات'">
    <animel />
  </div>
  <div class="" v-if="group_item_name == 'کلکسیون و سرگرمی'">
    <kolekson />
  </div>
  <div class="" v-if="group_item_name == 'آلات موسیقی'">
    <music />
  </div>
  <div class="" v-if="group_item_name == 'ورزش و تناسب اندام'">
    <varzesh />
  </div>
  <div class="" v-if="group_item_name == 'اسباب بازی'">
    <toys />
  </div>
  <cllapse-btntwo
    :price_items="sargarmi_price_items"
    :marks="sargarmi_priceMarks"
    @minp="minp"
    @maxp="maxp"
    id="sargarmi_price"
    exm="100,000"
    txt="تومان"
  />

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
import { computed, ref } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';
import blit from "./sargarmi/blit.vue";
import torvaChador from "./sargarmi/torvaChador.vue";
import books from "./sargarmi/books.vue";
import docharkhe from "./sargarmi/docharkhe.vue";
import animel from "./sargarmi/animel.vue";
import kolekson from "./sargarmi/kolekson.vue";
import music from "./sargarmi/music.vue";
import varzesh from "./sargarmi/varzesh.vue";
import toys from "./sargarmi/toys.vue";
import CllapseBtntwo from "../UI/CllapseBtntwo.vue";
import CllapseBtnone from "../UI/CllapseBtnone.vue";
import MovingBtn from "../UI/MovingBtn.vue";
export default {
  components: {
    blit,
    torvaChador,
    books,
    docharkhe,
    animel,
    kolekson,
    music,
    varzesh,
    toys,
CllapseBtntwo,
    CllapseBtnone,
    MovingBtn,
  },
  setup() {
     const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    const sargarmi_priceMarks = computed(() => order_data.subItem.sargarmi_price);
    const sargarmi_price_items = ref(["قیمت", "حداقل", "حداکثر"]);



    const moavezeMarks = ["نمایش فقط معاوضه ها", "حذف معاوشه ها"];
    const moaveze_items = ref("نمایش  معاوضه ها");

    const del_tavafoghi = computed(() => order_data.del_tavafoghi);

    function conTavafoghiFn() {
      order_data.del_tavafoghi = !order_data.del_tavafoghi;
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

   
    
    function moavezeFn(moaveze) {
      order_data.moaveze = moaveze;
    }
    return {

      sargarmi_priceMarks,
      sargarmi_price_items,

      minp,
      maxp,
      

      del_tavafoghi,
      conTavafoghiFn,
     
      


      moavezeMarks,
      moaveze_items,
      moavezeFn,
      group_item_name
    };
  },
};
</script>

<style></style>
