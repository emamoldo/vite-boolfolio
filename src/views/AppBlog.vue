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

        callAPI(url) {
            axios
                .get(url)
                .then(response => {
                    this.projects = response.data.projects
                    console.log(this.projects);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },

    mounted() {
        let url = this.base_api_url + this.base_projects_url
        this.callAPI(url);
    }
}
</script>

<template>

    <AppBanner class="py-3" title="BoolFolio Projects" leadText="Look for our Projects" callToAction="More About Us"
        callToActionUrl="about">
    </AppBanner>

    <div class="container text-center py-5">
        <div class="row row-cols-2 row-cols-lg-6 d-flex gap-3">
            <div class="cards card py-2" v-for="project in projects.data">

                <router-link :to="{ name: 'singleProject', params: { id: project.id } }">
                    <template v-if="project.cover_image.startsWith('uploads')">
                        <img :src="base_api_url + '/storage/' + project.cover_image" class="cover_image card-img-top"
                            alt="">
                    </template>
                    <template v-else>
                        <img :src="project.cover_image" class="cover_image card-img-top" alt="">
                    </template>
                </router-link>

                <div class="card-body">
                    <h3 class="card-title">{{ project.title }}</h3>
                    <p class="card-text">{{ project.content }}</p>
                </div>
            </div>
        </div>

        <nav aria-label="Page navigation">
            <ul class="pagination py-3">
                <li class="page-item" v-show="projects.previous_page_url" @click="prevPage(projects.prev_page_url)">
                </li>
                <li class="page-item" :class="{ 'active': page == projects.current_page }"
                    v-for="page in projects.last_page" @click="goTo(page)">
                    <buttoon class="page-link">{{ page }}</buttoon>
                </li>
                <li class="page-item" v-show="projects.next_page_url" @click="nextPage(projects.next_page_url)"></li>
            </ul>
        </nav>

    </div>

</template>

<style>
.cards {
    height: 400px;
    width: 300px;
    color: black;
}

.cover_image {
    height: 225px;
    width: 225px;
}
</style>