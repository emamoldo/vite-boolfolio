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
            base_projects_url: '/api/latest'
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

<template>

    <h1>Home Page</h1>


</template>

<style></style>