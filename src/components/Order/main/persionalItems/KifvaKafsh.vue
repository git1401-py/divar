<template>
  <div class="mt-5">
    <div class="fw-bold mb-3">نوع آگهی</div>
    <label for="zanane" class="form-check-label mx-2">زنانه</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="zanane"
      name="order_personal"
      value="زنانه"
      @input="order_data.jens_adalt"
    />
    <label for="mardane" class="form-check-label mx-2">مردانه</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="mardane"
      name="order_personal"
      value="مردانه"
      @input="order_data.jens_adalt"
    />
    <label for="zananemardane" class="form-check-label mx-2"
      >زنانه و مردانه</label
    >
    <input
      type="radio"
      class="form-check-input ms-5"
      id="zananemardane"
      name="order_personal"
      value="زنانه و مردانه"
      @input="order_data.jens_adalt"
    />
  </div>

  <div class="" v-if="group_subitem_name == 'کیف/کفش/کمربند'">
    <div class="mt-5">
      <span class="fw-bold">نوع کالا</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_kif"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_kif in type_kifs"
          :key="type_kif"
          :value="type_kif"
        >
          {{ type_kif }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <label for="zemanat" class="text-muted p-3">دارای ضمانت</label>
      <input
        id="zemanat"
        type="checkbox"
        class="form-check-input"
        value="true"
        v-model="order_data.zemanat"
      />
    </div>
    <div class="mt-5">
      <label for="darRagMokhtalef" class="text-muted p-3"
        >در رنگ و طرح متنوع</label
      >
      <input
        id="darRagMokhtalef"
        type="checkbox"
        class="form-check-input"
        value="true"
        v-model="order_data.darRagMokhtalef"
      />
    </div>
    <div class="mt-5">
      <span class="fw-bold">تولیدکننده</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.tolidi"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="tolidi in tolidis"
          :key="tolidi"
          :value="tolidi"
        >
          {{ tolidi }}
        </option>
      </select>
    </div>
    
  </div>
  <div class="" v-if="group_subitem_name == 'لباس'">
    <div class="mt-5">
      <span class="fw-bold">نوع لباس</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_clothes"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_clothes in type_clotheses"
          :key="type_clothes"
          :value="type_clothes"
        >
          {{ type_clothes }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <label for="darRagMokhtalef" class="text-muted p-3"
        >در رنگ و طرح متنوع</label
      >
      <input
        id="darRagMokhtalef"
        type="checkbox"
        class="form-check-input"
        value="true"
        v-model="order_data.darRagMokhtalef"
      />
    </div>
    <div class="mt-5">
      <span class="fw-bold">تولیدکننده</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.tolidi"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="tolidi in tolidis"
          :key="tolidi"
          :value="tolidi"
        >
          {{ tolidi }}
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

    const type_clotheses = computed(() => order_data.subItem.type_clothes);
    const tolidis = computed(() => order_data.subItem.tolidi);
    const type_kifs = computed(() => order_data.subItem.type_kif);

    // **********************

    // *****************

    return {
      type_clotheses,
      tolidis,
      type_kifs,

      group_subitem_name,
      order_data,
    };
  },
};
</script>

<style></style>
