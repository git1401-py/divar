import axios from "axios";

const items = {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    allItems(state) {
      return state.items;
    },
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    async fetchItems({ commit }, path) {
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setItems", res.data);
    },
  },
};
export default items;
