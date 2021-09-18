import axios from "axios";

const electrikiDetails = {
  namespaced: true,
  state: {
    electrikiDetails: {},
  },
  getters: {
    allelectrikiDetails(state) {
      return state.electrikiDetails;
    },
  },
  mutations: {
    setelectrikiDetails(state, electrikiDetails) {
      state.electrikiDetails = electrikiDetails;
    },
  },
  actions: {
    async fetchElectrikiDetails({ commit }) {
      const res = await axios.get("./json/electrisite/electrikiDetails.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setelectrikiDetails", res.data);
    },
  },
};
export default electrikiDetails;
