<template>
  
  <div class="" v-if="group_subitem_name == 'نظافت و خیاطی و اتو'">
    <div class="mt-5">
      <span class="fw-bold">نوع کالا</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_device"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_device in type_devices"
          :key="type_device"
          :value="type_device"
        >
          {{ type_device }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'تعمیرات'"></div>
</template>

<script>
import { computed } from "@vue/reactivity";

import { inject } from "@vue/runtime-core";

export default {
  components: {
  },
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const type_devices = computed(() => order_data.subItem.type_device);

    return {
      group_subitem_name,
      order_data,
      type_devices,
    };
  },
};
</script>

<style></style>
