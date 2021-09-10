import { computed, ref } from "@vue/reactivity";
export function calNumber(str) {
  computed(() => {
    const miliard = ref(0);
    const milion = ref(0);
    const hezar = ref(0);

    miliard.value = 0;
    milion.value = 0;
    hezar.value = 0;
    if (str.split(" ")[1] == "میلیارد") {
      miliard.value = parseInt(str.split(" ")[0]) * 1000000000;
      if (str.split(" ")[4]) {
        if (str.split(" ")[4] == "میلیون")
          milion.value = parseInt(str.split(" ")[3]) * 1000000;
      }
      return miliard.value + milion.value;
    } else if (str.split(" ")[1] == "میلیون") {
      milion.value = parseInt(str.split(" ")[0]) * 1000000;
      if (str.split(" ")[4]) {
        if (str.split(" ")[4] == "هزار")
          hezar.value = parseInt(str.split(" ")[3]) * 1000;
      }
      return milion.value + hezar.value;
    } else if (str.split(" ")[1] == "هزار") {
      hezar.value = parseInt(str.split(" ")[0]) * 1000;
      return hezar.value;
    } else {
      return 0;
    }
  });
}
