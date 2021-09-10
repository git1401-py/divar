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
    const info = inject("info");
    const group_subitem_name = computed(() => info.group_subitem_name);

    const jens_adaltMarks = computed(() => info.subItem.jens_adalt);
    const jens_adalt_items = ref("مردانه یا زنانه");

    // **********************

    function jens_adaltFn(jens_adalt) {
      info.jens_adalt = jens_adalt;
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
