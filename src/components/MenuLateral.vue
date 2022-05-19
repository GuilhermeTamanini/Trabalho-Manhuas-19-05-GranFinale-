<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
};
</script>
<template>
  <aside id="sidenav">
    <ul style="padding: 0px; margin: 4px">
      <h1 style="font-size: 20px"><RouterLink to="/">HOME</RouterLink></h1>
      <li><RouterLink to="/NanoMachine">Nano Machine</RouterLink></li>
      <li><RouterLink to="/VolcanicAge">Volcanic Age</RouterLink></li>
      <li><RouterLink to="/VolcanicReturn">Volcanic Return</RouterLink></li>
      <li>
        <RouterLink to="/TheBeginning">The Beginning After The End</RouterLink>
      </li>
      <li>
        <RouterLink to="/CroniclesHeavenly"
          >Chronicles Of The Heavenly Demon</RouterLink
        >
      </li>
      <li><RouterLink to="MemoRize">Memorize</RouterLink></li>
      <li><RouterLink to="/DungeonReset">Dungeon Reset</RouterLink></li>
      <li><RouterLink to="/GrowStrong">I Grow Strong By Eating</RouterLink></li>
      <li><RouterLink to="/OverGeared">Overgeared</RouterLink></li>
      <li><RouterLink to="SuicideHunter">SSS Suicide Hunter</RouterLink></li>
      <li><RouterLink to="/SorcererKing">The Sorcerer King</RouterLink></li>
      <li>
        <RouterLink to="/ConstellationReturned"
          >The Constellation That Returned From Hell</RouterLink
        >
      </li>
    </ul>
  </aside>
</template>
<style scoped>
aside {
  background-color: black;
  color: white;
}
li {
  border-bottom: 1px solid #ff6740;
  border-top: 1px solid #ff6740;
}
a {
  color: white;
  text-decoration: none;
}
</style>
