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
  
</template>

<script>
import ghaiegh from "./vehicles/ghaiegh.vue";
import ghataateyadaki from "./vehicles/ghataateyadaki.vue";
import khodro from "./vehicles/khodro.vue";
import motor from "./vehicles/motor.vue";
import { computed, inject } from "@vue/runtime-core";
export default {
  components: {
    ghaiegh,
    ghataateyadaki,
    khodro,
    motor,
  },
  setup() {
    const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    const khodroMarks = computed(() => order_data.subItem.price);

    return {
      khodroMarks,
order_data,
      group_item_name,
    };
  },
};
</script>

<style></style>
