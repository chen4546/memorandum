import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      redirect: "/index",
      children: [
        {
          path: "index",
          component: () => import("@/views/index/index.vue"),
        },
      ],
    },
    /*{
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },*/
  ],
});

export default router;
