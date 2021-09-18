import axios from "axios";

const khadamatsDetails = {
  namespaced: true,
  state: {
    khadamatsDetails: {},
  },
  getters: {
    allkhadamatsDetails(state) {
      return state.khadamatsDetails;
    },
  },
  mutations: {
    setkhadamatsDetails(state, khadamatsDetails) {
      state.khadamatsDetails = khadamatsDetails;
    },
  },
  actions: {
    async fetchKhadamatsDetails({ commit }) {
      const res = await axios.get("./json/khadamats/khadamatsDetails.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setkhadamatsDetails", res.data);
    },
  },
};
export default khadamatsDetails;
