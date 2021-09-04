import axios from "axios";

const estekhdam = {
  namespaced: true,
  state: {
    estekhdam: [],
  },
  getters: {
    allestekhdam(state) {
      return state.estekhdam;
    },
  },
  mutations: {
    setestekhdam(state, estekhdam) {
      state.estekhdam = estekhdam;
    },
  },
  actions: {
    async fetchEstekhdam({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setestekhdam", res.data);
    },
  },
};
export default estekhdam;
