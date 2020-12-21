import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueParticles from "vue-particles";
import titleMixin from "./mixins/titleMixin";
var VueScrollTo = require("vue-scrollto");

createApp(App)
  .use(store)
  .use(router)
  .use(VueParticles)
  .use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease-in-out",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
  })
  .mixin(titleMixin)

  .mount("#app");
