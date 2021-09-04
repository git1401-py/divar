import axios from "axios";

const amozeshi = {
  namespaced: true,
  state: {
    amozeshi: [],
  },
  getters: {
    allamozeshi(state) {
      return state.amozeshi;
    },
  },
  mutations: {
    setamozeshi(state, amozeshi) {
      state.amozeshi = amozeshi;
    },
  },
  actions: {
    async fetchAmozeshi({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setamozeshi", res.data);
    },
  },
};
export default amozeshi;
