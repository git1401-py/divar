<template>
  
  <div class="" v-if="group_subitem_name == 'ماشین ظرفشویی'"></div>
  <div class="" v-if="group_subitem_name == 'یخچال و فریزر'"></div>
  <div class="" v-if="group_subitem_name == 'وسایل آشپزی و غذاخوری'"></div>
  <div class="" v-if="group_subitem_name == 'مایکروویو و گاز'"></div>
  <div class="" v-if="group_subitem_name == 'ماشین لباسشویی و خشک کننده'"></div>
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
