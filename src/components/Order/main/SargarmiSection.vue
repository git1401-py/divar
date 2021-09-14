<template>
  <div class="" v-if="group_item_name == 'بلیط'">
    <blit />
  </div>
  <div class="" v-if="group_item_name == 'تور و چادر'">
    <torvaChador />
  </div>
  <div class="" v-if="group_item_name == 'کتاب و مجله'">
    <books />
  </div>
  <div class="" v-if="group_item_name == 'دوچرخه/اسکیت/اسکوتر'">
    <docharkhe />
  </div>
  <div class="" v-if="group_item_name == 'حیوانات'">
    <animel />
  </div>
  <div class="" v-if="group_item_name == 'کلکسیون و سرگرمی'">
    <kolekson />
  </div>
  <div class="" v-if="group_item_name == 'آلات موسیقی'">
    <music />
  </div>
  <div class="" v-if="group_item_name == 'ورزش و تناسب اندام'">
    <varzesh />
  </div>
  <div class="" v-if="group_item_name == 'اسباب بازی'">
    <toys />
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
    <label for="moaveze" class="text-muted px-3">مایلم معاوضه کنم</label>
    <input
      id="moaveze"
      type="checkbox"
      class="form-check-input"
      value="true"
      v-model="order_data.moaveze"
    />
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';
import blit from "./sargarmi/blit.vue";
import torvaChador from "./sargarmi/torvaChador.vue";
import books from "./sargarmi/books.vue";
import docharkhe from "./sargarmi/docharkhe.vue";
import animel from "./sargarmi/animel.vue";
import kolekson from "./sargarmi/kolekson.vue";
import music from "./sargarmi/music.vue";
import varzesh from "./sargarmi/varzesh.vue";
import toys from "./sargarmi/toys.vue";
import SpliteNumber from "../UI/SpliteNumber"

export default {
  components: {
    blit,
    torvaChador,
    books,
    docharkhe,
    animel,
    kolekson,
    music,
    varzesh,
    toys,
    SpliteNumber
  },
  setup() {
    const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);
    const strprice = ref("");
    function getPrice(num) {
      strprice.value = num;
    }
    return {
      order_data,
      group_item_name,
      strprice,
      getPrice,
    };
  },
};
</script>

<style></style>
