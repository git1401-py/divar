import axios from "axios";

const motor = {
  namespaced: true,
  state: {
    motor: [],
  },
  getters: {
    allmotor(state) {
      return state.motor;
    },
  },
  mutations: {
    setmotor(state, motor) {
      state.motor = motor;
    },
  },
  actions: {
    async fetchMotor({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setmotor", res.data);
    },
  },
};
export default motor;
