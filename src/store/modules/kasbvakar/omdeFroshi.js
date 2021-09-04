import axios from "axios";

const omdeFroshi = {
  namespaced: true,
  state: {
    omdeFroshi: [],
  },
  getters: {
    allomdeFroshi(state) {
      return state.omdeFroshi;
    },
  },
  mutations: {
    setomdeFroshi(state, omdeFroshi) {
      state.omdeFroshi = omdeFroshi;
    },
  },
  actions: {
    async fetchOmdeFroshi({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setomdeFroshi", res.data);
    },
  },
};
export default omdeFroshi;
