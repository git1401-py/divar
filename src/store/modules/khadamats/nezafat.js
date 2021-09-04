import axios from "axios";

const nezafat = {
  namespaced: true,
  state: {
    nezafat: [],
  },
  getters: {
    allnezafat(state) {
      return state.nezafat;
    },
  },
  mutations: {
    setnezafat(state, nezafat) {
      state.nezafat = nezafat;
    },
  },
  actions: {
    async fetchNezafat({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setnezafat", res.data);
    },
  },
};
export default nezafat;
