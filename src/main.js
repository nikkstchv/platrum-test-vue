// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import useOrganizationStructureStore from "./store/organizationStructureStore";
import TableRow from "./components/TableRow";

Vue.config.productionTip = false;

Vue.use(Vuex);

Vue.component("table-row", TableRow);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  store: useOrganizationStructureStore,
  template: "<App/>"
});
