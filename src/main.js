import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VeeValidate from "vee-validate";

import "./styles/main.scss";

Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "linear",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors",
});

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
