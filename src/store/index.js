import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    categories: ["Uncategorized", "Design", "Development", "Writing", "Books"],
    selected: ["Uncategorized"],
    content: null
  },
  getters: {
    getCategories(s) {
      return s.categories;
    },
    getSelected(s) {
      return s.selected;
    },
    getContent(s) {
      return s.content;
    }
  },
  mutations: {
    addCategory(s, val) {
      if (s.selected.length === 1 && s.selected[0] === "Uncategorized") {
        s.selected = [];
      } else {
        s.selected.forEach(c => {
          if (c === "Uncategorized") {
            s.selected = [];
          }
        });
      }
      s.selected.push(val);
      s.categories.push(val);
    },
    updateSelected(s, arr) {
      s.selected = arr;
    },
    changeContent(s, c) {
      s.content = c;
    }
  },
  actions: {
    updateContent(context, c) {
      context.commit("changeContent", c);
    }
  }
});

export default store;
