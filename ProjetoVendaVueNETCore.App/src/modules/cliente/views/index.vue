<template>
  <div>

  </div>
</template>

<script>
import Titulo from "../../shared/views/titulo";
import { mapActions } from "vuex";

export default {
  name: "Clientes",
  components: {
    Titulo,
  },
  data() {
    return {
      titulo: "Clientes",
      clientes: [],
    };
  },

  methods: {
    /* eslint-disable */
    ...mapActions({
      listarClientes: "clientes/listarClientes",
      salvar: "clientes/salvar",
      remover: "clientes/remover",
      atualizar: "clientes/atualizar",
    }),
  },

  mounted() {
  },
};
</script>