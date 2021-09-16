import axios from "axios";

const subItems = {
  namespaced: true,
  state: {
    subItems: [],
    noSubItem: false,
  },
  getters: {
    allSubItems(state) {
      return state.subItems;
    },
    noSubItem(state) {
      return state.noSubItem;
    },
  },
  mutations: {
    setSubItems(state, subItems) {
      console.log("subItems",subItems[1]);
      if (subItems[1] ) {
        state.noSubItem = false;
      }else{
        state.noSubItem = true;
      }
      state.subItems = subItems;
    },
  },
  actions: {
    async fetchSubItems({ commit }, path) {
      await axios.get(`./json/${path}`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      }).then((res) => commit("setSubItems", res.data) )
      
    },
  },
};
export default subItems;
