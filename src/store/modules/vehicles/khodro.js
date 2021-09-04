import axios from "axios";

const khodro = {
  namespaced: true,
  state: {
    khodro: [],
  },
  getters: {
    allkhodro(state) {
      return state.khodro;
    },
  },
  mutations: {
    setkhodro(state, khodro) {
      state.khodro = khodro;
    },
  },
  actions: {
    async fetchKhodro({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setkhodro", res.data);
    },
  },
};
export default khodro;
