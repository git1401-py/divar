import axios from "axios";

const melkDetails = {
  namespaced: true,
  state: {
    melkDetails: {},
  },
  getters: {
    allmelkDetails(state) {
      return state.melkDetails;
    },
  },
  mutations: {
    setmelkDetails(state, melkDetails) {
      state.melkDetails = melkDetails;
    },
  },
  actions: {
    async fetchMelkDetails({ commit }) {
      const res = await axios.get("./json/melk/sellMelkD.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setmelkDetails", res.data);
    },
  },
};
export default melkDetails;
