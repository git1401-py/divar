import axios from "axios";

const pazirai = {
  namespaced: true,
  state: {
    pazirai: [],
  },
  getters: {
    allpazirai(state) {
      return state.pazirai;
    },
  },
  mutations: {
    setpazirai(state, pazirai) {
      state.pazirai = pazirai;
    },
  },
  actions: {
    async fetchPazirai({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setpazirai", res.data);
    },
  },
};
export default pazirai;
