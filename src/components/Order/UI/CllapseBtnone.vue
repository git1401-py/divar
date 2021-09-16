<template>
  <div class="px-4">
    <p class="d-flex justify-content-between align-items-center">
      <span v-show="false">{{ (ID = "#" + id) }}</span>
      <a
        class="w-100"
        data-bs-toggle="collapse"
        :href="ID"
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
        /><span class="p-1 pe-sm-3">{{ data_items }}</span>
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
        style="margin-left: 10px; width: 8px; height: 8px; border-radius: 50%"
      ></span>
    </p>
    <div class="collapse position-relative text-secondary" :id="id">
      <div
        class="
          p-3
          d-flex
          align-items-center
          justify-content-between
          position-relative
        "
      >
        
        <select
          class="form-select form-select-sm text-secondary py-2 pe-4"
          aria-label=".form-select-sm example"
          :class="{ 'close-select': data }"
          v-model="order_data.city"
        >
          <option value="" selected disabled> {{ exm }}</option>
          <template v-for="money in marks" :key="money">
            <option class="text-start" :value="money">{{ money }}</option>
          </template>
        </select>
        <div
          v-if="data"
          class="position-absolute close"
          @click="cleardata()"
        ></div>
        <div class="position-absolute toman">{{ txt }}</div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; 
import { ref } from "@vue/reactivity";
import { inject, watch } from "@vue/runtime-core";
import {} from "vuex";

export default {
  components: { FontAwesomeIcon },
  props: ["data_items", "marks", "id", "txt", "exm","v_model_data"],
  setup(props, { emit }) {
    const order_data = inject("order_data");    
    const ID = ref("");
    const showDelete = ref(false);
    const price = ref(false);
    const data = ref("");
    function cleardata() {
      data.value = "";
    }
    watch(data, () => {
      if (data.value == "") price.value = false;
      else price.value = true;
      emit("dataFn", data.value);
    });
   
    function cleardataSection() {
      data.value = "";
      price.value = false;
    }
    function toggleDelete() {
      showDelete.value = !showDelete.value;
    }
    return {
      order_data,
      ID,
      data,
      price,
      cleardata,
      cleardataSection,
      toggleDelete,
      showDelete,
      ...props,
    };
  },
};
</script>

<style scoped>
select:hover {
  border: 1px solid #222 !important;
}
.close-select {
  background-position: calc(95% - 30px) 14px, calc(100% - 10px) 14px, 100% 0;
  background-size: 10px 10px, 10px 10px;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 60px !important;
  color: #000 !important;
}
.close {
  top: 42%;
  right: 24px;
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
