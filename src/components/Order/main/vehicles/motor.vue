<template>
  <div class="mt-5">
    <div class="fw-bold mb-3">نوع آگهی</div>
    <label for="foshi" class="form-check-label mx-2">فروشی</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="foshi"
      name="order_vehicle"
      value="فروشی"
      @input="order_data.type_order_vehicle"
    />
    <label for="ejarei" class="form-check-label mx-2">اجاره ای</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="ejarei"
      name="order_vehicle"
      value="اجاره ای"
      @input="order_data.type_order_vehicle"
    />
    <label for="darkhasti" class="form-check-label mx-2">درخواستی</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="darkhasti"
      name="order_vehicle"
      value="درخواستی"
      @input="order_data.type_order_vehicle"
    />
  </div>
  <div class="mt-5">
    <span class="fw-bold">کارکرد</span>
    <input
      type="number"
      class="input-group-text myinput"
      placeholder="مثلا 1000"
      v-model="order_data.karkard"
    />
    <div v-if="order_data.karkard">
      <splite-number :number="order_data.karkard" @getNember="getkarkard" />
      {{ strkarkard }} کیلومتر
    </div>
  </div>
  <div class="mt-5">
    <span class="fw-bold">قیمت</span>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="قیمت به تومان"
      v-model="order_data.price"
    />
  </div>
  <div v-if="order_data.price">
    <splite-number :number="order_data.price" @getNember="getPrice" />
    {{ strprice }} تومان
  </div>
  <div class="mt-5">
    <label for="moaveze" class="text-muted p-3">مایلم معاوضه کنم</label>
    <input
      id="moaveze"
      type="checkbox"
      class="form-check-input"
      value="true"
      checked
      v-model="order_data.moaveze"
    />
  </div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import SpliteNumber from "../../UI/SpliteNumber.vue";

export default {
  SpliteNumber,
  components: {},
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);

    const strprice = ref("");
    function getPrice(num) {
      strprice.value = num;
    }

     const strkarkard = ref("");
    function getkarkard(num) {
      strkarkard.value = num;
    }

    return {
      group_subitem_name,

      strprice,
      getPrice,
      strkarkard,
      getkarkard
    };
  },
};
</script>

<style></style>
