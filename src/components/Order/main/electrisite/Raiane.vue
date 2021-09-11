<template>
  
  <moving-btn
    :conValue="anbar_melk"
    @conFn="conAnbar_melkFn"
    title="با انباری"
  />
  <hr />
  <cllapse-btntwo
    :price_items="roofs_items"
    :marks="roofsMarks"
    @minp="minRoof"
    @maxp="maxRoof"
    id="sellMelkRroofs"
    exm="2"
    txt=""
  />
  <div class="" v-if="group_subitem_name == 'رایانه همراه'">
    <cllapse-btnone
    :data_items="builder_pc_items"
    :marks="builder_pcMarks"
    @dataFn="builder_pcFn"
    id="builder_pc"
    exm="مثلا اپل"
  />
  <hr />
  </div>
  <div class="" v-if="group_subitem_name == 'رایانه رومیزی'"></div>
  <div class="" v-if="group_subitem_name == 'قطعات و لوازم جانبی'"></div>
  <div class="" v-if="group_subitem_name == 'لوازم و تجهیزات شبکه'"></div>
  <div class="" v-if="group_subitem_name == 'پرینتر/اسکنر/کپی/فکس'"></div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import CllapseBtntwo from "../../UI/CllapseBtntwo.vue";
import CllapseBtnone from "../../UI/CllapseBtnone.vue";
import MovingBtn from "../../UI/MovingBtn.vue";

import { inject } from "@vue/runtime-core";

export default {
  components: {
    CllapseBtnone,
    CllapseBtntwo,
    MovingBtn
  },
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);

    const builder_pcMarks = computed(() => order_data.subItem.builder_pc);
    const builder_pc_items = ref(["", ""]);

    const roofsMarks = computed(() => order_data.subItem.roof);
    const roofs_items = ref(["طبقه", "حداقل", "حداکثر"]);

    const anbar_melk = computed(() => order_data.anbar_melk);

function conAnbar_melkFn() {
      order_data.anbar_melk = !order_data.anbar_melk;
    }
    // **********************

    function builder_pcFn(builder_pc) {
      order_data.builder_pc = builder_pc;
    }
    // *****************
    function minRoof(roofs) {
      order_data.minroof_melk = roofs;
    }
    function maxRoof(roofs) {
      order_data.maxroof_melk = roofs;
    }
    return {
        // **********one
      builder_pcMarks,
      builder_pc_items,
      builder_pcFn,
    
    // ****two
      roofsMarks,roofs_items,minRoof,maxRoof,

    // *******moving
      anbar_melk,conAnbar_melkFn,

      group_subitem_name,
    };
  },
};
</script>

<style></style>
