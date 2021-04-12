import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
import "./plugins/bootstrap-vue";
import Trend from "vuetrend";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component("v-icon", Icon);
Vue.use(Trend);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
