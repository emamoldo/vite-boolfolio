<script>

import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_projects_url: '/api/projects',
      projects: [],
    }
  },

  methods: {

    /*
      goTo(page) {
        const url = this.base_api_url + this.base_projects_url + `?page=${page}`
        console.log(url);
        this.callAPI(url)
      },

      prevPage(url) {
        this.callAPI(url)
        console.log(url);
      },

      nextPage(url) {
        this.callAPI(url)
        console.log(url);
      },
    */

    callAPI(url) {
      axios
        .get(url)
        .then(response => {
          this.projects = response.data.projects
          // console.log(response.data.projects);
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
  <header class="bg-dark text-white py-3">
    <div class="container py-2 d-flex justify-content-between">
      <div class="logo">
        <img src="./assets/img/Logo.png" alt="">
      </div>
      <div class="right d-flex gap-3">
        <a href="/home">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
        <a href="/contacs">Contats</a>
      </div>
    </div>
  </header>

  <main>

    <div class="container text-center py-5">
      <div class="row row-cols-2 row-cols-lg-6 d-flex gap-3">
        <div class="card py-2" v-for="project in projects">

          <template v-if="project.cover_image.startsWith('uploads')">
            <img :src="base_api_url + '/storage/' + project.cover_image" class="card-img-top" alt="">
          </template>
          <template v-else>
            <img :src="project_cover_image" class="card-img-top" alt="">
          </template>

          <div class="card-body">

            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-text">{{ project.content }}</p>

          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="py-5 bg-dark text-white">
    <section class="container d-flex justify-content-between">
      <section class="">
        <i class="fa-regular fa-copyright"></i>
        <a class="text-decoration-none" href="linkedin link here">Emanuel Moldovan</a> |
        <a class="text-decoration-none" href="https://github.com/emamoldo">Check my GitHub <i
            class="fa-brands fa-github"></i></a> |
      </section>
      <div class="d-flex gap-2">
        <a href="#">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="#">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  </footer>

</template>

<style></style>