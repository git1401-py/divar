import axios from "axios";

const subItems = {
  namespaced: true,
  state: {
    subItems: [],
  },
  getters: {
    allSubItems(state) {
      return state.subItems;
    },
  },
  mutations: {
    setSubItems(state, subItems) {
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
