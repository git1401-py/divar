<template>
  <div class="" v-if="group_subitem_name == 'سرویس بهداشتی و سونا'"></div>
  <div class="" v-if="group_subitem_name == 'سیستم گرمایشی سرمایشی و گاز'">
    <div class="mt-5">
      <span class="fw-bold">نوع کالا</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_building_system"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_building_system in type_building_systems"
          :key="type_building_system"
          :value="type_building_system"
        >
          {{ type_building_system }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'آشپزخانه'"></div>
  <div class="" v-if="group_subitem_name == 'حیاط و ایوان'"></div>
  <div class="" v-if="group_subitem_name == 'ابزار باغبانی'">
    <div class="mt-5">
      <span class="fw-bold">نوع کالا</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_abzar"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_abzar in type_abzars"
          :key="type_abzar"
          :value="type_abzar"
        >
          {{ type_abzar }}
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
    const type_building_systems = computed(
      () => order_data.subItem.type_building_system
    );
    const type_abzars = computed(() => order_data.subItem.type_abzar);

    return {
      group_subitem_name,
      order_data,
      type_building_systems,
      type_abzars,
    };
  },
};
</script>

<style></style>
