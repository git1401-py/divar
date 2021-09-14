<template>
  <div class="mt-5">
    <span class="fw-bold">سال ساخت </span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=""
      v-model="order_data.yearsofbuild_vehicle"
    >
      <option value="" selected disabled></option>
      <option
        class="text-start"
        v-for="year in yearsofbuild_vehicle"
        :key="year"
        :value="year"
      >
        {{ year }}
      </option>
    </select>
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

  <div class="" v-if="group_subitem_name == 'سواری'">
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
      <span class="fw-bold">برند</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.brande_savari"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="brande_savari in brande_savaris"
          :key="brande_savari"
          :value="brande_savari"
        >
          {{ brande_savari }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">رنگ</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.color_vehicle"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="color_vehicle in color_vehicles"
          :key="color_vehicle"
          :value="color_vehicle"
        >
          {{ color_vehicle }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">وضعیت موتور</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.motor_vehicle"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="motor_vehicle in motor_vehicles"
          :key="motor_vehicle"
          :value="motor_vehicle"
        >
          {{ motor_vehicle }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">وضعیت شاسی‌ها</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.shasi_vehicle"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="shasi_vehicle in shasi_vehicles"
          :key="shasi_vehicle"
          :value="shasi_vehicle"
        >
          {{ shasi_vehicle }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">وضعیت بدنه</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.body_vehicle"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="body_vehicle in body_vehicles"
          :key="body_vehicle"
          :value="body_vehicle"
        >
          {{ body_vehicle }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">مهلت بیمهٔ شخص ثالث</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.bime3_vehicle"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="bime3_vehicle in bime3_vehicles"
          :key="bime3_vehicle"
          :value="bime3_vehicle"
        >
          {{ bime3_vehicle }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">سند</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.sanad_vehicle"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="sanad_vehicle in sanad_vehicles"
          :key="sanad_vehicle"
          :value="sanad_vehicle"
        >
          {{ sanad_vehicle }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">گیربکس</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.girbox_vehicle"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="girbox_vehicle in girbox_vehicles"
          :key="girbox_vehicle"
          :value="girbox_vehicle"
        >
          {{ girbox_vehicle }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">نحوه فروش</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.sellType_vehicle"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="sellType_vehicle in sellType_vehicles"
          :key="sellType_vehicle"
          :value="sellType_vehicle"
        >
          {{ sellType_vehicle }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'کلاسیک'">
     <div class="mt-5">
    <div class="fw-bold mb-3">نوع آگهی</div>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="foshi"
      name="order_vehicle"
      value="فروشی"
      @input="order_data.type_order_vehicle"
    />
    <label for="foshi" class="form-check-label mx-2">فروشی</label>
    
    <input
      type="radio"
      class="form-check-input ms-5"
      id="darkhasti"
      name="order_vehicle"
      value="درخواستی"
      @input="order_data.type_order_vehicle"
    />
    <label for="darkhasti" class="form-check-label mx-2">درخواستی</label>
  </div>
  </div>
  <div class="" v-if="group_subitem_name == 'اجاره ای'">
    <div class="mt-5">
      <div class="fw-bold mb-3">نوع آگهی</div>

      <input
        type="radio"
        class="form-check-input ms-5"
        id="ejarei"
        name="order_vehicle"
        value="اجاره ای"
        @input="order_data.type_order_vehicle"
      />
      <label for="ejarei" class="form-check-label mx-2">اجاره ای</label>
      <input
        type="radio"
        class="form-check-input ms-5"
        id="darkhasti"
        name="order_vehicle"
        value="درخواستی"
        @input="order_data.type_order_vehicle"
      />
      <label for="darkhasti" class="form-check-label mx-2">درخواستی</label>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'سنگین'">
     <div class="mt-5">
    <div class="fw-bold mb-3">نوع آگهی</div>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="foshi"
      name="order_vehicle"
      value="فروشی"
      @input="order_data.type_order_vehicle"
    />
    <label for="foshi" class="form-check-label mx-2">فروشی</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="ejarei"
      name="order_vehicle"
      value="اجاره ای"
      @input="order_data.type_order_vehicle"
    />
    <label for="ejarei" class="form-check-label mx-2">اجاره ای</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="darkhasti"
      name="order_vehicle"
      value="درخواستی"
      @input="order_data.type_order_vehicle"
    />
    <label for="darkhasti" class="form-check-label mx-2">درخواستی</label>
  </div>
  </div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import SpliteNumber from "../../UI/SpliteNumber.vue";
export default {
  components: {
    SpliteNumber,
  },
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const yearsofbuild_vehicle = computed(
      () => order_data.subItem.yearsofbuild_vehicle
    );
    const brande_savaris = computed(() => order_data.subItem.brande_savari);
    const color_vehicles = computed(() => order_data.subItem.color_vehicle);
    const motor_vehicles = computed(() => order_data.subItem.motor_vehicle);
    const shasi_vehicles = computed(() => order_data.subItem.shasi_vehicle);
    const body_vehicles = computed(() => order_data.subItem.body_vehicle);
    const bime3_vehicles = computed(() => order_data.subItem.bime3_vehicle);
    const sanad_vehicles = computed(() => order_data.subItem.sanad_vehicle);
    const girbox_vehicles = computed(() => order_data.subItem.girbox_vehicle);
    const sellType_vehicles = computed(
      () => order_data.subItem.sellType_vehicle
    );

    const strkarkard = ref("");
    function getkarkard(num) {
      strkarkard.value = num;
    }
    const strprice = ref("");
    function getPrice(num) {
      strprice.value = num;
    }

    return {
      group_subitem_name,
      order_data,
      yearsofbuild_vehicle,
      brande_savaris,
      color_vehicles,
      motor_vehicles,
      shasi_vehicles,
      body_vehicles,
      bime3_vehicles,
      sanad_vehicles,
      girbox_vehicles,
      sellType_vehicles,
      strkarkard,
      getkarkard,
      strprice,
      getPrice,
    };
  },
};
</script>

<style></style>
