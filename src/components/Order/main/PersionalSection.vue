<template>
  <div class="" v-if="group_item_name == 'کیف،کفش و لباس'">
    <kifvaKafsh />
  </div>
  <div class="" v-if="group_item_name == 'تزئینی'">
    <tazin />
  </div>
  <div class="" v-if="group_item_name == 'آرایشی، بهداشتی و درمانی'">
    <araieshi />
  </div>
  <div class="" v-if="group_item_name == 'وسایل بچه و اسباب بازی'">
    <child />
  </div>
  <div class="" v-if="group_item_name == 'لوازم التحریر'">
    <lavazem-tahrir />
  </div>
  <div class="mt-5">
    <span class="text-muted p-3"> شماره تلفن در آگهی نمایش داده نشود</span>
    <input
      type="checkbox"
      class="form-check-input"
      value="true"
      checked
      v-model="order_data.viewMobile"
    />
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
    <label for="moaveze" class="text-muted p-3">مایلم معاوضه کنم</label>
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
import { computed } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import KifvaKafsh from "./persionalItems/KifvaKafsh.vue";
import Tazin from "./persionalItems/Tazin.vue";
import Araieshi from "./persionalItems/Araieshi.vue";
import Child from "./persionalItems/Child.vue";
import LavazemTahrir from "./persionalItems/LavazemTahrir.vue";
import SpliteNumber from "../UI/SpliteNumber.vue";

export default {
  components: {
    KifvaKafsh,
    Tazin,
    Araieshi,
    Child,
    LavazemTahrir,
    SpliteNumber,
  },
  setup() {
    const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    const statuses = computed(() => order_data.subItem.status);

    return {
      group_item_name,
      order_data,
      statuses,
    };
  },
};
</script>

<style></style>
