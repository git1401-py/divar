import axios from "axios";

const user_orders = {
  namespaced: true,
  state: {
    user_orders: [],
  },
  getters: {
    alluser_orders(state) {
      return state.user_orders;
    },
  },
  mutations: {
    setuser_orders(state) {
      state.user_orders = "";
    },
  },
  actions: {
    async saveUser_orders({ commit }, item) {
      console.log("Hear ...",item);
    //   let data = JSON.stringify(item);
      await axios.post("http://localhost:3000/orders", item)
        .then(() => {
          console.log("SAVED ...");
        })
        .catch((error) => console.log("Error...", error.response.data));
      /* 
      
      .post("http://localhost:3000/orders", {group_name:"aa"})
      
      axios.post('/api/employee' , this.form)
    .then(() => {
        this.$router.push({ name:'employee' })
        Notification.success()
    })
    .catch(error => (this.errors = error.response.data.errors))
    */
   /*
   let data = JSON.stringify({
  username: this.state.username,
  password: password
});

const response = axios.post(url,data,{headers:{"Content-Type" : "application/json"}});

*/
      commit("setuser_orders");
    },
  },
};
export default user_orders;
