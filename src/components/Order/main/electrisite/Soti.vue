<template>
  <div class="" v-if="group_subitem_name == 'فیلم و موسیقی'"></div>
  <div class="" v-if="group_subitem_name == 'دوربین عکاسی و فیلم‌برداری'"></div>
  <div class="" v-if="group_subitem_name == 'پخش‌کننده همراه'"></div>
  <div class="" v-if="group_subitem_name == 'سیستم صوتی خانگی'"></div>
  <div class="" v-if="group_subitem_name == 'ویدئو و پخش کننده DVD'"></div>
  <div class="" v-if="group_subitem_name == 'تلویزیون و پروژکتور'">
    <div class="mt-5">
      <span class="fw-bold">نوع کالا</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.tv_p_type"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="tv_p_type in tv_p_types"
          :key="tv_p_type"
          :value="tv_p_type"
        >
          {{ tv_p_type }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'دوربین مداربسته'"></div>
</template>

<script>
import { computed } from "@vue/reactivity";

import { inject } from "@vue/runtime-core";

export default {
  components: {},
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const tv_p_types = computed(() => order_data.subItem.tv_p_type);

    return {
      order_data,
      group_subitem_name,
      tv_p_types,
    };
  },
};
</script>

<style></style>
