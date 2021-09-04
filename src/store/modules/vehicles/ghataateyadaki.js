import axios from "axios";

const ghataateyadaki = {
  namespaced: true,
  state: {
    ghataateyadaki: [],
  },
  getters: {
    allghataateyadaki(state) {
      return state.ghataateyadaki;
    },
  },
  mutations: {
    setghataateyadaki(state, ghataateyadaki) {
      state.ghataateyadaki = ghataateyadaki;
    },
  },
  actions: {
    async fetchGhataateyadaki({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setghataateyadaki", res.data);
    },
  },
};
export default ghataateyadaki;
