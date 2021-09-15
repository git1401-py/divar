import axios from "axios";

const subItems = {
  namespaced: true,
  state: {
    subItems: [],
    noSubItem: false,
  },
  getters: {
    allSubItems(state) {
      return state.subItems;
    },
    noSubItem(state) {
      return state.noSubItem;
    },
  },
  mutations: {
    setSubItems(state, subItems) {
      if (!subItems) {
        state.noSubItem = true;
      }
      state.subItems = subItems;
    },
  },
  actions: {
    async fetchSubItems({ commit }, path) {
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setSubItems", res.data);
    },
  },
};
export default subItems;
