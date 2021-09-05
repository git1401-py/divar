<template>
  <div class="">
    <section-price />
    <hr />
    <section-just-img />
    <hr />
    <section-just-imadiate />
    <hr />
    <section-footer />
  </div>
</template>

<script>
import SectionPrice from "./SectionPrice.vue";
import SectionJustImg from "./SectionJustImg.vue";
import SectionJustImadiate from "./SectionJustImadiate.vue";
import SectionFooter from "./SectionFooter.vue";
export default {
  components: {
    SectionPrice,
    SectionJustImg,
    SectionJustImadiate,
    SectionFooter,
  },
};
</script>

<style></style>
