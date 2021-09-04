import axios from "axios";

const animel = {
  namespaced: true,
  state: {
    animel: [],
  },
  getters: {
    allanimel(state) {
      return state.animel;
    },
  },
  mutations: {
    setanimel(state, animel) {
      state.animel = animel;
    },
  },
  actions: {
    async fetchAnimel({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setanimel", res.data);
    },
  },
};
export default animel;
