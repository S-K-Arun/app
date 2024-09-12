<template>
    <v-col cols="12" md="12" sm="12">
      <v-text-field
        v-model="search"
        label="Search"
        solo
        @input="filterPosts"
        placeholder="Enter Search Text Here"
      ></v-text-field>
    </v-col>
  </template>
  
  <script>
  import { sharedMixin } from '../mixins/sharedMixin.js';
  import { EventBus } from '../event-bus.js';
  
  export default {
    mixins: [sharedMixin],
    methods: {
      filterPosts() {
        this.updateFilteredPosts();
        EventBus.$emit('search-updated', this.search);
      }
    }
  };
  </script>
  