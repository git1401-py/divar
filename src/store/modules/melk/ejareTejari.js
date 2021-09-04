import axios from "axios";

const ejareTejari = {
  namespaced: true,
  state: {
    ejareTejari: [],
  },
  getters: {
    allejareTejari(state) {
      return state.ejareTejari;
    },
  },
  mutations: {
    setejareTejari(state, ejareTejari) {
      state.ejareTejari = ejareTejari;
    },
  },
  actions: {
    async fetchEjareTejari({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setejareTejari", res.data);
    },
  },
};
export default ejareTejari;
