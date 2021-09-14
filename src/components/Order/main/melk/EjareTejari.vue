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
    <span class="fw-bold">ودیعه</span>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="ودیعه به تومان"
      v-model="order_data.vadie_melk"
    />
  </div>
  <div v-if="order_data.vadie_melk">
      <splite-number :number="order_data.karkard" @getNember="getvadie_melk"/>
      {{strvadie_melk}} تومان
    </div>
  <div class="mt-5">
    <span class="fw-bold">اجاره ماهانه</span>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="اجاره به تومان"
      v-model="order_data.ejare_melk"
    />
  </div>
  <div v-if="order_data.ejare_melk">
      <splite-number :number="order_data.karkard" @getNember="getejare_melk"/>
      {{strejare_melk}} تومان
    </div>
  <div class="mt-5">
    <span class="fw-bold">ودیعه و اجاره </span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.vadie_ejare_melk"
    >
      <option value="" selected disabled>انتخاب</option>
      <option class="text-start" value="قابل تبدیل">قابل تبدیل</option>
      <option class="text-start" value="غیر قاب تبدیل">غیر قاب تبدیل</option>
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
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import SpliteNumber from "../../UI/SpliteNumber.vue"

export default {
  components: {SpliteNumber},
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const yearsofbuild = computed(() => order_data.subItem.yearsofbuild);
    const roofs = computed(() => order_data.subItem.roof);
  const strspace = ref("");
    function getspace(num){
      strspace.value = num;
    }  
     const strvadie_melk = ref("");
    function getvadie_melk(num){
      strvadie_melk.value = num;
    }
     const strejare_melk = ref("");
    function getejare_melk(num){
      strejare_melk.value = num;
    }
    return {
      strspace,strvadie_melk,strejare_melk,
      getspace,getvadie_melk,getejare_melk,
      group_subitem_name,
      order_data,
      yearsofbuild,
      roofs,
    };
  },
};
</script>

<style></style>
