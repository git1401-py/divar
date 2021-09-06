import { createStore } from "vuex";
import titles from "./modules/titles.js";
import items from "./modules/items.js";
import subItems from "./modules/subItems.js";
import cosoleBazi from "./modules/electrisite/cosoleBazi.js";
import mobilevaTablet from "./modules/electrisite/mobilevaTablet";
import raiane from "./modules/electrisite/raiane.js";
import soti from "./modules/electrisite/soti.js";
import tell from "./modules/electrisite/tell.js";
import details from "./modules/estekhdam/details.js";
import estekhdam from "./modules/estekhdam/estekhdam.js";
import building from "./modules/house/building.js";
import detailes from "./modules/house/detailes.js";
import devices from "./modules/house/devices.js";
import fornither from "./modules/house/fornither.js";
import tazin from "./modules/house/tazin.js";
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
import buildingProject from "./modules/melk/buildingProject.js";
import melkDetails from "./modules/melk/melkDetails.js";
import ejareMelk from "./modules/melk/ejareMelk.js";
import ejareTejari from "./modules/melk/ejareTejari.js";
import littletimeEjare from "./modules/melk/littletimeEjare.js";
import sellMelk from "./modules/melk/sellMelk.js";
import sellTejari from "./modules/melk/sellTejari.js";
import araieshi from "./modules/persionalItems/araieshi.js";
import child from "./modules/persionalItems/child.js";
import kifvaKafsh from "./modules/persionalItems/kifvaKafsh.js";
import lavazemTahrir from "./modules/persionalItems/lavazemTahrir.js";
import tazinPersion from "./modules/persionalItems/tazin.js";
import animel from "./modules/sargarmi/animel.js";
import blit from "./modules/sargarmi/blit.js";
import books from "./modules/sargarmi/books.js";
import docharkhe from "./modules/sargarmi/docharkhe.js";
import kolekson from "./modules/sargarmi/kolekson.js";
import music from "./modules/sargarmi/music.js";
import torvaChador from "./modules/sargarmi/torvaChador.js";
import toys from "./modules/sargarmi/toys.js";
import varzesh from "./modules/sargarmi/varzesh.js";
import davtalabane from "./modules/social/davtalabane.js";
import gomshodeha from "./modules/social/gomshodeha.js";
import roidad from "./modules/social/roidad.js";
import ghaiegh from "./modules/vehicles/ghaiegh.js";
import ghataateyadaki from "./modules/vehicles/ghataateyadaki.js";
import khodro from "./modules/vehicles/khodro.js";
import motorvehicle from "./modules/vehicles/motor.js";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    titles,
    items,
    subItems,
    cosoleBazi,
    mobilevaTablet,
    raiane,
    soti,
    tell,
    details,
    estekhdam,
    building,
    detailes,
    devices,
    fornither,
    tazin,
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
    buildingProject,

    melkDetails,

    ejareMelk,
    ejareTejari,
    littletimeEjare,
    sellMelk,
    sellTejari,
    araieshi,
    child,
    kifvaKafsh,
    lavazemTahrir,
    tazinPersion,
    animel,
    blit,
    books,
    docharkhe,
    kolekson,
    music,
    torvaChador,
    toys,
    varzesh,
    davtalabane,
    gomshodeha,
    roidad,
    ghaiegh,
    ghataateyadaki,
    khodro,
    motorvehicle,
  },
});
