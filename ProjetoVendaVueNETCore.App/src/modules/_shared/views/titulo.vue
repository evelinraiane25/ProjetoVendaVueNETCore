<template>
    <div>
     
    </div>
</template>

<script>
export default {
  props: {
    texto: String,
    btnVoltar: Boolean
  },

  methods: {
    voltar(){
      this.$router.back();
    }
  },
};
</script>
