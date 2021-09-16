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
        :v_model_data="order_data.city"
      />
    </div>
    <div class="mt-4">
      <span class="fw-bolder">عکس آگهی</span>
      <p class="text-muted py-1">
        عکس‌هایی از فضای داخل و بیرون ملک اضافه کنید. آگهی‌های دارای عکس تا «۳
        برابر» بیشتر توسط کاربران دیده می‌شوند.
      </p>
      <div class="custom-file pmd-custom-file">
        <br />
        <div class="d-flex flex-grow-0 flex-wrap align-items-center">
          <input
            @change="imgUploadFn"
            type="file"
            class="custom-file-input bg-danger"
            id="customFile"
            multiple
          />
          <div class="uploading-image">
            <label
              @mouseenter="grayScale = true"
              @mouseleave="grayScale = false"
              class="custom-file-label w-100 h-100"
              :class="{ 'label-grayscale': grayScale }"
              for="customFile"
            ></label>
          </div>

          <div v-for="(img , index ) in previewImage" :key="img" class="position-relative" >
            <img :src="img" class="uploading-image position-relative"/>
            <div class="small close-img" @click="deleteImg(index)">
              <font-awesome-icon :icon="['fa', 'trash']" style="color: #fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {{order_data.subItem}} -->
    <div v-if="order_data.group_name == 'املاک'"><melk-section /></div>
    <div v-if="order_data.group_name == 'وسایل نقلیه'">
      <vehicles-section />
    </div>
    <div v-if="order_data.group_name == 'لوازم الکتریکی'">
      <electrisite-section />
    </div>
    <div v-if="order_data.group_name == 'مربوط به خانه'"><house-section /></div>
    <div v-if="order_data.group_name == 'خدمات'"><khadamats-section /></div>
    <div v-if="order_data.group_name == 'وسایل شخصی'">
      <persional-section />
    </div>
    <div v-if="order_data.group_name == 'سرگرمی و فراعت'">
      <sargarmi-section />
    </div>
    <div v-if="order_data.group_name == 'اجتماعی'"><social-section /></div>
    <div v-if="order_data.group_name == 'برای کسب و کار'">
      <kasbvakar-section />
    </div>
    <div v-if="order_data.group_name == 'استخدام و کاریابی'">
      <estekhdam-section />
    </div>
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
      <label for="viewMobile" class="text-muted p-3">
        شماره تلفن در آگهی نمایش داده نشود</label
      >
      <input
        id="viewMobile"
        type="checkbox"
        class="form-check-input"
        value="true"
        v-model="order_data.viewMobile"
      />
    </div>
    <div class="mt-5">
      <label for="chat" class="text-muted px-3">چت دیوار فعال شود </label>
      <input
        id="chat"
        type="checkbox"
        class="form-check-input"
        value="true"
        v-model="order_data.chat"
      />
    </div>

    <div class="mt-5">
      <span class="fw-bold">عنوان آگهی</span>
      <p class="text-muted py-1">
        {{ aboutTitle.title }}
      </p>
      <input
        type="text"
        class="input-group-text myinput"
        :placeholder="aboutTitle.title_ex"
        v-model="order_data.title"
      />
    </div>
    <div class="mt-5">
      <span class="fw-bold">توضیحات آگهی</span>
      <p class="text-muted py-1">
        {{ aboutTitle.explation }}
      </p>
      <textarea
        type="text"
        class="input-group-text myinput"
        :placeholder="aboutTitle.explation_ex"
        v-model="order_data.explation"
      ></textarea>
    </div>
    <div class="mt-5">
      <label
        class="btn btn-outline-light py-3 ms-3"
        style="width: 45%; border: 1px solid #000; color: #000; cursor: pointer"
        @click="clearForm"
      >
        انصراف
      </label>
      <button class="btn btn-danger py-3" style="width: 45%">ارسال آگهی</button>
    </div>
  </div>
</template>

<script>
import { inject, reactive, ref } from "@vue/runtime-core";
import CllapseBtnone from "./UI/CllapseBtnone.vue";
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

import useClear from "./main/useClear.js";
import { useStore } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
    VehiclesSection,
    FontAwesomeIcon,
  },
  setup(props, { emit }) {
    const store = useStore();
    const order_data = inject("order_data");
    const aboutTitle = inject("aboutTitle");
    const grayScale = ref(false);
    order_data.subItem.value = {};
    const previewImage = reactive([]);
    const imgFiles = reactive([]);
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
      order_data.city = sarbazi;
    }
    async function user_orders() {
      console.log("First");
      await store.dispatch("user_orders/saveUser_orders", order_data);
    }

    function imgUploadFn(event) {
      // console.log('27/12/97' | moment("DD, mm, YYYY"));
      event.target.files.forEach((element) => {
        const exit = ref(false);
        imgFiles.forEach((el) => {
          if (el.name == element.name) {
            exit.value = true;
            return;
          }
        });
        if (exit.value == false) {
          imgFiles.unshift(element);
          //  console.log(imgFiles);

          const image = element;
          const reader2 = new FileReader();
          reader2.readAsDataURL(image);
          reader2.onload = (e) => {
            previewImage.push(e.target.result);
            console.log(previewImage);
          };
        }
      });

      order_data.img_urls = [];
      imgFiles.forEach((element) => {
        const url = ref("");
        url.value = "./userImages/" + Date.now() + "" + element.name;
        element = { size: element.size, url: url.value, name: element.name };
        order_data.img_urls.push(element.url);
      });
      console.log("****************************************");
    }
    function clearForm() {
      order_data.img_urls.forEach((el) => {
        order_data.img_urls.pop(el);
        imgFiles.forEach((el) => {
          imgFiles.pop(el);
        });
        previewImage.forEach((el) => {
          previewImage.pop(el);
        });
      });
      imgFiles.forEach((el) => {
        imgFiles.pop(el);
      });
      previewImage.forEach((el) => {
        previewImage.pop(el);
      });
      useClear(order_data);
    }
    function deleteImg(index){
      order_data.img_urls.splice(index,index);
      previewImage.splice(index,index);
      imgFiles.splice(index,index);

    }
    return {
      Resetgroup_subitem_name,
      order_data,
      aboutTitle,

      cityMarks,
      city_items,
      cityFn,
      user_orders,
      imgUploadFn,
      clearForm,
      previewImage,
      grayScale,
      deleteImg,
    };
  },
};
</script>

<style scoped>
.uploading-image {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin: 10px;
}
.custom-file-input {
  width: 0px;
  height: 0px;
  /*position:relative;
  bottom:0;
  display: flex;
  align-items: flex-end;
  border-radius: 5px;
  margin: 0 10px;
  padding: 0 auto; */
  visibility: hidden;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-label {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  filter: grayscale(100);
  border-radius: 5px;
  margin: 0px 0px 10px 10px;
  cursor: pointer;
  background: url("../../../public/img/imgUpload.png") no-repeat center center;
}
.label-grayscale {
  filter: grayscale(0) !important;
}
.close-img{
  position:absolute;
  color:red;
  text-align: center;
  padding: 0 4px;
  left: 12px; 
  top: 12px;
  cursor: pointer;
  background:rgba(0,0,0,.6);
}

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
.myinput {
  text-align: right !important;
  width: 100%;
  background: #fff !important;
}
</style>
