import { createStore } from "vuex";
import titles from "./modules/titles.js";
import items from "./modules/items.js";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    titles,
    items,
  },
});
