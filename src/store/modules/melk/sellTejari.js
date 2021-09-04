import axios from "axios";

const sellTejari = {
  namespaced: true,
  state: {
    sellTejari: [],
  },
  getters: {
    allsellTejari(state) {
      return state.sellTejari;
    },
  },
  mutations: {
    setsellTejari(state, sellTejari) {
      state.sellTejari = sellTejari;
    },
  },
  actions: {
    async fetchSellTejari({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setsellTejari", res.data);
    },
  },
};
export default sellTejari;
