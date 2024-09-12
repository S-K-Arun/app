import { EventBus } from '../event-bus'; 

export const sharedMixin = {
  data() {
    return {
      search: "",
      useCustomPagination: false,
      currentPage: 1,
      itemsPerPage: 5,
      totalPages: 1, 
      paginatedPosts: [] 
    };
  },
  watch: {
    search(newSearch) {
      console.log('Search value changed to', newSearch);
      this.updateFilteredPosts();
    },
    currentPage() {
      this.updatePaginatedPosts();
    },
    itemsPerPage() {
      this.updatePaginatedPosts();
    }
  },
  computed: {
    filteredPosts() {
      return this.$store.getters.filteredPosts(this.search);
    }
  },
  methods: {
    updateFilteredPosts() {
      try {
        console.log('Filtered posts updated:', this.filteredPosts);
        this.$nextTick(() => {
          this.updatePaginatedPosts(); 
        });
        EventBus.$emit('filtered-posts-updated', this.filteredPosts);
      } catch (error) {
        console.error('An error occurred while updating filtered posts:', error);
      }
    },
    updatePaginatedPosts() {
      try {
        this.totalPages = Math.ceil(this.filteredPosts.length / this.itemsPerPage);
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = this.currentPage * this.itemsPerPage;
        this.paginatedPosts = this.filteredPosts.slice(start, end);
        console.log('Paginated posts:', this.paginatedPosts);
        // Emit an event to notify other components
        EventBus.$emit('paginated-posts-updated', this.paginatedPosts);
      } catch (error) {
        console.error('An error occurred while updating paginated posts:', error);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  },
  created() {
    this.updateFilteredPosts();
    // Listen for events from other components if needed
    EventBus.$on('search-updated', (newSearch) => {
      this.search = newSearch;
      this.updateFilteredPosts(); // Update posts when search term is updated externally
    });
  },
  beforeDestroy() {
    // Clean up event listeners when the component is destroyed
    EventBus.$off('search-updated');
    EventBus.$off('filtered-posts-updated');
    EventBus.$off('paginated-posts-updated');
  }
};
