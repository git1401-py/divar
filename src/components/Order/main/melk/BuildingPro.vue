<template>
  
  <hr />
  <agahi id="adviserMelk" @adviser="adviser" />
 
</template>

<script>
import { inject } from "@vue/runtime-core";
import Agahi from "../../UI/Agahi.vue";
export default {
  components: {
    Agahi,
  },
  setup() {
    const order_data = inject("order_data");
    function adviser(adviser_melk) {
      order_data.adviser_melk = adviser_melk;
    }

    return {
     
      adviser,
      
    };
  },
};
</script>

<style></style>
