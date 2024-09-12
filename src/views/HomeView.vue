<template>
  <v-container>
    <v-row>
      <v-card class="table-card">
        <v-col cols="12" md="12" sm="6" class="welcomeText">
          <h1>Welcome, {{ email }}</h1>
        </v-col>
        <v-col cols="12" md="12" sm="6" >
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="12" md="3" sm="6" >
              <Search />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="12" sm="6" >
          <v-card class="cardClass">
            <DataTable />
          </v-card>
        </v-col>
        <v-row>
          <v-col cols="12" md="3" sm="12">
            <v-switch v-model="useCustomPagination" label="Use Custom Pagination"></v-switch>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Search from '../components/SearchComponent.vue';
import DataTable from '../components/TableComponent.vue';
import { sharedMixin } from '../mixins/sharedMixin.js';


export default {
  components: { Search, DataTable },
  mixins: [sharedMixin],
  computed: {
    email() {
      return this.$store.getters.email;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>
<style>
.welcomeText {
  text-align: center;
}
.table-card{
  padding: 10px;
  margin: 30px 30px;
  height: 100%;
  width: 100%;
}
</style>
