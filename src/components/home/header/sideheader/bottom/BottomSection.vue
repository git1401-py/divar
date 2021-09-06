<template>
  <div class="small">
    <melk-section v-if="group_name == 'املاک'" />
    <vehicles-section v-if="group_name == 'وسایل نقلیه'" />
    <electrisite-section v-if="group_name == 'لوازم الکتریکی'" />
    <house-section v-if="group_name == 'مربوط به خانه'" />
    <khadamats-section v-if="group_name == 'خدمات'" />
    <persional-section v-if="group_name == 'وسایل شخصی'" />
    <sargarmi-section v-if="group_name == 'سرگرمی و فراعت'" />
    <social-section v-if="group_name == 'اجتماعی'" />
    <kasbvakar-section v-if="group_name == 'برای کسب و کار'" />
    <estekhdam-section v-if="group_name == 'استخدام و کاریابی'" />
    <cllapse-btntwo
      v-if="group_name == ''"
      :price_items="price_items"
      :marks="marks"
      @minp="minp"
      @maxp="maxp"
      id="defualtprice"
      exm="70,000,000"
      txt="تومان"
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
import { computed, ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import SectionFooter from "./SectionFooter.vue";
import MelkSection from "./MelkSection.vue";
import ElectrisiteSection from "./ElectrisiteSection.vue";
import EstekhdamSection from "./EstekhdamSection.vue";
import HouseSection from "./HouseSection.vue";
import KasbvakarSection from "./KasbvakarSection.vue";
import KhadamatsSection from "./KhadamatsSection.vue";
import PersionalSection from "./PersionalSection.vue";
import SargarmiSection from "./SargarmiSection.vue";
import SocialSection from "./SocialSection.vue";
import VehiclesSection from "./VehiclesSection.vue";
export default {
  components: {
    MovingBtn,
    CllapseBtntwo,
    SectionFooter,
    MelkSection,
    ElectrisiteSection,
    EstekhdamSection,
    HouseSection,
    KasbvakarSection,
    KhadamatsSection,
    PersionalSection,
    SargarmiSection,
    SocialSection,
    VehiclesSection,
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
    const group_name = computed(() => info.group_name);
    const price_items = ref(["قیمت", "حداقل", "حداکثر"]);
    const just_img = computed(() => info.just_img);
    const just_imediate = computed(() => info.just_imediate);
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
      group_name,
    };
  },
};
</script>

<style></style>
