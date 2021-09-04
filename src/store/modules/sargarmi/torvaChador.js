import axios from "axios";

const torvaChador = {
  namespaced: true,
  state: {
    torvaChador: [],
  },
  getters: {
    alltorvaChador(state) {
      return state.torvaChador;
    },
  },
  mutations: {
    settorvaChador(state, torvaChador) {
      state.torvaChador = torvaChador;
    },
  },
  actions: {
    async fetchTorvaChador({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("settorvaChador", res.data);
    },
  },
};
export default torvaChador;
