<template>
  
  <div class="" v-if="group_subitem_name == 'تزئینی و آقار هنری'">
    <div class="mt-5">
      <span class="fw-bold">نوع کالا</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_taziv_tazini"
      >
        <option value="" selected disabled>انتخاب</option>
        <option
          class="text-start"
          v-for="type_taziv_tazini in type_taziv_tazinis"
          :key="type_taziv_tazini"
          :value="type_taziv_tazini"
        >
          {{ type_taziv_tazini }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'لوازم روشنایی'">
    <div class="mt-5">
      <span class="fw-bold">نوع کالا</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_tazin_nor"
      >
        <option value="" selected disabled>انتخاب</option>
        <option
          class="text-start"
          v-for="type_tazin_nor in type_tazin_nors"
          :key="type_tazin_nor"
          :value="type_tazin_nor"
        >
          {{ type_tazin_nor }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'میز و صندلی'"></div>
  <div class="" v-if="group_subitem_name == 'فرش و گلیم'">
    <div class="mt-5">
      <span class="fw-bold">ویژگی‌ها</span>
    </div>
    <div class="mt-5">
      <span class="fw-bold">نوع</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_tazin_farsh"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_tazin_farsh in type_tazin_farshs"
          :key="type_tazin_farsh"
          :value="type_tazin_farsh"
        >
          {{ type_tazin_farsh }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <div class="fw-bold mb-3">بافت</div>
      <label for="dasti" class="form-check-label mx-2">دست بافت</label>
      <input
        type="radio"
        class="form-check-input ms-5"
        id="dasti"
        name="baft"
        value="دست بافت"
        @input="order_data.baft"
      />
      <label for="mashini" class="form-check-label mx-2">ماشینی</label>
      <input
        type="radio"
        class="form-check-input ms-5"
        id="mashini"
        name="baft"
        value="ماشینی"
        @input="order_data.baft"
      />
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'کمد و بوفه'"></div>
  <div class="" v-if="group_subitem_name == 'پرده و رومیزی'"></div>
  <div class="" v-if="group_subitem_name == 'تخت و اتاق خواب'"></div>
  <div class="" v-if="group_subitem_name == 'مبلمان و صندلی راحتی'">
    <div class="mt-5">
      <span class="fw-bold">ویژگی‌ها</span>
    </div>
    <div class="mt-5">
      <span class="fw-bold">نوع مبل</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.type_tazin_sandali"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="type_tazin_sandali in type_tazin_sandalis"
          :key="type_tazin_sandali"
          :value="type_tazin_sandali"
        >
          {{ type_tazin_sandali }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">جنس بدنه</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.jenseBody"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="jenseBody in jenseBodys"
          :key="jenseBody"
          :value="jenseBody"
        >
          {{ jenseBody }}
        </option>
      </select>
    </div>,
    <div class="mt-5">
      <span class="fw-bold">جنس روکش</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.jenseRokesh"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="jenseRokesh in jenseRokeshs"
          :key="jenseRokesh"
          :value="jenseRokesh"
        >
          {{ jenseRokesh }}
        </option>
      </select>
    </div>,
    <div class="mt-5">
      <span class="fw-bold">تعداد نشیمن</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.numberNeshiman"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="numberNeshiman in numberNeshimans"
          :key="numberNeshiman"
          :value="numberNeshiman"
        >
          {{ numberNeshiman }}
        </option>
      </select>
    </div>,
    <div class="mt-5">
      <span class="fw-bold">وضعیت ضمانت</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.zemanat"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="zemanat in zemanats"
          :key="zemanat"
          :value="zemanat"
        >
          {{ zemanat }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'میز تلویزیون و وسایل سیستم پخش'"></div>
</template>

<script>
import { computed} from "@vue/reactivity";

import { inject } from "@vue/runtime-core";

export default {
  components: {
  },
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const type_taziv_tazinis = computed(() => order_data.subItem.type_taziv_tazini);
    const type_tazin_nors = computed(() => order_data.subItem.type_tazin_nor);
    const type_tazin_farshs = computed(() => order_data.subItem.type_tazin_farsh);
    const type_tazin_sandalis = computed(() => order_data.subItem.type_tazin_sandali);
    const jenseBodys = computed(() => order_data.subItem.jenseBody);
    const jenseRokeshs = computed(() => order_data.subItem.jenseRokesh);
    const numberNeshimans = computed(() => order_data.subItem.numberNeshiman);
    const zemanats = computed(() => order_data.subItem.zemanat);

    
    return {
      group_subitem_name,
      order_data,
      type_taziv_tazinis,
      type_tazin_nors,
      type_tazin_farshs,
      type_tazin_sandalis,
      jenseBodys,
      jenseRokeshs,
      numberNeshimans,
      zemanats,
    };
  },
};
</script>

<style></style>
