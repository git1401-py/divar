<template>
  <div class="small">
    <cllapse-btntwo
      :price_items="price_items"
      :marks="marks"
      @minp="minp"
      @maxp="maxp"
      id="defualtprice"
    />
    <hr />
    <moving-btn :conValue="just_img" @conFn="conImgFn" title="فقط عکس دار" />
    <hr />
    <moving-btn
      :conValue="just_imediate"
      @conFn="conImediateFn"
      title="فقط فوری ها"
    />
    <hr />
    <section-footer />
  </div>
</template>

<script>
import MovingBtn from "../UI/MovingBtn.vue";
import CllapseBtntwo from "../UI/CllapseBtntwo.vue";
import SectionFooter from "./SectionFooter.vue";
import { ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
export default {
  components: {
    MovingBtn,
    SectionFooter,
    CllapseBtntwo,
  },
  setup() {
    const info = inject("info");

    const marks = ref([
      "10 هزار",
      "25 هزار",
      "50 هزار",
      "70 هزار",
      "100 هزار",
      "150 هزار",
      "300 هزار",
      "500 هزار",
      "1 میلیون",
      "2 میلیون",
      "5 میلیون",
      "10 میلیون",
      "50 میلیون",
      "200 میلیون",
    ]);

    const price_items = ref(["قیمت", "حداقل", "حداکثر"]);
    const just_img = ref(false);
    const just_imediate = ref(false);
    function conImgFn() {
      info.just_img = !info.just_img;
    }
    function conImediateFn() {
      info.just_imediate = !info.just_imediate;
    }
    function minp(minprice) {
      info.minprice = minprice;
    }
    function maxp(maxprice) {
      info.maxprice = maxprice;
    }
    
    return {
      marks,
      price_items,
      just_img,
      just_imediate,
      conImgFn,
      conImediateFn,
      minp,
      maxp,
    };
  },
};
</script>

<style></style>
