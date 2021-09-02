import axios from "axios";

const titles = {
  namespaced: true,
  state: {
    titles: [],
  },
  getters: {
    allTitles(state) {
      return state.titles;
    },
  },
  mutations: {
    setTitles(state, titles) {
      state.titles = titles;
    },
  },
  actions: {
    async fetchTitles({ commit }, id) {
      console.log("id", id);
      const res = await axios.get("./json/advertise.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setTitles", res.data);
    },
  },
};
export default titles;
