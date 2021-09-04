import axios from "axios";

const soti = {
  namespaced: true,
  state: {
    soti: [],
  },
  getters: {
    allsoti(state) {
      return state.soti;
    },
  },
  mutations: {
    setsoti(state, soti) {
      state.soti = soti;
    },
  },
  actions: {
    async fetchSoti({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setsoti", res.data);
    },
  },
};
export default soti;
