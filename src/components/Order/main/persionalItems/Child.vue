<template>
  <div class="mt-3">
    <div class="fw-bold mb-3">نوع کالا</div>
    <label for="zanane" class="form-check-label mx-2">دخترانه</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="zanane"
      name="jens_child"
      value="دخترانه"
      @input="order_data.jens_child"
    />
    <label for="mardane" class="form-check-label mx-2">پسرانه</label>
    <input
      type="radio"
      class="form-check-input ms-5"
      id="mardane"
      name="jens_child"
      value="پسرانه"
      @input="order_data.jens_child"
    />
    <label for="dokhtaranepesarane" class="form-check-label mx-2"
      >پسرانه و دخترانه</label
    >
    <input
      type="radio"
      class="form-check-input ms-5"
      id="dokhtaranepesarane"
      name="jens_child"
      value="پسرانه و دخترانه"
      @input="order_data.jens_child"
    />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

import { inject } from "@vue/runtime-core";

export default {
  components: {},
  setup() {
    const order_data = inject("order_data");
    const group_subitem_name = computed(() => order_data.group_subitem_name);

    return {
      order_data,
      group_subitem_name,
    };
  },
};
</script>

<style></style>
