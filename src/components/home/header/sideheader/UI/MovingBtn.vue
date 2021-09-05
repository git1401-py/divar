<template>
  <div class=""></div>
  <div
    class="px-4 d-flex align-items-center justify-content-between div-container"
    @click="btnSelect"
  >
    <span>{{ title }}</span>
    <div
      class=""
      :class="{
        'btn-container-selected': conValue,
        'btn-container': !conValue,
      }"
    >
      <div></div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["title","conValue"],
  setup(props, { emit }) {
    const con = ref(false);

    console.log(con);
    console.log(props.conValue);

    function btnSelect() {
      emit("conFn");
    }
    return {
      btnSelect,
      ...props,
    };
  },
};
</script>

<style scoped>
.div-container {
  cursor: pointer;
}
.btn-container {
  position: relative;
  width: 35px;
  height: 20px;
  background: lightgray;
  transition: all 0.5s;
  border-radius: 50px;
}

.btn-container > div {
  position: absolute;
  top: 0;
  right: 1px;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 1px solid lightgray;
  border-radius: 50%;
  transition: all 0.5s;
}
.btn-container > div:hover {
  box-shadow: 0px 0px 0px 8px rgba(223, 220, 220, 0.3);
}
.btn-container-selected {
  position: relative;
  width: 35px;
  height: 20px;
  background: rgb(179, 20, 20);
  border-radius: 50px;
  transition: all 0.5s;
}
.btn-container-selected > div {
  position: absolute;
  top: 0px;
  right: 15px;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 1px solid rgb(179, 20, 20);
  border-radius: 50%;
  transition: all 0.5s;
}
.btn-container-selected > div:hover {
  box-shadow: 0px 0px 0px 8px rgba(238, 161, 161, 0.3);
}
</style>
