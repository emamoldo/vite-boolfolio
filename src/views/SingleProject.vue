<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue'
export default {
    name: 'SingleProject',
    components: {
        AppBanner
    },
    data() {
        return {
            project: '',
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
        }
    },
    mounted() {
        const url = this.base_api_url + this.base_projects_url + `/${this.$route.params.id}`
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.response
                    console.log(this.project);
                }
            }).catch(err => {

            })
    }
}

</script>

<template>
    <AppBanner class="py-5" title="Home" leadText="I'm a Junior Web Developer" callToAction="Look for my Projects"
        callToActionUrl="blog">
    </AppBanner>

    <div class="container py-5">

        <router-link :to="{ name: 'singleProject', params: { id: project.id } }">
            <template v-if="project.cover_image">
                <img :src="base_api_url + '/storage/' + project.cover_image" class="card-img-top" alt="">
            </template>
            <template v-else>
                <img :src="project.cover_image" class="card-img-top" alt="">
            </template>
        </router-link>

        <div class="card-body">
            <div class="card-title">
                {{ project.title }}
            </div>
            <div class="card-text">
                {{ project.content }}
            </div>
        </div>
    </div>

</template>