import axios from "axios";

const lavazemTahrir = {
  namespaced: true,
  state: {
    lavazemTahrir: [],
  },
  getters: {
    alllavazemTahrir(state) {
      return state.lavazemTahrir;
    },
  },
  mutations: {
    setlavazemTahrir(state, lavazemTahrir) {
      state.lavazemTahrir = lavazemTahrir;
    },
  },
  actions: {
    async fetchLavazemTahrir({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setlavazemTahrir", res.data);
    },
  },
};
export default lavazemTahrir;
