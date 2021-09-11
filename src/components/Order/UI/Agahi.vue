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
        /><span class="p-1 pe-sm-3">آگهی دهنده</span>
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
        <label
          style="width: 33.3%"
          @click="adv('همه')"
          :class="{ 'active': activeH }"
          class="advinput"
          value="همه"
        >همه</label>
          
        <label
          style="width: 33.3%"
          @click="adv('شخصی')"
          :class="{ 'active': activeS }"
          class="advinput"
          value="شخصی"
        >شخصی</label>
          
        <label
          style="width: 33.3%"
          @click="adv('مشاور املاک')"
          :class="{ 'active': activeM }"
          class="advinput"
          value="مشاور املاک"
        >مشاور املاک</label>
          
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import {} from "vuex";

export default {
  components: { FontAwesomeIcon },
  props: ["id"],
  setup(props, { emit }) {
    const ID = ref("");
    const showDelete = ref(false);
    const price = ref(false);
    const activeH = ref(false);
    const activeS = ref(false);
    const activeM = ref(false);
    const adver = ref("");

    watch(adver, () => {
      if (adver.value == "") price.value = false;
      else price.value = true;
      emit("adviser", adver.value);
    });
    function adv(persion) {
      adver.value = persion;
      emit("adviser", persion);
      if (persion == "همه") {
        activeS.value = false;
        activeM.value = false;
        activeH.value = true;
      }
      if (persion == "شخصی") {
        activeM.value = false;
        activeH.value = false;
        activeS.value = true;
      }
      if (persion == "مشاور املاک") {
        activeS.value = false;
        activeH.value = false;
        activeM.value = true;
      }
    }
    function cleardataSection() {
      adver.value = "";
      price.value = false;
      activeS.value = false;
        activeH.value = false;
        activeM.value = false;
    }
    function toggleDelete() {
      showDelete.value = !showDelete.value;
    }
    return {
      ID,
      adver,
      adv,
      price,
      cleardataSection,
      toggleDelete,
      showDelete,
      ...props,
      activeH,
      activeM,
      activeS
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
  width: 33.3%;
  border: 1px solid lightgray;
  background: transparent;
  cursor: pointer;
  padding: 6px;
  text-align: center;
}
.active {
  border: 1px solid tomato;
  color: tomato;
  background: rgb(241, 228, 230);
}
</style>
