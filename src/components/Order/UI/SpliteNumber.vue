<template>
  <div class="" v-show="false">{{str = String(number)}}</div>
  <div class="" v-show="false">{{sprice(str)}}</div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["number"],
  setup(props, { emit }) {
      const str = ref(0);
    function sprice(strnum){
        
    emit("getNember", sellprice(strnum));

    }
    function sellprice(str) {
      const strNumber = ref("");
      const arrayNumber = ref([]);
      const index = ref(0);
      index.value = str.length;
      while (index.value >= 1) {
        if (index.value === 1) {
          arrayNumber.value.unshift(str[0]);
        }
        if (index.value === 2) {
          arrayNumber.value.unshift(str.substring(0, 2));
        }
        if (index.value > 2) {
          arrayNumber.value.unshift(
            str.substring(index.value - 3, index.value)
          );
        }
        index.value = index.value - 3;
      }

      strNumber.value = String(arrayNumber.value);
      return strNumber.value;
    }
    return {
      ...props,str,sprice
    };
  },
};
</script>

<style></style>
