import { createStore } from "vuex";
import titles from "./modules/titles.js";
import items from "./modules/items.js";
import subItems from "./modules/subItems.js";

import electrikiDetails from "./modules/electrisite/electrikiDetails.js";

import mobilevaTablet from "./modules/electrisite/mobilevaTablet";
import raiane from "./modules/electrisite/raiane.js";
import soti from "./modules/electrisite/soti.js";
import tell from "./modules/electrisite/tell.js";


import estekhdamDetails from "./modules/estekhdam/estekhdamDetails.js";

import details from "./modules/estekhdam/details.js";
import estekhdam from "./modules/estekhdam/estekhdam.js";


import homeDetails from "./modules/house/homeDetails.js";

import building from "./modules/house/building.js";
import detailes from "./modules/house/detailes.js";
import devices from "./modules/house/devices.js";
import fornither from "./modules/house/fornither.js";
import tazin from "./modules/house/tazin.js";


import kasbvakarDetails from "./modules/kasbvakar/kasbvakarDetails.js";

import omdeFroshi from "./modules/kasbvakar/omdeFroshi.js";
import tajhizat from "./modules/kasbvakar/tajhizat.js";


import amozeshi from "./modules/khadamats/amozeshi.js";
import araiesh from "./modules/khadamats/araiesh.js";
import baghbani from "./modules/khadamats/baghbani.js";
import hamlvaNaghl from "./modules/khadamats/hamlvaNaghl.js";
import mali from "./modules/khadamats/mali.js";
import mobile from "./modules/khadamats/mobile.js";
import motor from "./modules/khadamats/motor.js";
import nezafat from "./modules/khadamats/nezafat.js";
import pazirai from "./modules/khadamats/pazirai.js";
import pishevaMaharat from "./modules/khadamats/pishevaMaharat.js";
import sargarmi from "./modules/khadamats/sargarmi.js";
import tellKhadamat from "./modules/khadamats/tell.js";

import melkDetails from "./modules/melk/melkDetails.js";


import persionalItemDetails from "./modules/persionalItems/persionalItemDetails.js";

import araieshi from "./modules/persionalItems/araieshi.js";
import child from "./modules/persionalItems/child.js";
import kifvaKafsh from "./modules/persionalItems/kifvaKafsh.js";
import lavazemTahrir from "./modules/persionalItems/lavazemTahrir.js";
import tazinPersion from "./modules/persionalItems/tazin.js";

import sargarmiDetails from "./modules/sargarmi/sargarmiDetails.js";

import animel from "./modules/sargarmi/animel.js";
import blit from "./modules/sargarmi/blit.js";
import books from "./modules/sargarmi/books.js";
import docharkhe from "./modules/sargarmi/docharkhe.js";
import kolekson from "./modules/sargarmi/kolekson.js";
import music from "./modules/sargarmi/music.js";
import torvaChador from "./modules/sargarmi/torvaChador.js";
import toys from "./modules/sargarmi/toys.js";
import varzesh from "./modules/sargarmi/varzesh.js";

import socialDetails from "./modules/social/socialDetails.js";

import davtalabane from "./modules/social/davtalabane.js";
import gomshodeha from "./modules/social/gomshodeha.js";
import roidad from "./modules/social/roidad.js";


import vehicleDetails from "./modules/vehicles/vehicleDetails.js";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    titles,
    items,
    subItems,

    electrikiDetails,

    mobilevaTablet,
    raiane,
    soti,
    tell,

    estekhdamDetails,
    details,
    estekhdam,

    homeDetails,
    building,
    detailes,
    devices,
    fornither,
    tazin,

    kasbvakarDetails,
    omdeFroshi,
    tajhizat,

    amozeshi,
    araiesh,
    baghbani,
    hamlvaNaghl,
    mali,
    mobile,
    motor,
    nezafat,
    pazirai,
    pishevaMaharat,
    sargarmi,
    tellKhadamat,

    melkDetails,

    persionalItemDetails,
    araieshi,
    child,
    kifvaKafsh,
    lavazemTahrir,
    tazinPersion,

    sargarmiDetails,
    animel,
    blit,
    books,
    docharkhe,
    kolekson,
    music,
    torvaChador,
    toys,
    varzesh,

    socialDetails,
    davtalabane,
    gomshodeha,
    roidad,

    vehicleDetails,
  },
});
