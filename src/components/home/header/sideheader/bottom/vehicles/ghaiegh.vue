<template>
  <div class=""></div>
</template>

<script>
import { computed, inject} from "@vue/runtime-core";
export default {
  components: {
  },
  setup() {
    const info = inject("info");
    const group_subitem_name = computed(() => info.group_subitem_name);
    
    return {
      group_subitem_name,

    };
  },
};
</script>

<style></style>
