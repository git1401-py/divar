<template>
  <div class="" v-if="group_item_name == 'رویداد'">
    <roidad />
  </div>
  <div class="" v-if="group_item_name == 'داوطلبانه'">
    <davtalabane />
  </div>
  <div class="" v-if="group_item_name == 'گم شده ها'">
    <gomshodeha />
  </div>
 
</template>

<script>
import { computed } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';
import roidad from "./social/roidad.vue";
import davtalabane from "./social/davtalabane.vue";
import gomshodeha from "./social/gomshodeha.vue";
export default {
  components: {
    roidad,
    davtalabane,
    gomshodeha,
  },
  setup() {
     const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
   
    return {
      group_item_name,
      order_data
    };
  },
};
</script>

<style></style>
