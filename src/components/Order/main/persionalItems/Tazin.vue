<template>
  <div class="" v-if="group_subitem_name == 'ساعت'">
    <div class="mt-5">
      <span class="fw-bold">نوع ساعت</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_watch"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_watch in type_watchs"
          :key="type_watch"
          :value="type_watch"
        >
          {{ type_watch }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'جواهرات'">
    <div class="mt-5">
      <span class="fw-bold">نوع کالا</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_javaher"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_javaher in type_javahers"
          :key="type_javaher"
          :value="type_javaher"
        >
          {{ type_javaher }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">جنس</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.jenskala_javaher"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="jenskala_javaher in jenskala_javahers"
          :key="jenskala_javaher"
          :value="jenskala_javaher"
        >
          {{ jenskala_javaher }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'بدلیجات'">
    <div class="mt-5">
      <span class="fw-bold">نوع کالا</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_badalijat"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_badalijat in type_badalijats"
          :key="type_badalijat"
          :value="type_badalijat"
        >
          {{ type_badalijat }}
        </option>
      </select>
    </div>
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
    const type_watchs = computed(() => order_data.subItem.type_watch);
    const type_javahers = computed(() => order_data.subItem.type_javaher);
    const jenskala_javahers = computed(
      () => order_data.subItem.jenskala_javaher
    );
    const type_badalijats = computed(() => order_data.subItem.type_badalijat);

    return {
      order_data,
      group_subitem_name,
      type_watchs,
      type_javahers,
      jenskala_javahers,
      type_badalijats,
    };
  },
};
</script>

<style></style>
