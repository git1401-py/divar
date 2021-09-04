import axios from "axios";

const pishevaMaharat = {
  namespaced: true,
  state: {
    pishevaMaharat: [],
  },
  getters: {
    allpishevaMaharat(state) {
      return state.pishevaMaharat;
    },
  },
  mutations: {
    setpishevaMaharat(state, pishevaMaharat) {
      state.pishevaMaharat = pishevaMaharat;
    },
  },
  actions: {
    async fetchPishevaMaharat({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setpishevaMaharat", res.data);
    },
  },
};
export default pishevaMaharat;
