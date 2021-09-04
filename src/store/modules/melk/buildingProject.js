import axios from "axios";

const buildingProject = {
  namespaced: true,
  state: {
    buildingProject: [],
  },
  getters: {
    allbuildingProject(state) {
      return state.buildingProject;
    },
  },
  mutations: {
    setbuildingProject(state, buildingProject) {
      state.buildingProject = buildingProject;
    },
  },
  actions: {
    async fetchBuildingProject({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setbuildingProject", res.data);
    },
  },
};
export default buildingProject;
