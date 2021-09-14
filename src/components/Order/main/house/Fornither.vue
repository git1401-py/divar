<template>
  
  <div class="" v-if="group_subitem_name == 'ماشین ظرفشویی'">
     <div class="mt-5">
      <span class="fw-bold">برند</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_fornither_zarf"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_fornither_zarf in type_fornither_zarfs"
          :key="type_fornither_zarf"
          :value="type_fornither_zarf"
        >
          {{ type_fornither_zarf }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'یخچال و فریزر'">
    <div class="mt-5">
      <span class="fw-bold">برند</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_fornither_iakh"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_fornither_iakh in type_fornither_iakhs"
          :key="type_fornither_iakh"
          :value="type_fornither_iakh"
        >
          {{ type_fornither_iakh }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'وسایل آشپزی و غذاخوری'"></div>
  <div class="" v-if="group_subitem_name == 'مایکروویو و گاز'">
    <div class="mt-5">
      <span class="fw-bold">نوع کالا</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_fornither_gaz"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_fornither_gaz in type_fornither_gazs"
          :key="type_fornither_gaz"
          :value="type_fornither_gaz"
        >
          {{ type_fornither_gaz }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'ماشین لباسشویی و خشک کننده'">
    <div class="mt-5">
      <span class="fw-bold">برند</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_fornither_lebas"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_fornither_lebas in type_fornither_lebass"
          :key="type_fornither_lebas"
          :value="type_fornither_lebas"
        >
          {{ type_fornither_lebas }}
        </option>
      </select>
    </div>
  </div>
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
    const type_fornither_zarfs = computed(() => order_data.subItem.type_fornither_zarf);
    const type_fornither_iakhs = computed(() => order_data.subItem.type_fornither_iakh);
    const type_fornither_gazs = computed(() => order_data.subItem.type_fornither_gaz);
    const type_fornither_lebass = computed(() => order_data.subItem.type_fornither_lebas);

    
    return {
      group_subitem_name,
      order_data,
      type_fornither_zarfs,
      type_fornither_iakhs,
      type_fornither_gazs,
      type_fornither_lebass,
    };
  },
};
</script>

<style></style>
