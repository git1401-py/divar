import axios from "axios";

const details = {
  namespaced: true,
  state: {
    details: [],
  },
  getters: {
    alldetails(state) {
      return state.details;
    },
  },
  mutations: {
    setdetails(state, details) {
      state.details = details;
    },
  },
  actions: {
    async fetchDetails({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setdetails", res.data);
    },
  },
};
export default details;
