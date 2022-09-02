import Vue from "vue";
import Vuex from "vuex";

import vendas from "@/modules/venda/store";
import produtos from "@/modules/produto/store";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    produtos: produtos,
    vendas: vendas,
  },
  state: {
    width: 0,
    isLoading: false,
  },
  getters: {
    isLoading: (state) => state.isLoading,
    userLoggedEmail: (state) => state.account.current.userEmail,
  },
  mutations: {
    showLoading() {
      this.state.isLoading = true;
    },
    hideLoading() {
      this.state.isLoading = false;
    },
  },
});
