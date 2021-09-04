import axios from "axios";

const tajhizat = {
  namespaced: true,
  state: {
    tajhizat: [],
  },
  getters: {
    alltajhizat(state) {
      return state.tajhizat;
    },
  },
  mutations: {
    settajhizat(state, tajhizat) {
      state.tajhizat = tajhizat;
    },
  },
  actions: {
    async fetchTajhizat({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("settajhizat", res.data);
    },
  },
};
export default tajhizat;
