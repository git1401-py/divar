<template>
  
  <div></div>
 
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  components: {
  },
  setup() {
    const order_data = inject("order_data");
   

    return {
     order_data
      
    };
  },
};
</script>

<style></style>
