/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
// views components
import BlogDashboard from "../views/BlogDashboard";
import BlogPosts from "../views/BlogPosts";
import Components from "../views/Components";
import NewPost from "../views/NewPost";
import Tables from "../views/Tables";
import UserProfile from "../views/UserProfile";
import Errors from "../views/Errors";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "BlogDashboard", component: BlogDashboard },
  { path: "/posts", name: "BlogPosts", component: BlogPosts },
  { path: "/components", name: "Components", component: Components },
  { path: "/new", name: "NewPost", component: NewPost },
  { path: "/tables", name: "Tables", component: Tables },
  { path: "/profile", name: "UserProfile", component: UserProfile },
  { path: "*", name: "Errors", component: Errors }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
