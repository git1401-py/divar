<template>
  <div class=""></div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";

export default {
  components: {},
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);

    return {
      order_data,
      group_subitem_name,
    };
  },
};
</script>

<style></style>
