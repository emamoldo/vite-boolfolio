<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue'
export default {
    name: 'AppBlog',
    components: {
        AppBanner
    },
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

    <AppBanner title="BoolFolio Blog" leadText="Read our blogs" callToAction="More About Us" callToActionUrl="about">
    </AppBanner>

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

</template>

<style></style>