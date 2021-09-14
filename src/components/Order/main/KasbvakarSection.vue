<template>
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
    <label for="moaveze" class="text-muted px-3">مایلم معاوضه کنم</label>
    <input
      id="moaveze"
      type="checkbox"
      class="form-check-input"
      value="true"
      v-model="order_data.moaveze"
    />
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';
import SpliteNumber from "../UI/SpliteNumber"

export default {
  components: {
  SpliteNumber
  },
  setup() {
    const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    const strprice = ref("");
    function getPrice(num) {
      strprice.value = num;
    }
    return {
      order_data,
      group_item_name,
      strprice,
      getPrice,
    };
  },
};
</script>

<style></style>
