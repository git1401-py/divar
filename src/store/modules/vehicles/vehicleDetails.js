import axios from "axios";

const vehicleDetails = {
  namespaced: true,
  state: {
    vehicleDetails: {},
  },
  getters: {
    allvehicleDetails(state) {
      return state.vehicleDetails;
    },
  },
  mutations: {
    setvehicleDetails(state, vehicleDetails) {
      state.vehicleDetails = vehicleDetails;
    },
  },
  actions: {
    async fetchVehicleDetails({ commit }) {
      const res = await axios.get("./json/vehicles/vehicleDetails.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setvehicleDetails", res.data);
    },
  },
};
export default vehicleDetails;
