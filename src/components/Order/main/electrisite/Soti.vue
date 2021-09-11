<template>
  <cllapse-btnone
    :data_items="status_items"
    :marks="statusMarks"
    @dataFn="statusFn"
    id="status"
    exm="انتخاب"
  />
  <hr />
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
  <div class="" v-if="group_subitem_name == 'فیلم و موسیقی'"></div>
  <div class="" v-if="group_subitem_name == 'دوربین عکاسی و فیلم‌برداری'"></div>
  <div class="" v-if="group_subitem_name == 'پخش‌کننده همراه'"></div>
  <div class="" v-if="group_subitem_name == 'سیستم صوتی خانگی'"></div>
  <div class="" v-if="group_subitem_name == 'ویدئو و پخش کننده DVD'"></div>
  <div class="" v-if="group_subitem_name == 'تلویزیون و پروژکتور'"></div>
  <div class="" v-if="group_subitem_name == 'دوربین مداربسته'"></div>
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

    const moavezeMarks = computed(() => order_data.subItem.electriciti_price);
    const moaveze_items = ref(["", ""]);

    const roofsMarks = computed(() => order_data.subItem.roof);
    const roofs_items = ref(["طبقه", "حداقل", "حداکثر"]);

    const anbar_melk = computed(() => order_data.anbar_melk);

function conAnbar_melkFn() {
      order_data.anbar_melk = !order_data.anbar_melk;
    }
    // **********************

    function moavezeFn(moaveze) {
      order_data.moaveze = moaveze;
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
      moavezeMarks,
      moaveze_items,
      moavezeFn,
    
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
