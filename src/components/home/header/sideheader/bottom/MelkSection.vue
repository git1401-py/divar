<template>
  <div class="" v-if="group_item_name == 'فروش مسکونی'">
    <sell-melk />
  </div>
  <div class="" v-if="group_item_name == 'اجاره مسکونی'"></div>
  <div class="" v-if="group_item_name == 'فروش اداری و تجاری'"></div>
  <div class="" v-if="group_item_name == 'اجاره اداری و تجاری'"></div>
  <div class="" v-if="group_item_name == 'اجاره کوتاه مدت'"></div>
  <div class="" v-if="group_item_name == 'پروژه های ساخت و ساز'"></div>
</template>

<script>
import SellMelk from "./melk/SellMelk.vue";
export default {
  components: {
    SellMelk,
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
