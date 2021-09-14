<template>
  
  <div class="" v-if="group_subitem_name == 'ساعت'"></div>
  <div class="" v-if="group_subitem_name == 'جواهرات'"></div>
  <div class="" v-if="group_subitem_name == 'بدلیجات'"></div>
  
</template>

<script>
import { computed } from "@vue/reactivity";
// import CllapseBtntwo from "../../UI/CllapseBtntwo.vue";
// import CllapseBtnone from "../../UI/CllapseBtnone.vue";
// import MovingBtn from "../../UI/MovingBtn.vue";

import { inject } from "@vue/runtime-core";

export default {
  components: { 
    // CllapseBtnone,
    // CllapseBtntwo,
    // MovingBtn
  },
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);

    
    return {
        // **********one  
    // ****two
      
    // *******moving
      
      group_subitem_name,
    };
  },
};
</script>

<style></style>
