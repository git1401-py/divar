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
    <input
      type="radio"
      class="form-check-input ms-5"
      id="shakhsi"
      name="adviser"
      value="شخصی"
      @input="order_data.adviser"
    />
    <label for="shakhsi" class="form-check-label mx-2">شخصی</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="moshaver"
      name="adviser"
      value="مشاور املاک"
      @input="order_data.adviser"
    />
    <label for="moshaver" class="form-check-label mx-2">مشاور املاک</label>
  </div>

  <div class="mt-5">
    <span class="fw-bold">اجاره روزانه </span>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="اجاره روزانه به تومان"
      v-model="order_data.price"
    />
  </div>
  <div v-if="order_data.price">
      <splite-number :number="order_data.price" @getNember="getPrice"/>
      {{strprice}} تومان
    </div>

  <div class="" v-if="group_subitem_name == 'آپارتمان و سوئیت'">
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
  </div>
  <div class="" v-if="group_subitem_name == 'ویلا و باغ'">
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
  </div>
  <div class="" v-if="group_subitem_name == 'دفتر کار و فضای آموزشی'">
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
    const strprice = ref("");
    
    function getPrice(num){
      strprice.value = num;
    }
 const strspace = ref("");
    function getspace(num){
      strspace.value = num;
    }  
    return {
      group_subitem_name,
      order_data,
      strprice,getPrice,
      strspace,getspace
    };
  },
};
</script>

<style></style>
