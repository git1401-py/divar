import axios from "axios";

const socialDetails = {
  namespaced: true,
  state: {
    socialDetails: {},
  },
  getters: {
    allsocialDetails(state) {
      return state.socialDetails;
    },
  },
  mutations: {
    setsocialDetails(state, socialDetails) {
      state.socialDetails = socialDetails;
    },
  },
  actions: {
    async fetchSocialDetails({ commit }) {
      const res = await axios.get("./json/social/socialDetails.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setsocialDetails", res.data);
    },
  },
};
export default socialDetails;
