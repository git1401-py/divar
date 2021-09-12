<template>
  <div class="" v-if="group_item_name == 'فروش مسکونی'">
    <sell-melk />
  </div>
  <div class="" v-if="group_item_name == 'اجاره مسکونی'">
    <ejare-melk />
  </div>
  <div class="" v-if="group_item_name == 'فروش اداری و تجاری'">
    <sell-tejari />
  </div>
  <div class="" v-if="group_item_name == 'اجاره اداری و تجاری'">
    <ejare-tejari />
  </div>
  <div class="" v-if="group_item_name == 'اجاره کوتاه مدت'">
    <ejare-small />
  </div>
  <div class="" v-if="group_item_name == 'پروژه های ساخت و ساز'">
    <building-pro />
  </div>
  <div class="mt-5">
    <span class="fw-bold">عنوان آگهی</span>
    <p class="text-muted py-1">
      در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.
    </p>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="مثال: آپارتمان، 0 متر، ولیعصر"
      v-model="order_data.title"
    />
  </div>
  <div class="mt-5">
    <span class="fw-bold">توضیحات آگهی</span>
    <p class="text-muted py-1">
      در توضیحات آگهی به مواردی مانند شرایط اجاره، جزئیات و ویژگی‌های قابل توجه،
      دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید.
    </p>
    <textarea
      type="text"
      class="input-group-text myinput"
      placeholder="توضیحات را بنویسید"
      v-model="order_data.explation"
    ></textarea>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import SellMelk from "./melk/SellMelk.vue";
import EjareMelk from "./melk/EjareMelk.vue";
import SellTejari from "./melk/SellTejari.vue";
import EjareTejari from "./melk/EjareTejari.vue";
import EjareSmall from "./melk/EjareSmall.vue";
import BuildingPro from "./melk/BuildingPro.vue";
export default {
  components: {
    SellMelk,
    EjareMelk,
    SellTejari,
    EjareTejari,
    EjareSmall,
    BuildingPro,
  },
  setup() {
    const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    return {
      group_item_name,
    };
  },
};
</script>

<style></style>
