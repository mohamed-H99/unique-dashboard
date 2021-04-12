<template>
  <div id="app">
    <!-- sidebar -->
    <sidebar />
    <!-- topnav -->
    <top-nav />
    <!-- view -->
    <router-view />
    <!-- footer -->
    <bottom-footer />
  </div>
</template>

<script>
/* eslint-disable */
import Sidebar from "./components/Layout/Sidebar";
import TopNav from "./components/Layout/TopNav";
import BottomFooter from "./components/Layout/BottomFooter";
export default {
  name: "App",
  components: {
    Sidebar,
    TopNav,
    BottomFooter,
  },
  data() {
    return {};
  },
  mounted() {
    const sidebar = document.getElementById("sidebar");
    const topnav = document.getElementById("top-nav");
    const content = document.querySelector("#app");
    if (window.innerWidth <= 768) {
      sidebar.classList.add("minimized");
      topnav.classList.add("expanded");
      content.classList.add("expanded");
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap");
:root {
  --main-font: "Cairo", "Roboto", sans-serif;
  --transit: 0.3s;
  --grey-color: #e1e5eb;
  --light-color: #f4f5f7;
  --main-color: #007bff;
  --dark-color: #3d5170;
  --page-pad: 1.5rem;
  --shadow-color: rgba(0, 123, 255, 0.05);
}
#app {
  font-family: var(--main-font);
  background-color: var(--light-color);
  color: var(--dark-color);
  min-height: 100vh;
  padding: 90px 0 0 220px;
  &.expanded {
    padding-left: 70px;
  }
  .pointer {
    cursor: pointer;
  }
  .pill {
    border-radius: 99rem;
  }
  .section-heading {
    margin-bottom: 2rem;
    p {
      text-transform: uppercase;
      font-size: 0.8rem;
      opacity: 0.8;
      letter-spacing: 1px;
      margin-bottom: 0;
    }
  }
  .card {
    border: 0;
    margin-bottom: 2rem;
    box-shadow: 0 0 15px 5px var(--shadow-color);
    &-header,
    &-footer {
      background-color: transparent;
      padding-top: 1rem;
      padding-bottom: 1rem;
      > * {
        font-weight: 700;
      }
    }
  }
}
</style>
