<template>
  <div class=""></div>
  <div
    class="px-4 d-flex align-items-center justify-content-between div-container"
    @click="btnSelect"
  >
    <span class="txt-color">{{ title }}</span>
    <div v-if="conValue" class="btn-container-selected">
      <div></div>
    </div>
    <div v-if="!conValue" class="btn-container">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "conValue"],
  setup(props, { emit }) {
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
.txt-color {
  color: gray;
}
.txt-color:hover {
  color: #000;
}

.btn-container {
  position: relative;
  width: 35px;
  height: 20px;
  background: lightgray;
  transition: all 0.5s !important;
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
