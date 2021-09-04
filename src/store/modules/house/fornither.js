import axios from "axios";

const fornither = {
  namespaced: true,
  state: {
    fornither: [],
  },
  getters: {
    allfornither(state) {
      return state.fornither;
    },
  },
  mutations: {
    setfornither(state, fornither) {
      state.fornither = fornither;
    },
  },
  actions: {
    async fetchFornither({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setfornither", res.data);
    },
  },
};
export default fornither;
