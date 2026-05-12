import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/home", name: "Home", component: Home }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true" ||
    sessionStorage.getItem("isLoggedIn") === "true";

  const publicRoutes = ["/login", "/register"];

  if (!isLoggedIn && !publicRoutes.includes(to.path)) {
    next("/login");
    return;
  }

  if (isLoggedIn && to.path === "/login") {
    next("/home");
    return;
  }

  next();
});

export default router;
