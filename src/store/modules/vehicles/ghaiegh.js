import axios from "axios";

const ghaiegh = {
  namespaced: true,
  state: {
    ghaiegh: [],
  },
  getters: {
    allghaiegh(state) {
      return state.ghaiegh;
    },
  },
  mutations: {
    setghaiegh(state, ghaiegh) {
      state.ghaiegh = ghaiegh;
    },
  },
  actions: {
    async fetchGhaiegh({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setghaiegh", res.data);
    },
  },
};
export default ghaiegh;
