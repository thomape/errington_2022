import Vue from "vue";
import VueRouter from "vue-router";
import HomeComp from "../components/HomeComp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComp,
    meta: { title: "Thomas Errington" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
