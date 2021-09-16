import axios from "axios";

const kasbvakarDetails = {
  namespaced: true,
  state: {
    kasbvakarDetails: {},
  },
  getters: {
    allkasbvakarDetails(state) {
      return state.kasbvakarDetails;
    },
  },
  mutations: {
    setkasbvakarDetails(state, kasbvakarDetails) {
      state.kasbvakarDetails = kasbvakarDetails;
    },
  },
  actions: {
    async fetchKasbvakarDetails({ commit }) {
      const res = await axios.get("./json/kasbvakar/kasbvakarDetails.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setkasbvakarDetails", res.data);
    },
  },
};
export default kasbvakarDetails;
