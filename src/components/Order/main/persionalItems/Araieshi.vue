<template>
  <div class="mt-5">
    <span class="fw-bold">نوع کالا</span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.type_araiesh"
    >
      <option value="" selected disabled></option>
      <option
        class="text-start"
        v-for="type_araiesh in type_araieshs"
        :key="type_araiesh"
        :value="type_araiesh"
      >
        {{ type_araiesh }}
      </option>
    </select>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

import { inject } from "@vue/runtime-core";

export default {
  components: {},
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const type_araieshs = computed(() => order_data.subItem.type_araiesh);

    return {
      group_subitem_name,
      order_data,
      type_araieshs,
    };
  },
};
</script>

<style></style>
