import axios from "axios";

const sargarmi = {
  namespaced: true,
  state: {
    sargarmi: [],
  },
  getters: {
    allsargarmi(state) {
      return state.sargarmi;
    },
  },
  mutations: {
    setsargarmi(state, sargarmi) {
      state.sargarmi = sargarmi;
    },
  },
  actions: {
    async fetchSargarmi({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setsargarmi", res.data);
    },
  },
};
export default sargarmi;
