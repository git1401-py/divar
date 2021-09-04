import axios from "axios";

const sellMelk = {
  namespaced: true,
  state: {
    sellMelk: [],
  },
  getters: {
    allsellMelk(state) {
      return state.sellMelk;
    },
  },
  mutations: {
    setsellMelk(state, sellMelk) {
      state.sellMelk = sellMelk;
    },
  },
  actions: {
    async fetchSellMelk({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setsellMelk", res.data);
    },
  },
};
export default sellMelk;
