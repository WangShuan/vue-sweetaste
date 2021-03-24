import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "products/:category",
        name: "Products",
        component: () => import("../views/Products.vue"),
      },
      {
        path: "cart",
        name: "Cart",
        component: () => import("../views/Cart.vue"),
      },
      {
        path: "checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("../views/Login.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  {
    path: "*",
    component: () => import("../views/404.vue"),
    alias: "/404",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
