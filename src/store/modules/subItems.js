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
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setSubItems", res.data);
    },
  },
};
export default subItems;
