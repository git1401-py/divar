<template>
  <cllapse-btnone
    :data_items="jens_child_items"
    :marks="jens_childMarks"
    @dataFn="jens_childFn"
    id="jens_child"
    exm="پسرانه یا دخترانه"
  />

  <hr />
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

    const jens_childMarks = computed(() => order_data.subItem.jens_child);
    const jens_child_items = ref("دخترانه یا پسرانه");


    // **********************

    function jens_childFn(jens_child) {
      order_data.jens_child = jens_child;
    }
    // *****************
    
    return {
        // **********one
      jens_childMarks,
      jens_child_items,
      jens_childFn,
    
    // ****two

    // *******moving

      group_subitem_name,
    };
  },
};
</script>

<style></style>
