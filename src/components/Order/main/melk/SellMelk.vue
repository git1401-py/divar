<template>
  <div class="" v-if="group_subitem_name == 'آپارتمان'">
    <div class="mt-5">
      <span class="fw-bold">متراژ</span>
      <input
        type="text"
        class="input-group-text myinput"
        placeholder="مثلا 1000 متر"
        v-model="order_data.space"
      />
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
      <input
        type="radio"
        class="form-check-input ms-5"
        id="alladviser"
        name="adviser"
        value="همه"
        @input="order_data.adviser"
      />
      <label for="alladviser" class="form-check-label mx-2">همه</label>
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
    <div class="mt-5">
      <span class="fw-bold">اجاره ماهانه</span>
      <input
        type="text"
        class="input-group-text myinput"
        placeholder="اجاره به تومان"
        v-model="order_data.ejare_melk"
      />
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
    <div class="mt-5">
      <span class="fw-bold">مناسب برای </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.just_single"
      >
        <option value="" selected disabled>انتخاب</option>
        <option class="text-start" value="false"> خانواده </option>
        <option class="text-start" value="true"> خانواده و مجرد</option>
      </select>
      
    </div>
    <!-- <div class="mt-5">
      <span class="fw-bold">تعداد اتاق </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.just_single"
      >
        <option value="" selected disabled>انتخاب</option>
        <option class="text-start" value="false"> خانواده </option>
        <option class="text-start" value="true"> خانواده و مجرد</option>
      </select>
      
    </div> -->
  </div>
  <div class="" v-if="group_subitem_name == 'خانه و ویلا'"></div>
  <div class="" v-if="group_subitem_name == 'زمین کلنگی'"></div>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";
// import CllapseBtntwo from "../../UI/CllapseBtntwo.vue";
// import CllapseBtnone from "../../UI/CllapseBtnone.vue";
// import Agahi from "../../UI/Agahi.vue";
// import Room from "../../UI/Room.vue";
// import MovingBtn from "../../UI/MovingBtn.vue";
export default {
  components: {
    // CllapseBtntwo,
    // CllapseBtnone,
    // Agahi,
    // MovingBtn,
    // Room,
  },
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);

    return {
      group_subitem_name,
      order_data,
    };
  },
};
</script>

<style></style>
