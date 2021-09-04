import axios from "axios";

const tell = {
  namespaced: true,
  state: {
    tell: [],
  },
  getters: {
    alltell(state) {
      return state.tell;
    },
  },
  mutations: {
    settell(state, tell) {
      state.tell = tell;
    },
  },
  actions: {
    async fetchTell({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("settell", res.data);
    },
  },
};
export default tell;
