import axios from "axios";

const music = {
  namespaced: true,
  state: {
    music: [],
  },
  getters: {
    allmusic(state) {
      return state.music;
    },
  },
  mutations: {
    setmusic(state, music) {
      state.music = music;
    },
  },
  actions: {
    async fetchMusic({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setmusic", res.data);
    },
  },
};
export default music;
