import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "example@example.com",  // Initial email value
    posts: [],
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    fetchPosts({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          commit("setPosts", data);
        });
    },
  },
  getters: {
    email(state) {
      return state.email;
    },
    filteredPosts: (state) => (search) => {
      console.log('Filtering with search term:', search);
      if (!search) return state.posts;
      return state.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.body.toLowerCase().includes(search.toLowerCase())
      );
    },
  },
});
