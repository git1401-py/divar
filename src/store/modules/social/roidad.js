import axios from "axios";

const roidad = {
  namespaced: true,
  state: {
    roidad: [],
  },
  getters: {
    allroidad(state) {
      return state.roidad;
    },
  },
  mutations: {
    setroidad(state, roidad) {
      state.roidad = roidad;
    },
  },
  actions: {
    async fetchRoidad({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setroidad", res.data);
    },
  },
};
export default roidad;
