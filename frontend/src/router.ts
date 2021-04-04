import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Forum from "./views/Forum.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/forum", component: Forum },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
