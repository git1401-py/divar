import axios from "axios";

const sargarmiDetails = {
  namespaced: true,
  state: {
    sargarmiDetails: {},
  },
  getters: {
    allsargarmiDetails(state) {
      return state.sargarmiDetails;
    },
  },
  mutations: {
    setsargarmiDetails(state, sargarmiDetails) {
      state.sargarmiDetails = sargarmiDetails;
    },
  },
  actions: {
    async fetchSargarmiDetails({ commit }) {
      const res = await axios.get("./json/sargarmi/sargarmiDetails.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setsargarmiDetails", res.data);
    },
  },
};
export default sargarmiDetails;
