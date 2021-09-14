<template>
  <div class="mt-5">
    <span class="fw-bold">وضعیت</span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.status"
    >
      <option value="" selected disabled></option>
      <option
        class="text-start"
        v-for="status in statuses"
        :key="status"
        :value="status"
      >
        {{ status }}
      </option>
    </select>
  </div>
</template>

<script>
import { computed, inject } from '@vue/runtime-core';


export default {
  components: {
   
  },
  setup() {
    const order_data = inject("order_data");
    const statuses = computed(() => order_data.subItem.status);
  
    return {
       statuses,order_data,
    };
  },
};
</script>

<style></style>
