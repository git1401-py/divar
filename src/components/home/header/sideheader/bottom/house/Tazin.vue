<template>
  
  <div class="" v-if="group_subitem_name == 'تزئینی و آقار هنری'"></div>
  <div class="" v-if="group_subitem_name == 'لوازم روشنایی'"></div>
  <div class="" v-if="group_subitem_name == 'میز و صندلی'"></div>
  <div class="" v-if="group_subitem_name == 'فرش و گلیم'"></div>
  <div class="" v-if="group_subitem_name == 'کمد و بوفه'"></div>
  <div class="" v-if="group_subitem_name == 'پرده و رومیزی'"></div>
  <div class="" v-if="group_subitem_name == 'تخت و اتاق خواب'"></div>
  <div class="" v-if="group_subitem_name == 'مبلمان و صندلی راحتی'"></div>
  <div class="" v-if="group_subitem_name == 'میز تلویزیون و وسایل سیستم پخش'"></div>
</template>

<script>
import { computed} from "@vue/reactivity";
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
    const info = inject("info");
    const group_subitem_name = computed(() => info.group_subitem_name);

    
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
