<template>
  <div class="mt-5">
    <span class="fw-bold">شرح موقعیت شغلی</span>
  </div>

  <div class="mt-5">
    <span class="fw-bold">نوع همکاری</span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.typeHamkari"
    >
      <option value="" selected disabled>انتخاب</option>
      <option
        class="text-start"
        v-for="typeHamkari in typeHamkaris"
        :key="typeHamkari"
        :value="typeHamkari"
      >
        {{ typeHamkari }}
      </option>
    </select>
  </div>
  <div class="mt-5">
    <label for="moaveze" class="text-muted px-3">امکان دورکاری وجود دارد</label>
    <input
      id="moaveze"
      type="checkbox"
      class="form-check-input"
      value="true"
      v-model="order_data.dorkari"
    />
  </div>
  <div class="mt-5">
    <span class="fw-bold">شیوهٔ پرداخت</span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.typePardakht"
    >
      <option value="" selected disabled>انتخاب</option>
      <option
        class="text-start"
        v-for="typePardakht in typePardakhts"
        :key="typePardakht"
        :value="typePardakht"
      >
        {{ typePardakht }}
      </option>
    </select>
  </div>
  <div class="mt-5">
    <span class="fw-bold">ساعات کاری</span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.timekar"
    >
      <option value="" selected disabled>انتخاب</option>
      <option
        class="text-start"
        v-for="timekar in timekars"
        :key="timekar"
        :value="timekar"
      >
        {{ timekar }}
      </option>
    </select>
  </div>
  <div class="mt-5">
    <div class="fw-bold mb-3">بیمه</div>
    <label for="bimedarad" class="form-check-label mx-2">دارد</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="bimedarad"
      name="bime"
      value="true"
      @input="order_data.bime"
    />
    <label for="bimenadarad" class="form-check-label mx-2">ندارد</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="bimenadarad"
      name="bime"
      value="false"
      @input="order_data.bime"
    />
  </div>
  <hr />
  <div class="mt-5">
    <span class="fw-bold">شرایط و نیازمندی‌ها</span>
    <p class="text-muted">
      تکمیل این اطلاعات، کیفیت آگهی و شانس تعامل با کارجویانی متناسب با شرایط
      شما را افزایش می‌دهد.
    </p>
  </div>

  <div class="mt-5">
    <span class="fw-bold">سابقه</span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.sabeghe"
    >
      <option value="" selected disabled>انتخاب</option>
      <option
        class="text-start"
        v-for="sabeghe in sabeghes"
        :key="sabeghe"
        :value="sabeghe"
      >
        {{ sabeghe }}
      </option>
    </select>
  </div>

  <div class="mt-5">
    <span class="fw-bold">وضعیت سربازی</span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.sarbazi"
    >
      <option value="" selected disabled>انتخاب</option>
      <option
        class="text-start"
        v-for="sarbazi in sarbazis"
        :key="sarbazi"
        :value="sarbazi"
      >
        {{ sarbazi }}
      </option>
    </select>
  </div>
   <hr />
  <div class="mt-5">
    <span class="fw-bold">اطلاعات آگهی</span>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";

export default {
  components: {},
  setup() {
    const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    const typeHamkaris = computed(() => order_data.subItem.typeHamkari);
    const typePardakhts = computed(() => order_data.subItem.typePardakht);
    const timekars = computed(() => order_data.subItem.timekar);
    const sabeghes = computed(() => order_data.subItem.sabeghe);
    const sarbazis = computed(() => order_data.subItem.sarbazi);

    return {
      order_data,
      group_item_name,
      typeHamkaris,
      typePardakhts,
      timekars,
      sabeghes,
      sarbazis,
    };
  },
};
</script>

<style></style>
