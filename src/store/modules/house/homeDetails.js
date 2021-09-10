import axios from "axios";

const homeDetails = {
  namespaced: true,
  state: {
    homeDetails: {},
  },
  getters: {
    allhomeDetails(state) {
      return state.homeDetails;
    },
  },
  mutations: {
    sethomeDetails(state, homeDetails) {
      state.homeDetails = homeDetails;
    },
  },
  actions: {
    async fetchHomeDetails({ commit }) {
      const res = await axios.get("./json/house/homeDetails.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("sethomeDetails", res.data);
    },
  },
};
export default homeDetails;
