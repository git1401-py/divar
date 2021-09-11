<template>
  <cllapse-btnone
    :data_items="jens_adalt_items"
    :marks="jens_adaltMarks"
    @dataFn="jens_adaltFn"
    id="jens_adalt"
    exm="مردانه یا زنانه"
  />

  <hr />

  
  <div class="" v-if="group_subitem_name == 'کیف/کفش/کمربند'"></div>
  <div class="" v-if="group_subitem_name == 'لباس'"></div>
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
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);

    const jens_adaltMarks = computed(() => order_data.subItem.jens_adalt);
    const jens_adalt_items = ref("مردانه یا زنانه");

    // **********************

    function jens_adaltFn(jens_adalt) {
      order_data.jens_adalt = jens_adalt;
    }
    // *****************

    return {
        // **********one
          
      jens_adaltMarks,
      jens_adalt_items,
      jens_adaltFn,
    // ****two

    // *******moving

      group_subitem_name,
    };
  },
};
</script>

<style></style>
