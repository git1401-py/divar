import axios from "axios";

const detailes = {
  namespaced: true,
  state: {
    detailes: [],
  },
  getters: {
    alldetailes(state) {
      return state.detailes;
    },
  },
  mutations: {
    setdetailes(state, detailes) {
      state.detailes = detailes;
    },
  },
  actions: {
    async fetchDetailes({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setdetailes", res.data);
    },
  },
};
export default detailes;
