import Vue from "vue";
import Router from "vue-router";
import Produtos from "../modules/produto/views/index";
import Vendas from "../modules/venda/views/index";
import Sobre from "../modules/shared/views/sobre";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/produtos",
      nome: "Produtos",
      component: Produtos,
    },
    {
      path: "/vendas",
      nome: "Vendas",
      component: Vendas,
    },
    {
      path: "/sobre",
      nome: "Sobre",
      component: Sobre,
    },
  ],
});