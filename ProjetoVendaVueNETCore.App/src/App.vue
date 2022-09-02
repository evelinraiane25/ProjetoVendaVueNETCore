<template>
  <div id="app">
    <Nav></Nav>
    <div class="marginPrincipal">
     <router-view>
      
     </router-view>
    </div>
  </div>
</template>

<script>
import Produtos from "./modules/produto/views/index";
import Vendas from "./modules/venda/views/index";
import Nav from "./modules/_nav/Nav";
import Sobre from "./modules/shared/views/sobre";


/* eslint-disable */
export default {
  name: "app",
  components: {
    Vendas,
    Produtos,
    Sobre,
    Nav,
  },
};
</script>