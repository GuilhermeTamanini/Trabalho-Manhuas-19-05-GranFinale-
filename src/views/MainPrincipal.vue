<script>
import ConteudoMain from "@/components/ConteudoMain.vue";
export default {
  components: { ConteudoMain },
};
</script>
<template>
  <main id="content">
    <ConteudoMain></ConteudoMain>
  </main>
</template>
<style>
#content {
  grid-area: content;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ff6740;
}
</style>
