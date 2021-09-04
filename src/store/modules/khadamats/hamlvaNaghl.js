import axios from "axios";

const hamlvaNaghl = {
  namespaced: true,
  state: {
    hamlvaNaghl: [],
  },
  getters: {
    allhamlvaNaghl(state) {
      return state.hamlvaNaghl;
    },
  },
  mutations: {
    sethamlvaNaghl(state, hamlvaNaghl) {
      state.hamlvaNaghl = hamlvaNaghl;
    },
  },
  actions: {
    async fetchHamlvaNaghl({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("sethamlvaNaghl", res.data);
    },
  },
};
export default hamlvaNaghl;
