/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";

// views components
import BlogDashboard from "../views/BlogDashboard";

Vue.use(VueRouter);

const BlogPosts = () =>
  import(/* webpackChunkName: "blog-posts" */ "../views/BlogPosts.vue");
const Components = () =>
  import(/* webpackChunkName: "components" */ "../views/Components.vue");
const NewPost = () =>
  import(/* webpackChunkName: "new-post" */ "../views/NewPost.vue");
const Tables = () =>
  import(/* webpackChunkName: "tables" */ "../views/Tables.vue");
const UserProfile = () =>
  import(/* webpackChunkName: "profile" */ "../views/UserProfile.vue");
const Errors = () =>
  import(/* webpackChunkName: "errors" */ "../views/Errors.vue");

const routes = [
  { path: "/", name: "BlogDashboard", component: BlogDashboard },
  { path: "/posts", name: "BlogPosts", component: BlogPosts },
  { path: "/components", name: "Components", component: Components },
  { path: "/new", name: "NewPost", component: NewPost },
  { path: "/tables", name: "Tables", component: Tables },
  { path: "/profile", name: "UserProfile", component: UserProfile },
  { path: "*", name: "Errors", component: Errors },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
