import axios from "axios";

const persionalItemDetails = {
  namespaced: true,
  state: {
    persionalItemDetails: {},
  },
  getters: {
    allpersionalItemDetails(state) {
      return state.persionalItemDetails;
    },
  },
  mutations: {
    setpersionalItemDetails(state, persionalItemDetails) {
      state.persionalItemDetails = persionalItemDetails;
    },
  },
  actions: {
    async fetchPersionalItemDetails({ commit }) {
      const res = await axios.get("./json/persionalItems/persionalItemDetails.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setpersionalItemDetails", res.data);
    },
  },
};
export default persionalItemDetails;
