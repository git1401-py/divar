import axios from "axios";

const araieshi = {
  namespaced: true,
  state: {
    araieshi: [],
  },
  getters: {
    allaraieshi(state) {
      return state.araieshi;
    },
  },
  mutations: {
    setaraieshi(state, araieshi) {
      state.araieshi = araieshi;
    },
  },
  actions: {
    async fetchAraieshi({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setaraieshi", res.data);
    },
  },
};
export default araieshi;
