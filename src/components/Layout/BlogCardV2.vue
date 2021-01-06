<template>
  <b-card
    id="blog-card-v2"
    :img-src="data.img"
    :img-alt="data.title"
    img-left
    class="mb-3"
  >
    <b-card-text>
      <span
        class="badge badge-pill mb-3 py-1"
        :class="badgeColor"
        v-text="data.category"
      ></span>
      <h5 class="card-title">
        <a href="#">{{ data.title }}</a>
      </h5>
      <p class="card-text">{{ data.text }}</p>
      <p class="text-muted mb-0" v-text="data.date"></p>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "BlogCardV2",
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    badgeColor() {
      if (this.data.category === "BUSINESS") {
        return "badge-warning";
      } else if (this.data.category === "TRAVEL") {
        return "badge-info";
      } else if (this.data.category === "TECHNOLOGY") {
        return "badge-primary";
      } else {
        return "badge-dark";
      }
    }
  }
};
</script>

<style lang="scss">
#blog-card-v2 {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  .card-body {
    .badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
  }
  .card-img-left {
    min-width: 200px;
    max-width: 300px;
    min-height: 100%;
    object-fit: cover;
    background-color: var(--light-color);
  }
}
@media (max-width: 768px) {
  #blog-card-v2 {
    .card-body {
      padding-top: 3rem;
    }
    .card-img-left {
      display: none;
    }
  }
}
</style>
