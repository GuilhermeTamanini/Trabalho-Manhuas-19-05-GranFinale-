import { createRouter, createWebHistory } from "vue-router";
import MainPrincipal from "../views/MainPrincipal.vue";
import CroniclesHeavenly from "../views/ChroniclesHeavenly.vue";
import ConstellationReturned from "../views/ConstellationReturned.vue";
import DungeonReset from "../views/DungeonReset.vue";
import GrowStrong from "../views/GrowStrong.vue";
import MemoRize from "../views/MemoRize.vue";
import NanoMachine from "../views/NanoMachine.vue";
import OverGeared from "../views/OverGeared.vue";
import SorcererKing from "../views/SorcererKing.vue";
import SuicideHunter from "../views/SuicideHunter.vue";
import TheBeginning from "../views/TheBeginning.vue";
import VolcanicAge from "../views/VolcanicAge.vue";
import VolcanicReturn from "../views/VolcanicReturn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPrincipal,
    },
    {
      path: "/CroniclesHeavenly",
      name: "CroniclesHeavenly",
      component: CroniclesHeavenly,
    },
    {
      path: "/ConstellationReturned",
      name: "/ConstellationReturned",
      component: ConstellationReturned,
    },
    {
      path: "/DungeonReset",
      name: "/DungeonReset",
      component: DungeonReset,
    },
    {
      path: "/GrowStrong",
      name: "/GrowStrong",
      component: GrowStrong,
    },
    {
      path: "/MemoRize",
      name: "/MemoRize",
      component: MemoRize,
    },
    {
      path: "/NanoMachine",
      name: "/NanoMachine",
      component: NanoMachine,
    },
    {
      path: "/OverGeared",
      name: "/OverGeared",
      component: OverGeared,
    },
    {
      path: "/SorcererKing",
      name: "/SorcererKing",
      component: SorcererKing,
    },
    {
      path: "/SuicideHunter",
      name: "/SuicideHunter",
      component: SuicideHunter,
    },
    {
      path: "/TheBeginning",
      name: "/TheBeginning",
      component: TheBeginning,
    },
    {
      path: "/VolcanicAge",
      name: "/VolcanicAge",
      component: VolcanicAge,
    },
    {
      path: "/VolcanicReturn",
      name: "/VolcanicReturn",
      component: VolcanicReturn,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
