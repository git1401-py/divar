import axios from "axios";

const mobile = {
  namespaced: true,
  state: {
    mobile: [],
  },
  getters: {
    allmobile(state) {
      return state.mobile;
    },
  },
  mutations: {
    setmobile(state, mobile) {
      state.mobile = mobile;
    },
  },
  actions: {
    async fetchMobile({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setmobile", res.data);
    },
  },
};
export default mobile;
