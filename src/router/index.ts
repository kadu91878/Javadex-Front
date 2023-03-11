import { createRouter, createWebHistory } from "vue-router";
import JavadexViewVue from "../views/JavadexView.vue";
import JavadexView2Vue from "../views/JavadexView2.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: JavadexViewVue,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/javadex",
      name: "javadex",
      component: () => import("../views/JavadexView.vue"),
    },
    {
      path: "/javadex2",
      name: "javadex2",
      component: JavadexView2Vue,
    },
  ],
});

export default router;
