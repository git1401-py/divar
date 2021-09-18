import axios from "axios";

const user_orders = {
  namespaced: true,
  state: {
    user_orders: [],
    user_ordersDATA: [],
  },
  getters: {
    alluser_orders(state) {
      return state.user_orders;
    },
    alluser_ordersDATA(state) {
      return state.user_ordersDATA;
    },
  },
  mutations: {
    setuser_orders(state) {
      state.user_orders = "";
    },
    getuser_orders(state,item) {
      state.user_ordersDATA = item;
    },
  },
  actions: {
    async saveUser_orders({ commit }, item) {
      console.log("Hear ...", item);
      await axios
        .post("http://localhost:3000/orders", item)
        .then(() => {
          console.log("SAVED ...");
        })
        .catch((error) => console.log("Error...", error.response.data));
      commit("setuser_orders");
    },
    async fetchUser_orders({ commit }) {
      console.log("HearGet ...");
      await axios
        .get("http://localhost:3000/orders")
        .then((res) => {
          console.log("SAVED ...");
          commit("getuser_orders", res.data);
        })
        .catch((error) => console.log("Error...", error.response.data));
    },
  },
};
export default user_orders;
