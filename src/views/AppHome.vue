<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue'
export default {
    name: 'AppHome',
    components: {
        AppBanner
    },
    data() {
        return {
            latestProjects: [],
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/latest',
        }
    },
    methods: {
        callApi(url) {
            axios
                .get(url).then(response => {
                    this.latestProjects = response.data.projects
                })
        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url
        this.callApi(url);
    }
}
</script>

<template class="main">
    <AppBanner class="py-5" title="Home" leadText="I'm a Junior Web Developer" callToAction="Look for my Projects"
        callToActionUrl="blog">
    </AppBanner>

    <div class="py-3">
        <div class="container">
            <div class="row">
                <div class="col" v-for="project in latestProjects">
                    <div class="card cards">
                        <router-link :to="{ name: 'singleProject', params: { id: project.id } }">
                            <template v-if="project.cover_image.startsWith('uploads')">
                                <img :src="base_api_url + '/storage/' + project.cover_image" class="card-img-top"
                                    alt="">
                            </template>
                            <template v-else>
                                <img :src="project.cover_image" class="card-img-top" alt="">
                            </template>
                        </router-link>
                        <div class="card-body">
                            <h3 class="card-title py-5">{{ project.title }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
main {
    background-color: #766C7F;
    color: white;
}

.cards {
    height: 400px;
    border: 1px solid black;
}
</style>