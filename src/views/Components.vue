<template>
  <section id="components">
    <div class="section-heading container-fluid">
      <p>Overview</p>
      <h2>Components</h2>
    </div>
    <div class="content">
      <h1 class="display-1">{{ errorNum }}</h1>
      <h2 class="message">This Page is Empty</h2>
      <p>You can edit this page as tou wish with Bootstrap Framework</p>
      <button class="btn btn-primary mt-3" @click="goBack">
        <v-icon name="reply"></v-icon> Go Back
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Components",
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      errorNum: 500,
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style lang="scss">
#components {
  padding: var(--page-pad);
  .content {
    min-height: 100vh;
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
  }
}
</style>
