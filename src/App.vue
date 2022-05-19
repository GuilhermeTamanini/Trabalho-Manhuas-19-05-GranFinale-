<script>
import { RouterView } from "vue-router";
import MenuLateral from "@/components/MenuLateral.vue";
import HeaderCabecalho from "@/components/HeaderCabecalho.vue";
import FooterBaixo from "@/components/FooterBaixo.vue";
// import MainPrincipal from "@/components/MainPrincipal.vue";
export default {
  components: { MenuLateral, HeaderCabecalho, FooterBaixo, RouterView },
};
</script>
<template>
  <MenuLateral />
  <HeaderCabecalho />
  <FooterBaixo />
  <RouterView />
</template>
<style></style>
