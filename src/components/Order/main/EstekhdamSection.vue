<template>
  <div class=""></div>
  <cllapse-btnone
    :data_items="typeHamkari_items"
    :marks="typeHamkariMarks"
    @dataFn="typeHamkariFn"
    id="typeHamkari"
    exm="انتخاب"
  />

  <hr />
  <cllapse-btnone
    :data_items="timekar_items"
    :marks="timekarMarks"
    @dataFn="timekarFn"
    id="timekar"
    exm="انتخاب"
  />

  <hr />
  <cllapse-btnone
    :data_items="typePardakht_items"
    :marks="typePardakhtMarks"
    @dataFn="typePardakhtFn"
    id="typePardakht"
    exm="انتخاب"
  />

  <hr />
  <cllapse-btnone
    :data_items="bime_items"
    :marks="bimeMarks"
    @dataFn="bimeFn"
    id="bime"
    exm="انتخاب"
  />

  <hr />
  <cllapse-btnone
    :data_items="dorkari_items"
    :marks="dorkariMarks"
    @dataFn="dorkariFn"
    id="dorkari"
    exm="انتخاب"
  />

  <hr />
  <cllapse-btnone
    :data_items="sabeghe_items"
    :marks="sabegheMarks"
    @dataFn="sabegheFn"
    id="sabeghe"
    exm="انتخاب"
  />

  <hr />
  <cllapse-btnone
    :data_items="sarbazi_items"
    :marks="sarbaziMarks"
    @dataFn="sarbaziFn"
    id="sarbazi"
    exm="انتخاب"
  />

</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import CllapseBtnone from "../UI/CllapseBtnone.vue";

export default {
  components: {
    CllapseBtnone,
  },
  setup() {
    const order_data = inject("order_data");
    const group_item_name = computed(() => order_data.group_item_name);

    const typeHamkariMarks = computed(() => order_data.subItem.typeHamkari);
    const typeHamkari_items = ref("نوع همکاری");

    const timekarMarks = computed(() => order_data.subItem.timekar);
    const timekar_items = ref("ساعات کاری");

    const typePardakhtMarks = computed(() => order_data.subItem.typePardakht);
    const typePardakht_items = ref("شیوه پرداخت");

    const bimeMarks = computed(() => order_data.subItem.bime);
    const bime_items = ref("بیمه");

    const dorkariMarks = computed(() => order_data.subItem.dorkari);
    const dorkari_items = ref("امکان دورکاری");

    const sabegheMarks = computed(() => order_data.subItem.sabeghe);
    const sabeghe_items = ref("سابقه مورد نیاز");

    const sarbaziMarks = computed(() => order_data.subItem.sarbazi);
    const sarbazi_items = ref("پایان خدمت/معافیت");

    function typeHamkariFn(typeHamkari) {
      order_data.typeHamkari = typeHamkari;
    }

    function timekarFn(timekar) {
      order_data.timekar = timekar;
    }

    function typePardakhtFn(typePardakht) {
      order_data.typePardakht = typePardakht;
    }

    function bimeFn(bime) {
      order_data.bime = bime;
    }

    function dorkariFn(dorkari) {
      order_data.dorkari = dorkari;
    }

    function sabegheFn(sabeghe) {
      order_data.sabeghe = sabeghe;
    }

    function sarbaziFn(sarbazi) {
      order_data.sarbazi = sarbazi;
    }
    return {
      typeHamkariMarks,
      typeHamkari_items,
      typeHamkariFn,
      
      timekarMarks,
      timekar_items,
      timekarFn,
      
      typePardakhtMarks,
      typePardakht_items,
      typePardakhtFn,
      
      bimeMarks,
      bime_items,
      bimeFn,
      
      dorkariMarks,
      dorkari_items,
      dorkariFn,
      
      sabegheMarks,
      sabeghe_items,
      sabegheFn,

      sarbaziMarks,
      sarbazi_items,
      sarbaziFn,

      group_item_name,
    };
  },
};
</script>

<style></style>
