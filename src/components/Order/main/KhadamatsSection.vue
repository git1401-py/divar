<template>
  <div class="mt-5">
    <span class="fw-bold">لینک وب‌سایت</span>
    <p class="texxt-muted">
      لینک وب‌سایت شما، در وب‌سایت دیوار و در نسخهٔ ۱۰ اندروید قابل مشاهده و
      کلیک است. هزینهٔ فعال‌سازی درج لینک در آگهی ۲۰,۰۰۰ تومان است.
    </p>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="http://www.example.com"
      v-model="order_data.khadamat_link"
    />
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
    return {
      group_item_name,
      order_data,
    };
  },
};
</script>

<style></style>
