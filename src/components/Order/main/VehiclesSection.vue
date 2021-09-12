<template>
  <div class="" v-if="group_item_name == 'قایق و لوازم جانبی'">
    <ghaiegh />
  </div>
  <div class="" v-if="group_item_name == 'قطعات یدکی و لوازم جانبی خودرو'">
    <ghataateyadaki />
  </div>
  <div class="" v-if="group_item_name == 'خودرو'">
    <khodro />
  </div>
  <div class="" v-if="group_item_name == 'موتور سیکلت و لوازم جانبی'">
    <motor />
  </div>
  <div class="mt-5">
    <span class="fw-bold">عنوان آگهی</span>
    <p class="text-muted py-1">
      در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.
    </p>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="مثال: خودرو مزدا 3 مدل 89"
      v-model="order_data.title"
    />
  </div>
  <div class="mt-5">
    <span class="fw-bold">توضیحات آگهی</span>
    <p class="text-muted py-1">
      جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل
      در متن آگهی مجاز نیست .
    </p>
    <textarea
      type="text"
      class="input-group-text myinput"
      placeholder=""
      v-model="order_data.explation"
    ></textarea>
  </div>
</template>

<script>
import ghaiegh from "./vehicles/ghaiegh.vue";
import ghataateyadaki from "./vehicles/ghataateyadaki.vue";
import khodro from "./vehicles/khodro.vue";
import motor from "./vehicles/motor.vue";
import { computed, inject } from "@vue/runtime-core";
export default {
  components: {
    ghaiegh,
    ghataateyadaki,
    khodro,
    motor,
  },
  setup() {
    const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    const khodroMarks = computed(() => order_data.subItem.price);

    return {
      khodroMarks,
order_data,
      group_item_name,
    };
  },
};
</script>

<style></style>
