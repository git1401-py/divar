import axios from "axios";

const kolekson = {
  namespaced: true,
  state: {
    kolekson: [],
  },
  getters: {
    allkolekson(state) {
      return state.kolekson;
    },
  },
  mutations: {
    setkolekson(state, kolekson) {
      state.kolekson = kolekson;
    },
  },
  actions: {
    async fetchKolekson({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setkolekson", res.data);
    },
  },
};
export default kolekson;
