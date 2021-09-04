import axios from "axios";

const littletimeEjare = {
  namespaced: true,
  state: {
    littletimeEjare: [],
  },
  getters: {
    alllittletimeEjare(state) {
      return state.littletimeEjare;
    },
  },
  mutations: {
    setlittletimeEjare(state, littletimeEjare) {
      state.littletimeEjare = littletimeEjare;
    },
  },
  actions: {
    async fetchLittletimeEjare({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setlittletimeEjare", res.data);
    },
  },
};
export default littletimeEjare;
