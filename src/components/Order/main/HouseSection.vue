<template>
  <div class="" v-if="group_item_name == 'وسایل و تزئینات خانه'">
    <tazin />
  </div>
  <div class="" v-if="group_item_name == 'وسایل آشپزخانه'">
    <fornither />
  </div>
  <div class="" v-if="group_item_name == 'ابزار'">
    <devices />
  </div>
  <div class="" v-if="group_item_name == 'ساختمان و حیاط'">
    <building />
  </div>
   <div class="mt-5">
    <span class="fw-bold">وضعیت</span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.status"
    >
      <option value="" selected disabled></option>
      <option
        class="text-start"
        v-for="status in statuses"
        :key="status"
        :value="status"
      >
        {{ status }}
      </option>
    </select>
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
import Tazin from "./house/Tazin.vue";
import Fornither from "./house/Fornither.vue";
import Devices from "./house/Devices.vue";
import Building from "./house/Building.vue";
import SpliteNumber from "../UI/SpliteNumber"
export default {
  components: {
    Tazin,
    Fornither,
    Devices,
    Building,
    SpliteNumber,
  },
  setup() {
    const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    const statuses = computed(() => order_data.subItem.status);
    const strprice = ref("");
    function getPrice(num) {
      strprice.value = num;
    }
    return {
      order_data,
      group_item_name,
      statuses,
      strprice,
      getPrice,
    };
  },
};
</script>

<style></style>
