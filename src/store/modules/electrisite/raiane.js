import axios from "axios";

const raiane = {
  namespaced: true,
  state: {
    raiane: [],
  },
  getters: {
    allraiane(state) {
      return state.raiane;
    },
  },
  mutations: {
    setraiane(state, raiane) {
      state.raiane = raiane;
    },
  },
  actions: {
    async fetchRaiane({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setraiane", res.data);
    },
  },
};
export default raiane;
