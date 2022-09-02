<template>
  <div>
  
  </div>
</template>

<script>
import Titulo from "../../shared/views/titulo";
import { mapActions } from "vuex";

export default {
  name: "Vendas",
  components: {
    Titulo,
  },
  data() {
    return {
      titulo: "Vendas",
      vendas: [],
    };
  },
  methods: {
    /* eslint-disable */
    ...mapActions({
      listarVendas: "professores/listarVendas",
    }),
  },

  mounted() {
  },
};
</script>
