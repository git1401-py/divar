import axios from "axios";

const estekhdamDetails = {
  namespaced: true,
  state: {
    estekhdamDetails: {},
  },
  getters: {
    allestekhdamDetails(state) {
      return state.estekhdamDetails;
    },
  },
  mutations: {
    setestekhdamDetails(state, estekhdamDetails) {
      state.estekhdamDetails = estekhdamDetails;
    },
  },
  actions: {
    async fetchEstekhdamDetails({ commit }) {
      const res = await axios.get("./json/estekhdam/estekhdamDetails.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setestekhdamDetails", res.data);
    },
  },
};
export default estekhdamDetails;
