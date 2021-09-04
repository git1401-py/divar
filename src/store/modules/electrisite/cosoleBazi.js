import axios from "axios";

const cosoleBazi = {
  namespaced: true,
  state: {
    cosoleBazi: [],
  },
  getters: {
    allcosoleBazi(state) {
      return state.cosoleBazi;
    },
  },
  mutations: {
    setcosoleBazi(state, cosoleBazi) {
      state.cosoleBazi = cosoleBazi;
    },
  },
  actions: {
    async fetchCosoleBazi({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setcosoleBazi", res.data);
    },
  },
};
export default cosoleBazi;
