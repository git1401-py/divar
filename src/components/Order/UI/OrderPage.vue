<template>
  <div class="pt-5">
    <form>
      <ul>
        <h4>ثبت آگهی</h4>
        <div class="text-muted py-1">
          <span>دستهٔ آگهی را انتخاب کنید</span>
        </div>
        <div
          class="text-muted py-3 titlehover small"
          v-if="order_data.group_name && !order_data.group_item_name"
        >
          <a @click="Resetgroup_name"
            ><font-awesome-icon :icon="['fa', 'chevron-right']" />
            <span class="pe-2">بازگشت به همهٔ دسته‌ها</span>
          </a>
        </div>
        <div
          class="text-muted py-3 titlehover small"
          v-if="order_data.group_item_name"
        >
          <a class="" @click="Resetgroup_item_name">
            <font-awesome-icon :icon="['fa', 'chevron-right']" />
            <span class="pe-2">بازگشت به همهٔ {{ order_data.group_name }}</span>
          </a>
        </div>
        <template v-if="catagoryname == 'title'">
          <li
            v-for="item in data_items"
            :key="item"
            @click="sendTitle(item)"
            class="li-design d-flex justify-content-between align-items-center"
          >
            <!-- املاک -->
            <span>{{ item.title }}</span>
            <font-awesome-icon :icon="['fa', 'chevron-left']" style="color:lightgray;"/>
          </li>
        </template>
        <template v-if="catagoryname == 'items'">
          <li
            v-for="item in data_items"
            :key="item"
            @click="sendItem(item)"
            class="li-design d-flex justify-content-between align-items-center"
          >
            <span>{{ item.name }}</span>
            
            <font-awesome-icon :icon="['fa', 'chevron-left']" style="color:lightgray;"/>
          </li>
        </template>
        <template v-if="catagoryname == 'subitems'">
          <li
            v-for="item in data_items"
            :key="item"
            @click="sendsubItem(item)"
            class="li-design d-flex justify-content-between align-items-center"
          >
            <span>{{ item.name }}</span>
            <font-awesome-icon :icon="['fa', 'chevron-left']" style="color:lightgray;"/>
          </li>
        </template>
      </ul>
    </form>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: { FontAwesomeIcon },
  props: ["order_data", "data_titles", "data_items", "catagoryname"],
  setup(props, { emit }) {
    function sendTitle(title) {
      emit("Gettitle", title); //املاک
    }
    function sendItem(item) {
      emit("Getitem", item); //فروش مسکونی
    }
    function sendsubItem(item) {
      emit("Getsubitem", item); //آپارتمان
    }
    function Resetgroup_name() {
      emit("Resetgroup_name");
    }
    function Resetgroup_item_name() {
      emit("Resetgroup_item_name");
    }
    return {
      sendItem,
      sendTitle,
      sendsubItem,
      Resetgroup_name,
      Resetgroup_item_name,
      ...props,
    };
  },
};
</script>

<style scoped>
.li-design {
  /* background: greenyellow; */
  cursor: pointer;
  list-style: none;
  margin-top: 4px;
  padding: 8px 4px;
  border-bottom: 2px solid lightgray;
}
.titlehover {
  cursor: pointer;
}
.titlehover:hover {
  color: #000 !important;
}
</style>
