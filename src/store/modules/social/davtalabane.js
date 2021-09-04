import axios from "axios";

const davtalabane = {
  namespaced: true,
  state: {
    davtalabane: [],
  },
  getters: {
    alldavtalabane(state) {
      return state.davtalabane;
    },
  },
  mutations: {
    setdavtalabane(state, davtalabane) {
      state.davtalabane = davtalabane;
    },
  },
  actions: {
    async fetchDavtalabane({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setdavtalabane", res.data);
    },
  },
};
export default davtalabane;
