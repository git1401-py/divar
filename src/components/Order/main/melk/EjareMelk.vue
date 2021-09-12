<template>
  <div class="mt-5">
    <span class="fw-bold">متراژ</span>
    <input
      type="text"
      class="input-group-text myinput"
      placeholder="مثلا 1000 متر"
      v-model="order_data.space"
    />
  </div>
  <div v-if="order_data.space">
      <splite-number :number="order_data.space" @getNember="getspace"/>
      {{strspace}} متر
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
  <div v-if="order_data.vadie_melk">
      <splite-number :number="order_data.karkard" @getNember="getvadie_melk"/>
      {{strvadie_melk}} تومان
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
  <div v-if="order_data.ejare_melk">
      <splite-number :number="order_data.karkard" @getNember="getejare_melk"/>
      {{strejare_melk}} تومان
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
      <option class="text-start" value="false">خانواده</option>
      <option class="text-start" value="true">خانواده و مجرد</option>
    </select>
  </div>
  <div class="mt-5">
    <span class="fw-bold">تعداد اتاق </span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.room_melk"
    >
      <option value="" selected disabled></option>
      <option class="text-start" value="0">بدون اتاق</option>
      <option class="text-start" value="1">یک</option>
      <option class="text-start" value="2">دو</option>
      <option class="text-start" value="3">سه</option>
      <option class="text-start" value="4">چهار</option>
      <option class="text-start" value="5">پنج یا بیشتر</option>
    </select>
  </div>
  <div class="mt-5">
    <span class="fw-bold">سال ساخت </span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.yearsofbuild"
    >
      <option value="" selected disabled></option>
      <option
        class="text-start"
        v-for="year in yearsofbuild"
        :key="year"
        :value="year"
      >
        {{ year }}
      </option>
    </select>
  </div>
  <div class="mt-5">
    <span class="fw-bold">پارکینگ </span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.parking_melk"
    >
      <option value="" selected disabled></option>
      <option class="text-start" value="true">دارد</option>
      <option class="text-start" value="false">ندارد</option>
    </select>
  </div>
  <div class="mt-5">
    <span class="fw-bold">انباری </span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.anbar_melk"
    >
      <option value="" selected disabled></option>
      <option class="text-start" value="true">دارد</option>
      <option class="text-start" value="false">ندارد</option>
    </select>
  </div>
  <div class="mt-5">
    <span class="fw-bold">بالکن </span>
    <select
      class="form-select form-select-sm text-secondary py-2 pe-4"
      aria-label=".form-select-sm example"
      v-model="order_data.balkon_melk"
    >
      <option value="" selected disabled></option>
      <option class="text-start" value="true">دارد</option>
      <option class="text-start" value="false">ندارد</option>
    </select>
  </div>
  <div class="" v-if="group_subitem_name == 'آپارتمان'">
    <div class="mt-5">
      <span class="fw-bold">طبقه </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.roof_melk"
      >
        <option value="" selected disabled></option>
        <option
          class="text-start"
          v-for="roof in roofs"
          :key="roof"
          :value="roof"
        >
          {{ roof }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <span class="fw-bold">آسانسور </span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.lift_melk"
      >
        <option value="" selected disabled></option>
        <option class="text-start" value="true">دارد</option>
        <option class="text-start" value="false">ندارد</option>
      </select>
    </div>

    <!-- ************** -->
    <!-- Button trigger modal -->
    <div class="mt-5">
      <button
        type="button"
        class="text-danger bg-transparent border-0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        انتخاب سایر ویژگی‌ها و امکانات
        <span v-if="index_element">({{ index_element }}مورد انتخاب شده )</span>
        <span v-else></span>
      </button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="
          modal-dialog
          modal-fullscreen-md-down
          modal-dialog-centered
          modal-dialog-scrollable
        "
      >
        <div class="modal-content">
          <div class="d-flex justify-content-between align-items-center p-4">
            <h5 class="modal-title" id="exampleModalLabel">
              انتخاب سایر ویژگی‌ها و امکانات
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <div class="modal-body p-2" style="width: 95%">
            <h5>سایر ویژگی‌ها</h5>
            <div class="mt-5">
              <span class="fw-bold">تعداد واحد در طبقه </span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.vahedinroof_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="vahedinroof in vahedinroofs"
                  :key="vahedinroof"
                  :value="vahedinroof"
                >
                  {{ vahedinroof }}
                </option>
              </select>
            </div>
            <div class="mt-5">
              <span class="fw-bold">تعداد کل طبقات ساختمان</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.allroof_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="allroof_melk in allroof_melks"
                  :key="allroof_melk"
                  :value="allroof_melk"
                >
                  {{ allroof_melk }}
                </option>
              </select>
            </div>
            <div class="mt-5">
              <span class="fw-bold">جهت ساختمان</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.jahatbuilding_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="jahatbuilding_melk in jahatbuilding_melks"
                  :key="jahatbuilding_melk"
                  :value="jahatbuilding_melk"
                >
                  {{ jahatbuilding_melk }}
                </option>
              </select>
            </div>
            <div class="mt-5 d-flex justify-content-between align-items-center">
              <label for="bazsazi" class="text-muted">بازسازی شده‌است</label>
              <input
                type="checkbox"
                id="bazsazi"
                class="form-check-input bg-danger"
                value="دارد"
                v-model="order_data.bazsazi_melk"
              />
            </div>
            <hr />
            <h5>سایر امکانات</h5>

            <div class="mt-5">
              <span class="fw-bold">جنس کف</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.jensekaf_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="jensekaf_melk in jensekaf_melks"
                  :key="jensekaf_melk"
                  :value="jensekaf_melk"
                >
                  {{ jensekaf_melk }}
                </option>
              </select>
            </div>
            <div class="mt-5">
              <span class="fw-bold">سرویس بهداشتی</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.sevicebehdashti_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="sevicebehdashti_melk in sevicebehdashti_melks"
                  :key="sevicebehdashti_melk"
                  :value="sevicebehdashti_melk"
                >
                  {{ sevicebehdashti_melk }}
                </option>
              </select>
            </div>
            <div class="mt-5">
              <span class="fw-bold">سرمایش</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.sarmaiesh_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="sarmaiesh_melk in sarmaiesh_melks"
                  :key="sarmaiesh_melk"
                  :value="sarmaiesh_melk"
                >
                  {{ sarmaiesh_melk }}
                </option>
              </select>
            </div>
            <div class="mt-5">
              <span class="fw-bold">گرمایش</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.garmaieshi_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="garmaieshi_melk in garmaieshi_melks"
                  :key="garmaieshi_melk"
                  :value="garmaieshi_melk"
                >
                  {{ garmaieshi_melk }}
                </option>
              </select>
            </div>
            <div class="my-5">
              <span class="fw-bold">تأمین‌کننده آب گرم</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.boilwater_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="boilwater_melk in boilwater_melks"
                  :key="boilwater_melk"
                  :value="boilwater_melk"
                >
                  {{ boilwater_melk }}
                </option>
              </select>
            </div>
          </div>
          <div class="modal-footer px-0 mx-0">
            <!-- <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> -->
            <button
              type="button"
              class="btn btn-danger w-100"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="calculateElement"
            >
              تایید
            </button>
          </div>
        </div>
      </div>
    </div>

    <hr />
  </div>
  <div class="" v-if="group_subitem_name == 'خانه و ویلا'">
       <!-- ************** -->
    <!-- Button trigger modal -->
    <div class="mt-5">
      <button
        type="button"
        class="text-danger bg-transparent border-0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        انتخاب سایر ویژگی‌ها و امکانات
        <span v-if="index_element">({{ index_element }}مورد انتخاب شده )</span>
        <span v-else></span>
      </button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="
          modal-dialog
          modal-fullscreen-md-down
          modal-dialog-centered
          modal-dialog-scrollable
        "
      >
        <div class="modal-content">
          <div class="d-flex justify-content-between align-items-center p-4">
            <h5 class="modal-title" id="exampleModalLabel">
              انتخاب سایر ویژگی‌ها و امکانات
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <div class="modal-body p-2" style="width: 95%">
            <h5>سایر ویژگی‌ها</h5>
            
           
            <div class="mt-5">
              <span class="fw-bold">جهت ساختمان</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.jahatbuilding_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="jahatbuilding_melk in jahatbuilding_melks"
                  :key="jahatbuilding_melk"
                  :value="jahatbuilding_melk"
                >
                  {{ jahatbuilding_melk }}
                </option>
              </select>
            </div>
            <div class="mt-5 d-flex justify-content-between align-items-center">
              <label for="bazsazi" class="text-muted">بازسازی شده‌است</label>
              <input
                type="checkbox"
                id="bazsazi"
                class="form-check-input bg-danger"
                value="دارد"
                v-model="order_data.bazsazi_melk"
              />
            </div>
            <hr />
            <h5>سایر امکانات</h5>

            <div class="mt-5">
              <span class="fw-bold">جنس کف</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.jensekaf_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="jensekaf_melk in jensekaf_melks"
                  :key="jensekaf_melk"
                  :value="jensekaf_melk"
                >
                  {{ jensekaf_melk }}
                </option>
              </select>
            </div>
            <div class="mt-5">
              <span class="fw-bold">سرویس بهداشتی</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.sevicebehdashti_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="sevicebehdashti_melk in sevicebehdashti_melks"
                  :key="sevicebehdashti_melk"
                  :value="sevicebehdashti_melk"
                >
                  {{ sevicebehdashti_melk }}
                </option>
              </select>
            </div>
            <div class="mt-5">
              <span class="fw-bold">سرمایش</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.sarmaiesh_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="sarmaiesh_melk in sarmaiesh_melks"
                  :key="sarmaiesh_melk"
                  :value="sarmaiesh_melk"
                >
                  {{ sarmaiesh_melk }}
                </option>
              </select>
            </div>
            <div class="mt-5">
              <span class="fw-bold">گرمایش</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.garmaieshi_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="garmaieshi_melk in garmaieshi_melks"
                  :key="garmaieshi_melk"
                  :value="garmaieshi_melk"
                >
                  {{ garmaieshi_melk }}
                </option>
              </select>
            </div>
            <div class="my-5">
              <span class="fw-bold">تأمین‌کننده آب گرم</span>
              <select
                class="form-select form-select-sm text-secondary py-2 pe-4"
                aria-label=".form-select-sm example"
                v-model="order_data.boilwater_melk"
              >
                <option value="" selected disabled>انتخاب</option>
                <option
                  class="text-start"
                  v-for="boilwater_melk in boilwater_melks"
                  :key="boilwater_melk"
                  :value="boilwater_melk"
                >
                  {{ boilwater_melk }}
                </option>
              </select>
            </div>
          </div>
          <div class="modal-footer px-0 mx-0">
            <!-- <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> -->
            <button
              type="button"
              class="btn btn-danger w-100"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="calculateElementVila"
            >
              تایید
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import SpliteNumber from "../../UI/SpliteNumber.vue"

export default {
  components: {SpliteNumber},
  setup() {
    const order_data = inject("order_data");
    const index_element = ref(0);
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const yearsofbuild = computed(() => order_data.subItem.yearsofbuild);
    const roofs = computed(() => order_data.subItem.roof);
    const allroof_melks = computed(() => order_data.subItem.roof);
    const vahedinroofs = computed(() => order_data.subItem.vahedinroof);
    const jahatbuilding_melks = computed(
      () => order_data.subItem.jahatbuilding
    );
    const jensekaf_melks = computed(() => order_data.subItem.jensekaf);
    const sevicebehdashti_melks = computed(
      () => order_data.subItem.sevicebehdashti
    );
    const sarmaiesh_melks = computed(() => order_data.subItem.sarmaiesh);
    const garmaieshi_melks = computed(() => order_data.subItem.garmaieshi);
    const boilwater_melks = computed(() => order_data.subItem.boilwater);

     const strspace = ref("");
    function getspace(num){
      strspace.value = num;
    }  
     const strvadie_melk = ref("");
    function getvadie_melk(num){
      strvadie_melk.value = num;
    }
     const strejare_melk = ref("");
    function getejare_melk(num){
      strejare_melk.value = num;
    }

    function calculateElement() {
      index_element.value = 0;
      if (order_data.vahedinroof_melk) index_element.value++;
      if (order_data.allroof_melk) index_element.value++;
      if (order_data.jahatbuilding_melk) index_element.value++;
      if (order_data.sevicebehdashti_melk) index_element.value++;
      if (order_data.jensekaf_melk) index_element.value++;
      if (order_data.bazsazi_melk) index_element.value++;
      if (order_data.sarmaiesh_melk) index_element.value++;
      if (order_data.garmaieshi_melk) index_element.value++;
      if (order_data.boilwater_melk) index_element.value++;
    }
    function calculateElementVila() {
      index_element.value = 0;
      if (order_data.jahatbuilding_melk) index_element.value++;
      if (order_data.sevicebehdashti_melk) index_element.value++;
      if (order_data.jensekaf_melk) index_element.value++;
      if (order_data.bazsazi_melk) index_element.value++;
      if (order_data.sarmaiesh_melk) index_element.value++;
      if (order_data.garmaieshi_melk) index_element.value++;
      if (order_data.boilwater_melk) index_element.value++;
    }
    return {
      strspace,strvadie_melk,strejare_melk,
      getspace,getvadie_melk,getejare_melk,
      group_subitem_name,
      order_data,
      yearsofbuild,
      roofs,
      allroof_melks,
      vahedinroofs,
      jahatbuilding_melks,
      jensekaf_melks,
      sevicebehdashti_melks,
      sarmaiesh_melks,
      garmaieshi_melks,
      boilwater_melks,
      index_element,
      calculateElement,
      calculateElementVila,
    };
  },
};
</script>

<style></style>
