<template>
  <div class="" v-if="group_subitem_name == 'موبایل'">
    <cllapse-btnone
      :data_items="brand_mobile_items"
      :marks="brand_mobileMarks"
      @dataFn="brand_mobileFn"
      id="brand_mobile"
      exm="تعیین برند مدل"
    />
    <hr />
    <cllapse-btnone
      :data_items="esalatBrand_items"
      :marks="esalatBrandMarks"
      @dataFn="esalatBrandFn"
      id="esalatBrand"
      exm="انتخاب"
    />
    <hr />
    <cllapse-btnone
      :data_items="simNumber_items"
      :marks="simNumberMarks"
      @dataFn="simNumberFn"
      id="simNumber"
      exm="انتخاب"
    />
    <hr />
    <cllapse-btnone
      :data_items="Rom_mobile_items"
      :marks="Rom_mobileMarks"
      @dataFn="Rom_mobileFn"
      id="Rom_mobile"
      exm="انتخاب"
    />
    <hr />
    <cllapse-btnone
    :data_items="Ram_mobile_items"
      :marks="Ram_mobileMarks"
      @dataFn="Ram_mobileFn"
      id="Ram_mobile"
      exm="انتخاب"
    />
    <hr />
    <cllapse-btnone
      :data_items="color_electric_items"
      :marks="color_electricMarks"
      @dataFn="color_electricFn"
      id="color_electric"
      exm="انتخاب"
    />
    <hr />
  </div>
  <div class="" v-if="group_subitem_name == 'تبلت'">
    <cllapse-btnone
      :data_items="builder_tablet_items"
      :marks="builder_tabletMarks"
      @dataFn="builder_tabletFn"
      id="builder_tablet"
      exm="مثلا سامسونگ"
    />
    <hr />
  </div>
  <div class="" v-if="group_subitem_name == 'لوازم جانبی موبایل و تبلت'"></div>
  <div class="" v-if="group_subitem_name == 'سیم‌کارت'">
    <cllapse-btnone
      :data_items="simType_items"
      :marks="simTypeMarks"
      @dataFn="simTypeFn"
      id="simType"
      exm="نوع سیمکارت"
    />
    <hr />
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import CllapseBtnone from "../../UI/CllapseBtnone.vue";

import { inject } from "@vue/runtime-core";

export default {
  components: {
    CllapseBtnone,
  },
  setup() {
    const info = inject("info");
    const group_subitem_name = computed(() => info.group_subitem_name);

    const brand_mobileMarks = computed(() => info.subItem.brand_mobile);
    const brand_mobile_items = ref("برند و مدل");

    const esalatBrandMarks = computed(() => info.subItem.esalatBrand);
    const esalatBrand_items = ref("اصالت برند");

    const simNumberMarks = computed(() => info.subItem.simNumber);
    const simNumber_items = ref("تعداد سیم کارت");

    const Rom_mobileMarks = computed(() => info.subItem.Rom_mobile);
    const Rom_mobile_items = ref("حافظه داخلی");

    const Ram_mobileMarks = computed(() => info.subItem.Ram_mobile);
    const Ram_mobile_items = ref("مقدار رم");

    const color_electricMarks = computed(() => info.subItem.color_electric);
    const color_electric_items = ref("رنگ");

    const builder_tabletMarks = computed(() => info.subItem.builder_tablet);
    const builder_tablet_items = ref("برند");

    const simTypeMarks = computed(() => info.subItem.simType);
    const simType_items = ref("نوع سیمکارت");

    // **********************

    function brand_mobileFn(brand_mobile) {
      info.brand_mobile = brand_mobile;
    }

    function esalatBrandFn(esalatBrand) {
      info.esalatBrand = esalatBrand;
    }

    function simNumberFn(simNumber) {
      info.simNumber = simNumber;
    }

    function Rom_mobileFn(Rom_mobile) {
      info.Rom_mobile = Rom_mobile;
    }

    function Ram_mobileFn(Ram_mobile) {
      info.Ram_mobile = Ram_mobile;
    }

    function color_electricFn(color_electric) {
      info.color_electric = color_electric;
    }

    function builder_tabletFn(builder_tablet) {
      info.builder_tablet = builder_tablet;
    }

    function simTypeFn(simType) {
      info.simType = simType;
    }
    // *****************

    return {
      // **********one
      brand_mobileMarks,
      brand_mobile_items,
      brand_mobileFn,

      esalatBrandMarks,
      esalatBrand_items,
      esalatBrandFn,

      simNumberMarks,
      simNumber_items,
      simNumberFn,

      Rom_mobileMarks,
      Rom_mobile_items,
      Rom_mobileFn,

      Ram_mobileMarks,
      Ram_mobile_items,
      Ram_mobileFn,

      color_electricMarks,
      color_electric_items,
      color_electricFn,

      builder_tabletMarks,
      builder_tablet_items,
      builder_tabletFn,

      simTypeMarks,
      simType_items,
      simTypeFn,

      group_subitem_name,
    };
  },
};
</script>

<style></style>
