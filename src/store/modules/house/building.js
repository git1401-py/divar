import axios from "axios";

const building = {
  namespaced: true,
  state: {
    building: [],
  },
  getters: {
    allbuilding(state) {
      return state.building;
    },
  },
  mutations: {
    setbuilding(state, building) {
      state.building = building;
    },
  },
  actions: {
    async fetchBuilding({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setbuilding", res.data);
    },
  },
};
export default building;
