<template>
  <aside id="sidebar" class="">
    <ul class="nav">
      <h6 id="brand">
        <router-link to="/">
          <v-icon name="gem"></v-icon><span>Unique Dashboard</span>
        </router-link>
      </h6>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'BlogDashboard' }"
          exact-active-class="active"
        >
          <v-icon name="tachometer-alt"></v-icon><span>Blog Dahboard</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'BlogPosts' }"
          exact-active-class="active"
        >
          <v-icon name="th-list"></v-icon><span>Blog Posts</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'NewPost' }"
          exact-active-class="active"
        >
          <v-icon name="plus-square"></v-icon><span>Add New Post</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Components' }"
          exact-active-class="active"
        >
          <v-icon name="shapes"></v-icon><span>Forms & Components</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Tables' }"
          exact-active-class="active"
        >
          <v-icon name="table"></v-icon><span>Tables</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'UserProfile' }"
          exact-active-class="active"
        >
          <v-icon name="user"></v-icon><span>User Profile</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="'/404'" exact-active-class="active">
          <v-icon name="exclamation-triangle"></v-icon><span>Errors</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
/* eslint-disable */
export default {
  name: "Sidebar",
};
</script>

<style lang="scss">
#sidebar {
  z-index: 9999;
  font-size: 15px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  min-width: 220px;
  background-color: #fff;
  box-shadow: 5px 0 25px var(--shadow-color);
  // ul
  > * {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    // li
    > * {
      width: 100%;
      border-bottom: 1px solid var(--grey-color);
      transition: var(--transit);
      // brand
      &:first-child {
        margin-bottom: 0;
        padding: 0.5rem 0;
        a {
          font-weight: 700;
          border: 0;
          > * {
            opacity: 1 !important;
          }
          &:hover > * {
            transform: none !important;
          }
        }
      }
      // a
      > * {
        border-left: 3px solid transparent;
        transition: var(--transit);
        padding: 0.9rem 1.5rem;
        display: block;
        color: var(--dark-color);
        > * {
          display: inline-block;
          transition: var(--transit);
          // icon
          &:first-child {
            opacity: 0.25;
            margin-right: 0.7rem;
          }
        }
      }
      // a
      > *:hover,
      > *.active {
        border-left-color: var(--main-color);
        background-color: rgba(0, 123, 255, 0.02);
        > * {
          transform: translateX(10px);
          opacity: 0.95;
          color: var(--main-color);
        }
      }
    }
  }
}
#sidebar.minimized {
  min-width: 70px;
  max-width: 70px;
  > * > * {
    span {
      display: none !important;
    }
    // a
    > * > * {
      &:first-child {
        opacity: 1;
      }
    }
    > *:hover,
    > *.active {
      border-left-color: var(--main-color);
      background-color: rgba(0, 123, 255, 0.02);
      > * {
        // opacity: 1;
        color: var(--main-color);
      }
    }
  }
}

@media (max-width: 768px) {
  #sidebar.minimized {
    min-width: 0;
    max-width: 0;
    overflow: hidden;
  }
}
</style>
