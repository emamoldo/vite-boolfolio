<script>

import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_projects_url: '/api/projects',
      projects: [],
      loading: true
    }
  },

  methods: {

    callAPI(url) {
      axios
        .get(url)
        .then(response => {
          this.projects = response.data.projects
          // console.log(response.data.projects);
          this.loading = false
        })
        .catch(err => {
          console.error(err);
        })
    }
  },

  mounted() {
    let url = this.base_api_url + this.base_projects_url
    this.callAPI(url);
    console.log();
  }
}
</script>

<template>
  <header>
    Header Here
  </header>

  <main>
    Main Here
  </main>

  <footer class="py-5 bg-dark text-white">
    Footer Here
  </footer>
</template>

<style></style>