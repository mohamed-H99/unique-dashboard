<template>
  <section id="blog-posts">
    <div class="container-fluid">
      <div class="section-heading container-fluid">
        <p>Components</p>
        <h2>Blog Posts</h2>
      </div>
      <!-- v1 -->
      <div class="row">
        <div
          class="col-lg-3 col-md-6"
          v-for="data in blogDataV1"
          :key="data.id"
        >
          <blog-card-v-1 :data="data" />
        </div>
      </div>
      <!-- v2 -->
      <div class="row">
        <div class="col-lg-6" v-for="data in blogDataV2" :key="data.id">
          <blog-card-v-2 :data="data" />
        </div>
      </div>
      <!-- v3 -->
      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          v-for="data in blogDataV3"
          :key="data.id"
        >
          <blog-card-v-3 :data="data" />
        </div>
      </div>
      <!-- v1 -->
      <div class="row">
        <div
          class="col-lg-3 col-md-6"
          v-for="data in blogDataV1"
          :key="data.id"
        >
          <blog-card-v-1 :data="data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogCardV1 from "../components/Layout/BlogCardV1";
import BlogCardV2 from "../components/Layout/BlogCardV2";
import BlogCardV3 from "../components/Layout/BlogCardV3";
export default {
  name: "BlogPosts",
  components: {
    BlogCardV1,
    BlogCardV2,
    BlogCardV3,
  },
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      blogDataV1: [
        {
          id: 0,
          // img: "http://lorempixel.com/g/200/200/city",
          category: "TRAVEL",
          avatar: "",
          title: "Off tears are day blind smile alone had ready",
          text:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019",
        },
        {
          id: 2,
          // img: "http://lorempixel.com/g/200/200/business",
          category: "BUSINESS",
          avatar: "",
          title: "It so numerous if he may outlived disposal",
          text:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019",
        },
        {
          id: 1,
          // img: "http://lorempixel.com/g/200/200/technics",
          category: "TECHNOLOGY",
          avatar: "",
          title: "Difficult in delivered extensive at direction",
          text:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019",
        },
        {
          id: 3,
          // img: "http://lorempixel.com/g/200/200/business",
          category: "BUSINESS",
          avatar: "",
          title: "Conduct at an replied removal an amongst",
          text:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019",
        },
      ],
      blogDataV2: [
        {
          id: 4,
          // img: "http://lorempixel.com/g/200/200/city",
          category: "TRAVEL",
          avatar: "",
          title:
            "Attention he extremity unwilling on otherwise cars backwards yet",
          text:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019",
        },
        {
          id: 5,
          // img: "http://lorempixel.com/g/200/200/business",
          category: "BUSINESS",
          avatar: "",
          title:
            "Totally words widow one downs few age every seven if miss part by fact",
          text:
            "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
          date: "28 February 2019",
        },
      ],
      blogDataV3: [
        {
          id: 6,
          avatar: "http://placeskull.com/32/32",
          username: "John James",
          title:
            "Totally words widow one downs few age every seven if miss part by fact",
          text:
            "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
          date: "28 February 2019",
        },
        {
          id: 7,
          avatar: "http://placeskull.com/32/32",
          username: "John Doe",
          title: "Husbands ask repeated resolved but laughter debating",
          text:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "28 February 2019",
        },
        {
          id: 8,
          avatar: "http://placeskull.com/32/32",
          username: "John Doe",
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          text:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#blog-posts {
  padding: var(--page-pad);
}
</style>
