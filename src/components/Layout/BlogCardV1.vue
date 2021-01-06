<template>
  <div id="blog-card-v1" class="card">
    <img class="card-img-top" :src="data.img" :alt="data.title" />
    <div class="card-body">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCardV1",
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
#blog-card-v1 {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  .card-img-top {
    min-height: 150px;
    width: 100%;
    object-fit: contain;
    background: var(--light-color);
  }
  .card-body {
    .badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
}
</style>
