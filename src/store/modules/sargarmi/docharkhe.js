import axios from "axios";

const docharkhe = {
  namespaced: true,
  state: {
    docharkhe: [],
  },
  getters: {
    alldocharkhe(state) {
      return state.docharkhe;
    },
  },
  mutations: {
    setdocharkhe(state, docharkhe) {
      state.docharkhe = docharkhe;
    },
  },
  actions: {
    async fetchDocharkhe({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setdocharkhe", res.data);
    },
  },
};
export default docharkhe;
