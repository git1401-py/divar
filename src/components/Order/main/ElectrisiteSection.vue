<template>
  <div class="" v-if="group_item_name == 'موبایل و تبلت'">
    <mobileva-tablet />
  </div>
  <div class="" v-if="group_item_name == 'رایانه'">
    <raiane />
  </div>
  <div class="" v-if="group_item_name == 'کنسول، بازی ویدئویی و آنلاین'">
    <CosoleBazi />
  </div>
  <div class="" v-if="group_item_name == 'صوتی و تصویری'">
    <soti />
  </div>
  <div class="" v-if="group_item_name == 'تلفن رومیزی'">
    <tell />
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
import { computed, ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import MobilevaTablet from "./electrisite/MobilevaTablet.vue";
import Raiane from "./electrisite/Raiane.vue";
import CosoleBazi from "./electrisite/CosoleBazi.vue";
import Soti from "./electrisite/Soti.vue";
import Tell from "./electrisite/Tell.vue";
import SpliteNumber from "../UI/SpliteNumber.vue";

export default {
  components: {
    MobilevaTablet,
    Raiane,
    CosoleBazi,
    Soti,
    Tell,
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
