import axios from "axios";

const devices = {
  namespaced: true,
  state: {
    devices: [],
  },
  getters: {
    alldevices(state) {
      return state.devices;
    },
  },
  mutations: {
    setdevices(state, devices) {
      state.devices = devices;
    },
  },
  actions: {
    async fetchDevices({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setdevices", res.data);
    },
  },
};
export default devices;
