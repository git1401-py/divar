import { createStore } from "vuex";
import user_orders from "./modules/user_orders.js";

import titles from "./modules/titles.js";
import items from "./modules/items.js";
import subItems from "./modules/subItems.js";

import electrikiDetails from "./modules/electrisite/electrikiDetails.js";

import estekhdamDetails from "./modules/estekhdam/estekhdamDetails.js";

import homeDetails from "./modules/house/homeDetails.js";

import kasbvakarDetails from "./modules/kasbvakar/kasbvakarDetails.js";

import melkDetails from "./modules/melk/melkDetails.js";

import persionalItemDetails from "./modules/persionalItems/persionalItemDetails.js";

import sargarmiDetails from "./modules/sargarmi/sargarmiDetails.js";

import socialDetails from "./modules/social/socialDetails.js";

import vehicleDetails from "./modules/vehicles/vehicleDetails.js";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user_orders,
    
    titles,
    items,
    subItems,

    electrikiDetails,

    estekhdamDetails,

    homeDetails,

    kasbvakarDetails,

    melkDetails,

    persionalItemDetails,

    sargarmiDetails,

    socialDetails,

    vehicleDetails,
  },
});
