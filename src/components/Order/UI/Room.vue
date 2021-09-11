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
        /><span class="p-1 pe-sm-3"> تعداد اتاق </span>
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
        <!-- <label @click="adv('0')" :class="{ active: active[0] }" class="advinput"
          >بدون اتاق</label
        >

        <label @click="adv('1')" :class="{ active: active[1] }" class="advinput"
          >1</label
        >

        <label @click="adv('2')" :class="{ active: active[2] }" class="advinput"
          >2</label
        >

        <label @click="adv('3')" :class="{ active: active[3] }" class="advinput"
          >3</label
        >

        <label @click="adv('4')" :class="{ active: active[4] }" class="advinput"
          >4</label
        > -->

        <label
          v-for="(room, index) in roomsValues"
          :key="index"
          @click="adv(index)"
          :class="{ active: active[index] }"
          class="advinput"
        >
          {{ room }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { reactive, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import {} from "vuex";

export default {
  components: { FontAwesomeIcon },
  props: ["id", "roomsValues"],
  setup(props, { emit }) {
    const ID = ref("");
    const showDelete = ref(false);
    const price = ref(false);
    const active = reactive([false, false, false, false, false, false]);

    watch(active, () => {
      for (let i = 0; i < active.length; i++) {
        if (!active[i]) price.value = false;}
      for (let i = 0; i < active.length; i++) {
        if (active[i]) price.value = true;
      }
    });
    function adv(number) {
      emit("roomFn", number);
      console.log(number);
      for (let i = 0; i < active.length; i++) active[i] = false;
      active[number] = true;
    }
    function cleardataSection() {
      price.value = false;
      emit("roomFn", "");
      for (let i = 0; i < active.length; i++) active[i] = false;
    }
    function toggleDelete() {
      showDelete.value = !showDelete.value;
    }
    return {
      ID,
      adv,
      price,
      cleardataSection,
      toggleDelete,
      showDelete,
      ...props,
      active,
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
.advinput {
  border: 1px solid lightgray;
  border-radius: 50px;
  background: transparent;
  cursor: pointer;
  padding: 6px;
  margin: 6px;
  text-align: center;
}
.active {
  border: 1px solid tomato;
  color: tomato;
  background: rgb(241, 228, 230);
}
</style>
