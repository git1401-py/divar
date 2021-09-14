<template>
  <div class="" v-if="group_subitem_name == 'موبایل'">
    <div class="mt-5">
      <span class="fw-bold">اطلاعات الزامی</span>
    </div>
    <div class="mt-5">
      <span class="fw-bold">برند و مدل</span>
      <!-- ************** -->
      <!-- Button trigger modal -->
      <div class="mt-5">
        <button
          type="button"
          class="
            py-2
            px-3
            myinput
            d-flex
            justify-content-between
            align-items-center
          "
          style="border: 1px solid lightgray !important; border-radius: 5px"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span>{{ order_data.mobiles }}</span>
          <font-awesome-icon
            :icon="['fa', 'chevron-left']"
            style="color: lightgray"
          />
          <!-- <input
            type="text"
            class="input-group-text myinput"
            :placeholder="order_data.mobiels"
            v-model="order_data.mobiels"
            disabled
          /> -->
        </button>
      </div>

      <!-- Modal -->

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="mobiles"
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
              <h5 class="modal-title" id="mobiles">نام برند و مدل</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="w-100 border-bottom pb-4">
              <input
                type="text"
                class="input-group-text myinput"
                placeholder="جستجو در برندها و مدل ها"
                v-model="searchTerm"
              />
            </div>
            <div class="modal-body p-0 pt-0" style="width: 100%">
              <ul>
                <template v-if="brand == 'name'">
                  <li
                    v-for="mobile in mobiles"
                    :key="mobile"
                    @click="getTypes(mobile)"
                    class="
                      li-design
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <!--   -->
                    <span>{{ mobile.name }}</span>
                    <font-awesome-icon
                      :icon="['fa', 'chevron-left']"
                      style="color: lightgray"
                    />
                  </li>
                </template>
                <template v-if="brand == 'type'">
                  <li @click="backBrands()" class="li-design">
                    <font-awesome-icon
                      :icon="['fa', 'chevron-right']"
                      style="color: lightgray"
                    />
                    <span class="me-3">همه برندها</span>
                  </li>
                  <li
                    v-for="item in types_mobile"
                    :key="item"
                    @click="sendBrand(item)"
                    class="li-design"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <!-- data-bs-dismiss="modal"
                    aria-label="Close" -->
                    <!--   -->
                    <span>{{ item }}</span>
                  </li>
                </template>
                <template v-if="brand == 'searchtype'">
                  <li @click="backBrands()" class="li-design">
                    <font-awesome-icon
                      :icon="['fa', 'chevron-right']"
                      style="color: lightgray"
                    />
                    <span class="me-3">همه برندها</span>
                  </li>
                  <li
                    v-for="item in filtermobiles"
                    :key="item"
                    @click="sendBrand(item)"
                    class="li-design"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <!-- data-bs-dismiss="modal"
                    aria-label="Close" -->
                    <!--   -->
                    <span>{{ item }}</span>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal -->
    </div>

    <div class="mt-5">
      <span class="fw-bold">تعداد سیم‌کارت</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.simNumber"
      >
        <option value="" selected disabled>انتخاب</option>
        <option class="text-start" value="1">1</option>
        <option class="text-start" value="2">2</option>
        <option class="text-start" value="3">3 وبیشتر</option>
      </select>
    </div>

    <div class="mt-5">
      <div class="fw-bold mb-3">اصالت برند</div>
      <label for="asl" class="form-check-label mx-2">اصل</label>
      <input
        type="radio"
        class="form-check-input ms-5"
        id="asl"
        name="esalatBrand"
        value="اصل"
        @input="order_data.esalatBrand"
      />
      <label for="nasl" class="form-check-label mx-2">غیر اصل</label>
      <input
        type="radio"
        class="form-check-input ms-5"
        id="nasl"
        name="esalatBrand"
        value="غیر اصل"
        @input="order_data.esalatBrand"
      />
    </div>
    <div class="mt-5">
      <span class="fw-bold">اطلاعات تکمیلی</span>
      <p class="text-muted">
        تکمیل این اطلاعات، کیفیت آگهی را افزایش می‌دهد و به خریداران کمک می‌کند
        آگهی را با فیلترهای جستجو پیدا کنند.
      </p>
    </div>

    <div class="mt-5">
      <span class="fw-bold">حافظهٔ داخلی</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.Rom_mobile"
      >
        <option value="" selected disabled>انتخاب</option>
        <option
          class="text-start"
          v-for="Rom_mobile in Rom_mobiles"
          :key="Rom_mobile"
          :value="Rom_mobile"
        >
          {{ Rom_mobile }}
        </option>
      </select>
    </div>

    <div class="mt-5">
      <span class="fw-bold">مقدار رم</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.Ram_mobile"
      >
        <option value="" selected disabled>انتخاب</option>
        <option
          class="text-start"
          v-for="Ram_mobile in Ram_mobiles"
          :key="Ram_mobile"
          :value="Ram_mobile"
        >
          {{ Ram_mobile }}
        </option>
      </select>
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'تبلت'">
    <div class="mt-5">
      <span class="fw-bold">سازنده</span>
      <select
        class="form-select form-select-sm text-secondary py-2 pe-4"
        aria-label=".form-select-sm example"
        v-model="order_data.builder_tablet"
      >
        <option value="" selected disabled>انتخاب</option>
        <option
          class="text-start"
          v-for="builder_tablet in builder_tablets"
          :key="builder_tablet"
          :value="builder_tablet"
        >
          {{ builder_tablet }}
        </option>
      </select>
    </div>

    <div class="mt-5">
      <label for="simSuport" class="text-muted px-3"
        >پشتیبانی از سیم‌کارت</label
      >
      <input
        id="simSuport"
        type="checkbox"
        class="form-check-input"
        value="true"
        v-model="order_data.simSuport"
      />
    </div>
  </div>
  <div class="" v-if="group_subitem_name == 'لوازم جانبی موبایل و تبلت'"></div>
  <div class="" v-if="group_subitem_name == 'سیم‌کارت'">
    <div class="mt-5">
      <div class="fw-bold mb-3">نوع سیم‌کارت</div>
      <label for="hamrah" class="form-check-label mx-2">همراه اول</label>
      <input
        type="radio"
        class="form-check-input ms-5"
        id="hamrah"
        name="simType"
        value="همراه اول"
        @input="order_data.simType"
      />
      <label for="iransel" class="form-check-label mx-2">ایرانسل</label>
      <input
        type="radio"
        class="form-check-input ms-5"
        id="iransel"
        name="simType"
        value="ایرانسل"
        @input="order_data.simType"
      />
      <label for="raitel" class="form-check-label mx-2">رایتل</label>
      <input
        type="radio"
        class="form-check-input ms-5"
        id="raitel"
        name="simType"
        value="رایتل"
        @input="order_data.simType"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { inject, watch } from "@vue/runtime-core";

export default {
  components: { FontAwesomeIcon },
  setup() {
    const order_data = inject("order_data");
    order_data.mobiles = "نام برند و مدل";
    const searchTerm = ref("");
    const group_subitem_name = computed(() => order_data.group_subitem_name);
    const mobiles = computed(() => order_data.subItem.mobiles);
    const brand_mobile = computed(() => order_data.subItem.brand_mobile);
    const filtermobiles = computed(() => {
      return brand_mobile.value.filter((product) => {
        return (
          product.toLowerCase().indexOf(searchTerm.value.toLowerCase()) != -1
        );
      });
    });
    const Rom_mobiles = computed(() => order_data.subItem.Rom_mobile);
    const Ram_mobiles = computed(() => order_data.subItem.Ram_mobile);
    const builder_tablets = computed(() => order_data.subItem.builder_tablet);

    watch(searchTerm, () => {
      if (searchTerm.value == "") {
        order_data.mobiles = "نام برند و مدل";
        brand.value = "name";
      } else {
        brand.value = "searchtype";
      }
    });
    const types_mobile = ref([]);
    const brand = ref("name");
    function getTypes(mobile) {
      types_mobile.value = mobile.type;
      order_data.mobiles = mobile.name;
      console.log("mobile.name", mobile.name);
      console.log(" order_data.mobiles", order_data.mobiles);
      brand.value = "type";
      searchTerm.value = "";
    }
    function backBrands() {
      brand.value = "name";
      searchTerm.value = "";
    }
    function sendBrand(item) {
      order_data.mobiles = item;
      console.log(" order_data.mobiles", order_data.mobiles);
      brand.value = "name";
    }
    return {
      order_data,
      group_subitem_name,
      mobiles,
      getTypes,
      backBrands,
      sendBrand,
      brand,
      types_mobile,
      searchTerm,
      filtermobiles,
      Rom_mobiles,
      Ram_mobiles,
      builder_tablets,
    };
  },
};
</script>

<style scoped>
.li-design {
  /* background: greenyellow; */
  cursor: pointer;
  list-style: none;
  margin-top: 4px;
  padding: 8px 4px;
  border-bottom: 2px solid lightgray;
}
</style>
