<template>
  <div class="container-fluid p-0 bg-wight">
    <top-header />
    
    <router-view />
    <footer-section />
  </div>
</template>
<script>
import TopHeader from "./components/header/TopHeader.vue";
import FooterSection from "./components/footer/FooterSection.vue";

export default {
  components: { TopHeader, FooterSection },
  setup() {},
};
</script>

<style>
@font-face {
  font-family: pixelboy-BHoma;
  src: url("../public/fonts/pixelboy-BHoma.eot");
  src: url("../public/fonts/pixelboy-BHoma.eot?#iefix")
      format("pixelboy-BHoma-opentype"),
    url("../public/fonts/pixelboy-BHoma.woff") format("woff"),
    url("../public/fonts/pixelboy-BHoma.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: pixelboy-BHoma, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
}
.bg-wight {
  background: #fff;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app a {
  text-decoration: none;
  color: gray;
}
#app a:hover {
  color: #000;
}
</style>
