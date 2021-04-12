<template>
  <section id="new-post">
    <div class="section-heading container-fluid">
      <p>Blog Posts</p>
      <h2>Add New Post</h2>
    </div>
    <div class="row">
      <!-- text editor -->
      <div class="col-lg-7">
        <b-card>
          <b-form-input
            v-model="content.title"
            placeholder="Your post title"
            class="mb-3"
          ></b-form-input>
          <vue-editor v-model="content.text" />
        </b-card>
      </div>
      <!-- extra -->
      <div class="col-lg-5">
        <div class="row">
          <div class="col-md-6">
            <!-- actions -->
            <b-card header-tag="header" footer-tag="footer">
              <template #header>
                <h6 class="mb-0">Actions</h6>
              </template>
              <b-list-group flush>
                <b-list-group-item>
                  <h6><v-icon name="flag" /> Status: <span>Draft</span></h6>
                  <a href="#">Edit</a>
                </b-list-group-item>
                <b-list-group-item>
                  <h6>
                    <v-icon name="eye" /> Visibility:
                    <span style="color: var(--green)">Public</span>
                  </h6>
                  <a href="#">Edit</a>
                </b-list-group-item>
                <b-list-group-item>
                  <h6><v-icon name="calendar" /> Schedule: <span>Now</span></h6>
                  <a href="#">Edit</a>
                </b-list-group-item>
                <b-list-group-item>
                  <h6>
                    <v-icon name="glasses" /> Readability:
                    <span style="color: var(--yellow)">OK</span>
                  </h6>
                  <a href="#">Edit</a>
                </b-list-group-item>
              </b-list-group>
              <template #footer>
                <button class="btn btn-outline-primary" @click="saveContent">
                  <v-icon name="save" /> Save Draft
                </button>
                <button class="btn btn-primary">
                  <v-icon name="copy" /> Publish
                </button>
              </template>
            </b-card>
          </div>
          <div class="col-md-6">
            <!-- category -->
            <b-card header-tag="header" footer-tag="footer">
              <template #header>
                <h6 class="mb-0">Categories</h6>
              </template>
              <b-list-group flush>
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-checkbox-group
                    id="checkbox-group-2"
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-2"
                    v-for="(category, idx) in categories"
                    :key="idx"
                  >
                    <b-form-checkbox :value="category">{{
                      category
                    }}</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
              </b-list-group>
              <template #footer>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button
                      @click="addCategory"
                      class="btn btn-outline-primary"
                      type="button"
                      id="button-addon1"
                    >
                      <v-icon name="plus" />
                    </button>
                  </div>
                  <input
                    @change="addCategory"
                    v-model="newCategory"
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                </div>
              </template>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: "NewPost",
  components: {
    VueEditor,
  },
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      newCategory: null,
      selected: this.$store.getters.getSelected,
      content: {},
    };
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
  },
  methods: {
    addCategory() {
      if (this.newCategory !== null) {
        let c = this.newCategory.trim();
        c = c.replace(c[0], c[0].toUpperCase());
        this.$store.commit(`addCategory`, c);
        this.newCategory = null;
      }
    },
    saveContent() {
      let editorContent = {
        title: this.content.title.trim(),
        content: this.content.text,
      };
      this.$store.dispatch("updateContent", editorContent);
    },
  },
};
</script>

<style lang="scss">
#new-post {
  padding: var(--page-pad);
  .row {
    > * {
      &:first-child {
        .card-body {
          > * > * {
            border-color: var(--grey-color);
            &:first-child {
              border-top-left-radius: 0.25rem;
              border-top-right-radius: 0.25rem;
              > * {
                color: var(--dark-color);
                opacity: 0.9;
              }
            }
            &#quill-container {
              border-bottom-left-radius: 0.25rem;
              border-bottom-right-radius: 0.25rem;
              min-height: 60vh;
              font-family: var(--main-font);
            }
          }
        }
      }
      &:last-child {
        .list-group .list-group-item {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0.2rem 0;
        }
        .card:last-of-type {
          .list-group-item {
            flex-direction: column;
          }
        }
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          > * {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
