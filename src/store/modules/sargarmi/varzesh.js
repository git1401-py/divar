import axios from "axios";

const varzesh = {
  namespaced: true,
  state: {
    varzesh: [],
  },
  getters: {
    allvarzesh(state) {
      return state.varzesh;
    },
  },
  mutations: {
    setvarzesh(state, varzesh) {
      state.varzesh = varzesh;
    },
  },
  actions: {
    async fetchVarzesh({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setvarzesh", res.data);
    },
  },
};
export default varzesh;
