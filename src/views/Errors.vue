<template>
  <section id="errors">
    <h1 class="display-1">{{ errorNum }}</h1>
    <h2 class="message">Something went wrong!</h2>
    <p>There was a problem on our end. Please try again later.</p>
    <button class="btn btn-primary mt-3" @click="goBack">
      <v-icon name="reply"></v-icon> Go Back
    </button>
  </section>
</template>

<script>
export default {
  name: "Errors",
  data() {
    return {
      errorNum: 404
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    goBack() {
      window.history.back();
    }
  }
};
</script>

<style lang="scss">
#errors {
  min-height: 100vh;
  padding: var(--page-pad);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    opacity: 0.25;
    font-weight: 700;
  }
  p {
    opacity: 0.7;
    font-weight: 700;
  }
  .btn {
    border-radius: 5rem;
  }
}
</style>
