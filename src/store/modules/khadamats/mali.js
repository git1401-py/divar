import axios from "axios";

const mali = {
  namespaced: true,
  state: {
    mali: [],
  },
  getters: {
    allmali(state) {
      return state.mali;
    },
  },
  mutations: {
    setmali(state, mali) {
      state.mali = mali;
    },
  },
  actions: {
    async fetchMali({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setmali", res.data);
    },
  },
};
export default mali;
