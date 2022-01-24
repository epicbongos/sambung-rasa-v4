import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LandingPage from "@/views/dev/LandingPage.vue";
import LandingPage2 from "@/views/dev/LandingPage2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/LandingPage1",
    name: "LandingPage1",
    component: LandingPage,
  },
  {
    path: "/LandingPage2",
    name: "LandingPage2",
    component: LandingPage2,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
