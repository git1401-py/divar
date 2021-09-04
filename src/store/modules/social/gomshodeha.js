import axios from "axios";

const gomshodeha = {
  namespaced: true,
  state: {
    gomshodeha: [],
  },
  getters: {
    allgomshodeha(state) {
      return state.gomshodeha;
    },
  },
  mutations: {
    setgomshodeha(state, gomshodeha) {
      state.gomshodeha = gomshodeha;
    },
  },
  actions: {
    async fetchGomshodeha({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setgomshodeha", res.data);
    },
  },
};
export default gomshodeha;
