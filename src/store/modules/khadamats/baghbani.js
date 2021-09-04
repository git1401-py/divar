import axios from "axios";

const baghbani = {
  namespaced: true,
  state: {
    baghbani: [],
  },
  getters: {
    allbaghbani(state) {
      return state.baghbani;
    },
  },
  mutations: {
    setbaghbani(state, baghbani) {
      state.baghbani = baghbani;
    },
  },
  actions: {
    async fetchBaghbani({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setbaghbani", res.data);
    },
  },
};
export default baghbani;
