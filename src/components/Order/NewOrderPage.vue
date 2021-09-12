<template>
  <div class="p-3">
    <h4>ثبت آگهی</h4>
    <div class="m-3 subitem d-flex justify-content-between align-items-center">
      <span>{{ order_data.group_subitem_name }}</span>
      <span class="itembtn" @click="Resetgroup_subitem_name"
        >تغییر دسته بندی</span
      >
    </div>
    <div class="mt-4">

      <span class="fw-bolder">شهر</span>
      <cllapse-btnone
        :data_items="city_items"
        :marks="cityMarks"
        @dataFn="cityFn"
        id="city"
        exm="انتخاب"
      />
    </div>
    <div class="mt-4">

      <span class="fw-bolder">عکس آگهی</span>
      <p class="text-muted py-1">
        عکس‌هایی از فضای داخل و بیرون ملک اضافه کنید. آگهی‌های دارای عکس تا «۳
        برابر» بیشتر توسط کاربران دیده می‌شوند.
      </p>
      <input
        id="input-b3"
        name="input-b3[]"
        type="file"
        class="file"
        multiple
        data-show-upload="false"
        data-show-caption="true"
        data-msg-placeholder="Select {files} for upload..."
      />
    </div>
    <!-- {{order_data.subItem}} -->
    <div v-if="order_data.group_name == 'املاک'" ><melk-section /></div>
    <div v-if="order_data.group_name == 'وسایل نقلیه'" ><vehicles-section /></div>
    <div v-if="order_data.group_name == 'لوازم الکتریکی'" ><electrisite-section /></div>
    <div v-if="order_data.group_name == 'مربوط به خانه'" ><house-section /></div>
    <div v-if="order_data.group_name == 'خدمات'"><khadamats-section  /></div>
    <div v-if="order_data.group_name == 'وسایل شخصی'" ><persional-section /></div>
    <div v-if="order_data.group_name == 'سرگرمی و فراعت'" ><sargarmi-section /></div>
    <div v-if="order_data.group_name == 'اجتماعی'"><social-section /></div>
    <div v-if="order_data.group_name == 'برای کسب و کار'"><kasbvakar-section /></div>
    <div v-if="order_data.group_name == 'استخدام و کاریابی'"><estekhdam-section /></div>
    <div class="mt-5">

      <span class="fw-bold">شمارهٔ موبایل</span>
      <p class="text-muted py-1">
        کد تأیید به شمارهٔ موبایل شما ارسال خواهد شد. تماس و چت نیز با این
        شماره انجام می‌شود. <br />توجه: لطفاً پس از ثبت آگهی، به پیامک‌های
        پرداخت وجه بی‌اعتنا باشید.
      </p>
      <input
        type="text"
        class="input-group-text myinput"
        placeholder="مثلا 09112223344"
         v-model="order_data.mobile"
      />
    </div>
    <div class="mt-5">

      <span class="text-muted p-3">چت دیوار فعال شود </span>
      <input type="checkbox" class="form-check-input" value="chat" checked v-model="order_data.chat">
      
    </div>
    
    <div class="mt-5">
        <button class="btn btn-outline-light py-3 ms-3" style="width:45%;border:1px solid #000;color:#000;">انصراف</button>
        <button class="btn btn-danger py-3" style="width:45%">ارسال آگهی</button>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "@vue/runtime-core";
import CllapseBtnone from "../home/header/sideheader/UI/CllapseBtnone.vue";
import MelkSection from "./main/MelkSection.vue";
import ElectrisiteSection from "./main/ElectrisiteSection.vue";
import EstekhdamSection from "./main/EstekhdamSection.vue";
import HouseSection from "./main/HouseSection.vue";
import KasbvakarSection from "./main/KasbvakarSection.vue";
import KhadamatsSection from "./main/KhadamatsSection.vue";
import PersionalSection from "./main/PersionalSection.vue";
import SargarmiSection from "./main/SargarmiSection.vue";
import SocialSection from "./main/SocialSection.vue";
import VehiclesSection from "./main/VehiclesSection.vue";
export default {
  components: {
    CllapseBtnone,
    MelkSection,
    ElectrisiteSection,
    EstekhdamSection,
    HouseSection,
    KasbvakarSection,
    KhadamatsSection,
    PersionalSection,
    SargarmiSection,
    SocialSection,
    VehiclesSection,},
  setup(props, { emit }) {
    const order_data = inject("order_data");

    // const cityMarks = computed(() => order_data.subItem.city);
    const cityMarks = [
      "ارومیه",
      "اردبیل",
      "اصفهان",
      "کرج",
      "ایلام",
      "بندر بوشهر",
      "تهران",
      "شهرکرد",
      "بیرجند",
      "بجنورد",
      "اهواز",
      "زنجان",
      "سمنان",
      "زاهدان",
      "شیراز",
      "قزوین",
      "قم",
      "سنندج",
      "کرمان",
      "کرمانشاه",
      "یاسوج",
      "گرگان",
      "رشت",
      "خرم‌آباد",
      "ساری",
      "اراک",
      "بندرعباس",
      "همدان",
      "یزد",
    ];
    const city_items = ref("انتخاب شهر");

    function Resetgroup_subitem_name() {
      emit("Resetgroup_subitem_name");
    }

    function cityFn(sarbazi) {
      order_data.sarbazi = sarbazi;
    }
    return {
      Resetgroup_subitem_name,
      order_data,

      cityMarks,
      city_items,
      cityFn,
    };
  },
};
</script>

<style>
.subitem {
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
}
.itembtn {
  color: tomato;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.itembtn:hover {
  background: rgb(241, 226, 229);
}
.myinput{
    text-align: right !important;
    width:100%;
    background:#fff !important;
}
</style>
