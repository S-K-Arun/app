<template>
    <v-col cols="12" md="12" sm="12">
      <v-data-table
        v-if="!useCustomPagination"
        :headers="headers"
        :items="filteredPosts" 
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item="{ item, index }">
          <tr :style="{ backgroundColor: index % 2 === 0 ? '' : 'red' }">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </template>
      </v-data-table>
  
      <v-simple-table v-else class="elevation-1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in paginatedPosts"
            :key="item.id"
            :style="{ backgroundColor: index % 2 === 0 ? '' : 'red' }"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </tbody>
      </v-simple-table>
  
      <v-row v-if="useCustomPagination" class="pagination-controls">
        <v-col cols="12" md="4" sm="12">
          <v-btn @click="prevPage" :disabled="currentPage === 1">Previous</v-btn>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-btn @click="nextPage" :disabled="currentPage === totalPages">Next</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </template>
  
  <script>
  import { sharedMixin } from '../mixins/sharedMixin'; // Ensure you use the correct mixin
  import { EventBus } from '../event-bus';
  
  export default {
    mixins: [sharedMixin],
    data() {
      return {
        headers: [
          { text: 'ID', value: 'id', sortable: true },
          { text: 'Title', value: 'title', sortable: true },
          { text: 'Body', value: 'body', sortable: true }
        ]
      };
    },
    created() {
      EventBus.$on('filtered-posts-updated', (filteredPosts) => {
        console.log("filteredPosts", filteredPosts)
        this.updatePaginatedPosts(); 
      });
      EventBus.$on('paginated-posts-updated', (paginatedPosts) => {
        this.paginatedPosts = paginatedPosts;
      });
    },
    beforeDestroy() {
      EventBus.$off('filtered-posts-updated');
      EventBus.$off('paginated-posts-updated');
    }
  };
  </script>
  