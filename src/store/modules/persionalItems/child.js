import axios from "axios";

const child = {
  namespaced: true,
  state: {
    child: [],
  },
  getters: {
    allchild(state) {
      return state.child;
    },
  },
  mutations: {
    setchild(state, child) {
      state.child = child;
    },
  },
  actions: {
    async fetchChild({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setchild", res.data);
    },
  },
};
export default child;
