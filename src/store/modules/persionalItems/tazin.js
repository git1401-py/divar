import axios from "axios";

const tazin = {
  namespaced: true,
  state: {
    tazin: [],
  },
  getters: {
    alltazin(state) {
      return state.tazin;
    },
  },
  mutations: {
    settazin(state, tazin) {
      state.tazin = tazin;
    },
  },
  actions: {
    async fetchTazin({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("settazin", res.data);
    },
  },
};
export default tazin;
