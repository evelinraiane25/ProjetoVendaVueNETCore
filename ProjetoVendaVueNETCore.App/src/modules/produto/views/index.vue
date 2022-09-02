<template>
  <div>

  </div>
</template>

<script>
import Titulo from "../../shared/views/titulo";
import { mapActions } from "vuex";

export default {
  name: "Produtos",
  components: {
    Titulo,
  },
  data() {
    return {
      titulo: "Produtos",
      produtos: [],
    };
  },

  methods: {
    /* eslint-disable */
    ...mapActions({
      listarProdutos: "produtos/listarProdutos",
      salvar: "produtos/salvar",
      remover: "produtos/remover",
      atualizar: "produtos/atualizar",
    }),
  },

  mounted() {
  },
};
</script>