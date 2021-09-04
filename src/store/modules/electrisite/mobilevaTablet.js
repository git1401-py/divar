import axios from "axios";

const mobilevaTablet = {
  namespaced: true,
  state: {
    mobilevaTablet: [],
  },
  getters: {
    allmobilevaTablet(state) {
      return state.mobilevaTablet;
    },
  },
  mutations: {
    setmobilevaTablet(state, mobilevaTablet) {
      state.mobilevaTablet = mobilevaTablet;
    },
  },
  actions: {
    async fetchMobilevaTablet({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setmobilevaTablet", res.data);
    },
  },
};
export default mobilevaTablet;
