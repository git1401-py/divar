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
    const info = inject("info");
    const group_subitem_name = computed(() => info.group_subitem_name);

    const jens_childMarks = computed(() => info.subItem.jens_child);
    const jens_child_items = ref("دخترانه یا پسرانه");


    // **********************

    function jens_childFn(jens_child) {
      info.jens_child = jens_child;
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
