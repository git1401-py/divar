<template>
  <div class="" v-if="group_item_name == 'فروش مسکونی'">
    <sell-melk />
  </div>
  <div class="" v-if="group_item_name == 'اجاره مسکونی'">
    <ejare-melk />
  </div>
  <div class="" v-if="group_item_name == 'فروش اداری و تجاری'">
    <sell-tejari />
  </div>
  <div class="" v-if="group_item_name == 'اجاره اداری و تجاری'">
    <ejare-tejari />
  </div>
  <div class="" v-if="group_item_name == 'اجاره کوتاه مدت'">
    <ejare-small />
  </div>
  <div class="" v-if="group_item_name == 'پروژه های ساخت و ساز'">
    <building-pro />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';
import SellMelk from "./melk/SellMelk.vue";
import EjareMelk from "./melk/EjareMelk.vue";
import SellTejari from "./melk/SellTejari.vue";
import EjareTejari from "./melk/EjareTejari.vue";
import EjareSmall from "./melk/EjareSmall.vue";
import BuildingPro from "./melk/BuildingPro.vue";
export default {
  components: {
    SellMelk,
    EjareMelk,
    SellTejari,
    EjareTejari,
    EjareSmall,
    BuildingPro
  },
  setup() {
     const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    return {
      group_item_name
    };
  },
};
</script>

<style></style>
