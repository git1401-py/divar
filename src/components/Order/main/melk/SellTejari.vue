<template>
  <div class="mt-5">
    <span class="fw-bold">متراژ</span>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="مثلا 1000 متر"
      v-model="order_data.space"
    />
  </div>
  <div v-if="order_data.space">
      <splite-number :number="order_data.space" @getNember="getspace"/>
      {{strspace}} متر
    </div>
  <div class="mt-5">
    <span class="fw-bold">قیمت کل</span>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="قیمت به تومان"
      v-model="order_data.price"
    />
  </div>
  <div v-if="order_data.price">
      <splite-number :number="order_data.price" @getNember="getPrice"/>
      {{strprice}} تومان
    </div>
  <div class="mt-5">
    <div class="fw-bold mb-3">آگهی‌دهنده</div>
    <label for="shakhsi" class="form-check-label mx-2">شخصی</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="shakhsi"
      name="adviser"
      value="شخصی"
      @input="order_data.adviser"
    />
    <label for="moshaver" class="form-check-label mx-2">مشاور املاک</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="moshaver"
      name="adviser"
      value="مشاور املاک"
      @input="order_data.adviser"
    />
    </div>
  <div class="mt-5">
    <span class="fw-bold">سند اداری </span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.sanad_edari"
    >
      <option value="" selected disabled></option>
      <option class="text-start" value="true">دارد</option>
      <option class="text-start" value="false">ندارد</option>
    </select>
  </div>

  <div class="" v-if="group_subitem_name == 'دفتر کار،اتاق اداری و مطب'">
    <div class="mt-5">
      <span class="fw-bold">تعداد اتاق </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.room_melk"
      >
        <option value="" selected disabled></option>
        <option class="text-start" value="0">بدون اتاق</option>
        <option class="text-start" value="1">یک</option>
        <option class="text-start" value="2">دو</option>
        <option class="text-start" value="3">سه</option>
        <option class="text-start" value="4">چهار</option>
        <option class="text-start" value="5">پنج یا بیشتر</option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">سال ساخت </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.yearsofbuild"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="year in yearsofbuild"
          :key="year"
          :value="year"
        >
          {{ year }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">طبقه </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.roof_melk"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="roof in roofs"
          :key="roof"
          :value="roof"
        >
          {{ roof }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">آسانسور </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.lift_melk"
      >
        <option value="" selected disabled></option>
        <option class="text-start" value="true">دارد</option>
        <option class="text-start" value="false">ندارد</option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">پارکینگ </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.parking_melk"
      >
        <option value="" selected disabled></option>
        <option class="text-start" value="true">دارد</option>
        <option class="text-start" value="false">ندارد</option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">انباری </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.anbar_melk"
      >
        <option value="" selected disabled></option>
        <option class="text-start" value="true">دارد</option>
        <option class="text-start" value="false">ندارد</option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'مغازه و غرفه'">
    <div class="mt-5">
      <span class="fw-bold">تعداد اتاق </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.room_melk"
      >
        <option value="" selected disabled></option>
        <option class="text-start" value="0">بدون اتاق</option>
        <option class="text-start" value="1">یک</option>
        <option class="text-start" value="2">دو</option>
        <option class="text-start" value="3">سه</option>
        <option class="text-start" value="4">چهار</option>
        <option class="text-start" value="5">پنج یا بیشتر</option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">سال ساخت </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.yearsofbuild"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="year in yearsofbuild"
          :key="year"
          :value="year"
        >
          {{ year }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'صنعتی، کشاورزی و تجاری'">
    <div class="mt-5">
      <span class="fw-bold">تعداد اتاق </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.room_melk"
      >
        <option value="" selected disabled></option>
        <option class="text-start" value="0">بدون اتاق</option>
        <option class="text-start" value="1">یک</option>
        <option class="text-start" value="2">دو</option>
        <option class="text-start" value="3">سه</option>
        <option class="text-start" value="4">چهار</option>
        <option class="text-start" value="5">پنج یا بیشتر</option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">سال ساخت </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.yearsofbuild"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="year in yearsofbuild"
          :key="year"
          :value="year"
        >
          {{ year }}
        </option>
      </select>
    </div>
  </div>
  <div class="mt-5">
    <span class="fw-bold">کد ملی (اختیاری)</span>
    <p class="text-muted py-1">
      در صورت مطابقت شماره‌ٔ موبایل با کد ملی، آگهی شما با نشان احراز هویت منتشر
      خواهد شد.
    </p>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="1234567890"
      v-model="order_data.codemeli"
    />
  </div>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";
import SpliteNumber from "../../UI/SpliteNumber.vue"

export default {
  components: {SpliteNumber},
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const yearsofbuild = computed(() => order_data.subItem.yearsofbuild);
    const roofs = computed(() => order_data.subItem.roof);

    return {
      group_subitem_name,
      yearsofbuild,
      roofs,
      order_data,
    };
  },
};
</script>
<style></style>
