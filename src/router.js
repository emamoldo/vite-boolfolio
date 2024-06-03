import { createWebHistory, createRouter } from "vue-router";

import AppHome from "./views/AppHome.vue";
import AppBlog from "./views/AppBlog.vue";
import AppAbout from "./views/AppAbout.vue";
import SingleProject from "./views/SingleProject.vue";
import AppContacts from "./views/AppContacts.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/project/:id',
            name: 'singleProject',
            component: SingleProject,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
    ]
})

export default router;
