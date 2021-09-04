import axios from "axios";

const books = {
  namespaced: true,
  state: {
    books: [],
  },
  getters: {
    allbooks(state) {
      return state.books;
    },
  },
  mutations: {
    setbooks(state, books) {
      state.books = books;
    },
  },
  actions: {
    async fetchBooks({ commit }, path) {
      console.log("id", path);
      const res = await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setbooks", res.data);
    },
  },
};
export default books;
