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
    const info = inject("info");
    function adviser(adviser_melk) {
      info.adviser_melk = adviser_melk;
    }

    return {
     
      adviser,
      
    };
  },
};
</script>

<style></style>
