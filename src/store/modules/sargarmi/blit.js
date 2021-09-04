import axios from "axios";

const blit = {
  namespaced: true,
  state: {
    blit: [],
  },
  getters: {
    allblit(state) {
      return state.blit;
    },
  },
  mutations: {
    setblit(state, blit) {
      state.blit = blit;
    },
  },
  actions: {
    async fetchBlit({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setblit", res.data);
    },
  },
};
export default blit;
