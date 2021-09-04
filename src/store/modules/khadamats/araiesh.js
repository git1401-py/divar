import axios from "axios";

const araiesh = {
  namespaced: true,
  state: {
    araiesh: [],
  },
  getters: {
    allaraiesh(state) {
      return state.araiesh;
    },
  },
  mutations: {
    setaraiesh(state, araiesh) {
      state.araiesh = araiesh;
    },
  },
  actions: {
    async fetchAraiesh({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setaraiesh", res.data);
    },
  },
};
export default araiesh;
