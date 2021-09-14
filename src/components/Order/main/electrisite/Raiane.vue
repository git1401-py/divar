<template>
  
  <div class="" v-if="group_subitem_name == 'رایانه همراه'">
    <div class="mt-5">
      <span class="fw-bold">سازنده</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.builder_pc"
      >
        <option value="" selected disabled>انتخاب</option>
        <option
          class="text-start"
          v-for="builder_pc in builder_pcs"
          :key="builder_pc"
          :value="builder_pc"
        >
          {{ builder_pc }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">حافظهٔ رم</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.Ram_pc"
      >
        <option value="" selected disabled>انتخاب</option>
        <option
          class="text-start"
          v-for="Ram_pc in Ram_pcs"
          :key="Ram_pc"
          :value="Ram_pc"
        >
          {{ Ram_pc }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">ظرفیت حافظهٔ داخلی</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.HDD_pc"
      >
        <option value="" selected disabled>انتخاب</option>
        <option
          class="text-start"
          v-for="HDD_pc in HDD_pcs"
          :key="HDD_pc"
          :value="HDD_pc"
        >
          {{ HDD_pc }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">پردازنده</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.cpu_pc"
      >
        <option value="" selected disabled>انتخاب</option>
        <option
          class="text-start"
          v-for="cpu_pc in cpu_pcs"
          :key="cpu_pc"
          :value="cpu_pc"
        >
          {{ cpu_pc }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'رایانه رومیزی'"></div>
  <div class="" v-if="group_subitem_name == 'قطعات و لوازم جانبی'"></div>
  <div class="" v-if="group_subitem_name == 'لوازم و تجهیزات شبکه'"></div>
  <div class="" v-if="group_subitem_name == 'پرینتر/اسکنر/کپی/فکس'"></div>
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
    const builder_pcs = computed(() => order_data.subItem.builder_pc);
    const Ram_pcs = computed(() => order_data.subItem.Ram_pc);
    const HDD_pcs = computed(() => order_data.subItem.HDD_pc);
    const cpu_pcs = computed(() => order_data.subItem.cpu_pc);

   
    return{
      group_subitem_name,
      order_data,
      builder_pcs,
      Ram_pcs,
      HDD_pcs,
      cpu_pcs,
    };
  },
};
</script>

<style></style>
