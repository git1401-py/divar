<template>
  <div class="" v-if="group_item_name == 'کیف،کفش و لباس'">
    <kifvaKafsh />
  </div>
  <div class="" v-if="group_item_name == 'تزئینی'">
    <tazin />
  </div>
  <div class="" v-if="group_item_name == 'آرایشی، بهداشتی و درمانی'">
    <araieshi />
  </div>
  <div class="" v-if="group_item_name == 'وسایل بچه و اسباب بازی'">
    <child />
  </div>
  <div class="" v-if="group_item_name == 'لوازم التحریر'">
    <lavazem-tahrir />
  </div>
  <cllapse-btnone
    :data_items="status_items"
    :marks="statusMarks"
    @dataFn="statusFn"
    id="status"
    exm="انتخاب"
  />

  <hr />
  
<cllapse-btntwo
    :price_items="personal_price_items"
    :marks="personal_priceMarks"
    @minp="minp"
    @maxp="maxp"
    id="personal_price"
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
import KifvaKafsh from "./persionalItems/KifvaKafsh.vue";
import Tazin from "./persionalItems/Tazin.vue";
import Araieshi from "./persionalItems/Araieshi.vue";
import Child from "./persionalItems/Child.vue";
import LavazemTahrir from "./persionalItems/LavazemTahrir.vue";
import CllapseBtntwo from "../UI/CllapseBtntwo.vue";
import CllapseBtnone from "../UI/CllapseBtnone.vue";
import MovingBtn from "../UI/MovingBtn.vue";
export default {
  components: {
    KifvaKafsh,
    Tazin,
    Araieshi,
    Child,
    LavazemTahrir,
    CllapseBtntwo,
    CllapseBtnone,
    MovingBtn,
  },
  setup() {
     const info = inject("info");
    const group_item_name = computed(() => info.group_item_name);
    const personal_priceMarks = computed(() => info.subItem.personal_price);
    const personal_price_items = ref(["قیمت", "حداقل", "حداکثر"]);


    const statusMarks = computed(() => info.subItem.status);
    const status_items = ref("وضعیت کالا");

    const moavezeMarks = ["نمایش فقط معاوضه ها", "حذف معاوشه ها"];
    const moaveze_items = ref("نمایش  معاوضه ها");

    const del_tavafoghi = computed(() => info.del_tavafoghi);

    function conTavafoghiFn() {
      info.del_tavafoghi = !info.del_tavafoghi;
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

    function statusFn(status) {
      info.status = status;
    }
    
    function moavezeFn(moaveze) {
      info.moaveze = moaveze;
    }
    return {

      personal_priceMarks,
      personal_price_items,

      minp,
      maxp,
      

      del_tavafoghi,
      conTavafoghiFn,
     
      statusMarks,
      status_items,
      statusFn,


      moavezeMarks,
      moaveze_items,
      moavezeFn,
      group_item_name
    };
  },
};
</script>

<style></style>
