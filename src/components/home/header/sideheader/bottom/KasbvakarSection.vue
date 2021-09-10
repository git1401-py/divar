<template>
  <div class=""></div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';
export default {
  components: {
  },
  setup() {
     const info = inject("info");
    const group_item_name = computed(() => info.group_item_name);
    return {
      group_item_name
    };
  },
};
</script>

<style></style>
