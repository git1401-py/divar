import axios from "axios";

const kifvaKafsh = {
  namespaced: true,
  state: {
    kifvaKafsh: [],
  },
  getters: {
    allkifvaKafsh(state) {
      return state.kifvaKafsh;
    },
  },
  mutations: {
    setkifvaKafsh(state, kifvaKafsh) {
      state.kifvaKafsh = kifvaKafsh;
    },
  },
  actions: {
    async fetchKifvaKafsh({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setkifvaKafsh", res.data);
    },
  },
};
export default kifvaKafsh;
