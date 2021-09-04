import axios from "axios";

const toys = {
  namespaced: true,
  state: {
    toys: [],
  },
  getters: {
    alltoys(state) {
      return state.toys;
    },
  },
  mutations: {
    settoys(state, toys) {
      state.toys = toys;
    },
  },
  actions: {
    async fetchToys({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("settoys", res.data);
    },
  },
};
export default toys;
