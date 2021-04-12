<template>
  <b-nav id="top-nav">
    <!-- search item -->
    <b-nav-item id="search-item">
      <v-icon name="search" />
      <input
        type="text"
        id="search-input"
        placeholder="Search here.."
        v-model="searchInput"
      />
    </b-nav-item>
    <div>
      <!-- notification item -->
      <b-nav-item id="notifi-item">
        <b-dropdown left>
          <template #button-content>
            <v-icon name="bell" scale="1.3" />
            <span class="notifi-count" v-text="notifiCount"></span>
          </template>
          <b-dropdown-item href="#">
            <v-icon name="flag" />
            <div class="notifi-content">
              <h6 class="notifi-header">ANALYTICS</h6>
              <p class="notifi-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                corporis molestias.
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <v-icon name="flag" />
            <div class="notifi-content">
              <h6 class="notifi-header">SALES</h6>
              <p class="notifi-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                corporis molestias.
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <h6 class="text-center mt-2 w-100">View all Notifications</h6>
          </b-dropdown-item>
        </b-dropdown>
      </b-nav-item>
      <!-- user item -->
      <b-nav-item id="user-item">
        <b-dropdown right>
          <template #button-content>
            <img src="http://placeskull.com/32/32" alt="user" />
            <h6>{{ username }}</h6>
          </template>
          <b-dropdown-item href="#">
            <v-icon name="user" />
            <span>{{ username }}</span>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <v-icon name="cog" />
            <span>Edit Profile</span>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <v-icon name="folder" />
            <span>Files</span>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <v-icon name="list-ul" />
            <span>Transactions</span>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <v-icon name="sign-out-alt" />
            <span>Logout</span>
          </b-dropdown-item>
        </b-dropdown>
      </b-nav-item>
      <!-- nav toggler -->
      <b-nav-item id="nav-toggler">
        <v-icon
          name="align-right"
          @click="toggleSidebar"
          class="pointer"
          scale="1.3"
        />
      </b-nav-item>
    </div>
  </b-nav>
</template>

<script>
/* eslint-disable */
export default {
  name: "TopNav",
  data() {
    return {
      searchInput: null,
      notifiCount: 2,
      username: "John Doe",
    };
  },
  mounted() {
    let notifiText = document.querySelectorAll(".notifi-content .notifi-text");
    notifiText.forEach((text) => {
      text.textContent = text.textContent.slice(0, 35) + "...";
    });
  },
  methods: {
    toggleSidebar() {
      if (window.innerWidth <= 768) {
        document.getElementById("sidebar").classList.toggle("minimized");
        document.getElementById("app").classList.add("expanded");
        document.getElementById("top-nav").classList.add("expanded");
      } else {
        document.getElementById("sidebar").classList.toggle("minimized");
        document.getElementById("app").classList.toggle("expanded");
        document.getElementById("top-nav").classList.toggle("expanded");
      }
    },
  },
};
</script>

<style lang="scss">
#top-nav {
  z-index: 6666;
  position: fixed;
  top: 0;
  right: 0;
  left: 220px;
  background-color: #fff;
  box-shadow: 0 5px 25px var(--shadow-color);
  justify-content: space-between;
  align-items: center;
  > *:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
  .nav-item {
    a {
      color: var(--dark-color);
      cursor: auto;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    height: 100%;
    &#search-item {
      a {
        svg {
          pointer-events: none;
          opacity: 0.25;
        }
        input {
          border: 0;
          outline: none;
          width: 100%;
          padding: 1rem;
          color: var(--dark-color);
        }
      }
    }
    &#notifi-item {
      .btn {
        background-color: transparent;
        border: 0;
        outline: none !important;
        color: #ccc;
        position: relative;
        .notifi-count {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          line-height: 0.75rem;
          font-size: 0.7rem;
          padding: 0.2rem;
          border-radius: 99rem;
          background-color: var(--red);
          position: absolute;
          right: 0.5rem;
          bottom: 0.5rem;
          color: var(--white);
        }
      }
      .dropdown-menu {
        max-width: 350px;
        overflow-x: hidden;
        a {
          cursor: pointer;
        }
        > * > * {
          border-bottom: 1px solid var(--light-color);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1rem;
          &:active {
            background-color: var(--light);
          }
          svg {
            opacity: 0.8;
          }
        }
        .notifi-content {
          .notifi-header {
            font-size: 0.6rem;
            font-weight: 700;
            letter-spacing: 1px;
            color: var(--gray);
            margin-bottom: 0;
            margin-top: 0.5rem;
          }
          .notifi-text {
            color: var(--dark);
            margin-bottom: 0.5rem;
          }
        }
      }
    }
    &#user-item {
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: 0;
        outline: none !important;
        color: var(--dark-color);
        gap: 0.5rem;
        > * {
          font-weight: 700 !important;
        }
        &:after {
          margin: 0;
          transform: translateY(-3px);
        }
        img {
          border-radius: 99rem;
          opacity: 0.2;
          width: 32px;
          height: 32px;
          background-color: var(--light);
        }
      }
      .dropdown-menu {
        > * {
          > * {
            &:active {
              background-color: var(--light);
            }
          }
          &:last-child {
            > * {
              color: var(--red);
              > * {
                &:first-child {
                  opacity: 0.8 !important;
                }
              }
            }
          }
        }
        .dropdown-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          cursor: pointer;
          gap: 0.5rem;
          > * {
            &:first-child {
              opacity: 0.25;
            }
          }
        }
      }
    }
  }
}
#top-nav.expanded {
  left: 70px;
}
@media (max-width: 768px) {
  #top-nav {
    &.expanded {
      left: 0;
    }
    > *:last-child {
      justify-content: flex-end;
    }
  }
}
</style>
