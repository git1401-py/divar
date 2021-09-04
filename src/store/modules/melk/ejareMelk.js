import axios from "axios";

const ejareMelk = {
  namespaced: true,
  state: {
    ejareMelk: [],
  },
  getters: {
    allejareMelk(state) {
      return state.ejareMelk;
    },
  },
  mutations: {
    setejareMelk(state, ejareMelk) {
      state.ejareMelk = ejareMelk;
    },
  },
  actions: {
    async fetchEjareMelk({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setejareMelk", res.data);
    },
  },
};
export default ejareMelk;
