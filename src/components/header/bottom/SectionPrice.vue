<template>
  <div class="">
    <p class="d-flex justify-content-between align-items-center">
      <a
        class="w-100 pe-4"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        @click="toggleDelete"
      >
        <font-awesome-icon
        v-if="showDelete"
          class=""
          :icon="['fa', 'chevron-up']"
          style="width: 10px; color: #000"
        />
        <font-awesome-icon
        v-if="!showDelete"
          class=""
          :icon="['fa', 'chevron-down']"
          style="width: 10px; color: #000"
        /><span class="p-1 pe-sm-3">قیمت</span>
      </a>
      <span
        v-if="price && showDelete"
        class="text-danger px-2 delete"
        @click="cleardataSection"
        >حذف</span
      >
      <span
      v-if="price && !showDelete"
        class="bg-danger"
        style="margin-left:10px; width: 8px; height: 8px; border-radius: 50%"
      ></span>
    </p>
    <div class="collapse position-relative text-secondary" id="collapseExample">
      <div
        class="
          p-3
          d-flex
          align-items-center
          justify-content-between
          position-relative
        "
      >
        <div class="ps-5">حداقل</div>
        <select
          class="form-select form-select-sm text-secondary py-2 pe-4"
          aria-label=".form-select-sm example"
          :class="{ 'close-select': minprice }"
          v-model="minprice"
        >
          <option value="" selected>مثلا 70،000،000</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div
          v-if="minprice"
          class="position-absolute close"
          @click="cleardata('minprice')"
        ></div>
        <div class="position-absolute toman">تومان</div>
      </div>
      <div
        class="position-absolute d-flex flex-column"
        style="top: 45px; right: 30px"
      >
        <span style="height: 5px">.</span><span style="height: 5px">.</span
        ><span style="height: 5px">.</span>
      </div>
      <div
        class="
          p-3
          d-flex
          align-items-center
          position-relative
          justify-content-between
        "
      >
        <div class="ps-5">حداکثر</div>
        <select
          class="form-select form-select-sm text-secondary py-2 pe-4"
          aria-label=".form-select-sm example"
          :class="{ 'close-select': maxprice }"
          v-model="maxprice"
        >
          <option value="" selected>مثلا 70،000،000</option>
          <option class="text-start" value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div
          v-if="maxprice"
          class="position-absolute close"
          @click="cleardata('maxprice')"
        ></div>
        <div class="position-absolute toman">تومان</div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

export default {
  components: { FontAwesomeIcon },

  setup() {
    const showDelete = ref(false);
    const price = ref(false);
    const minprice = ref("");
    const maxprice = ref("");
    function cleardata(data) {
      if (data == "minprice") minprice.value = "";
      if (data == "maxprice") maxprice.value = "";
    }
    watch(minprice, () => {
      if (minprice.value == "") price.value = false;
      else price.value = true;
    });
    watch(maxprice, () => {
      if (maxprice.value == "") price.value = false;
      else price.value = true;
    });
    function cleardataSection() {
      minprice.value = "";
      maxprice.value = "";
      price.value = false;
    }
    function toggleDelete() {
      showDelete.value = !showDelete.value;
    }
    return {
      minprice,
      maxprice,
      price,
      cleardata,
      cleardataSection,
      toggleDelete,
      showDelete
    };
  },
};
</script>

<style scoped>
select:hover {
  border: 1px solid #222 !important;
}
.close-select {
  background-position: calc(100% - 30px) 14px, calc(100% - 10px) 14px, 100% 0;
  background-size: 10px 10px, 10px 10px;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 50px !important;
  color: #000 !important;
}
.close {
  top: 42%;
  right: 110px;
  cursor: pointer;
  color: #aaa;
  border-radius: 30px;
  font-size: 31px;
  font-weight: bold;
  line-height: 0px;
  height: 15px;
  width: 20px;
  background: #fff;
  padding: 2px;
}
.toman {
  top: 48%;
  left: 20px;
  color: #aaa;
  font-size: 13px;
  line-height: 0px;
  height: 15px;
  padding: 2px;
}
.close:before {
  content: "×";
}
.close:hover {
  color: #555;
}
.delete {
  border-radius: 5px;
  cursor: pointer;
}
.delete:hover {
  background: lightpink;
}
</style>
