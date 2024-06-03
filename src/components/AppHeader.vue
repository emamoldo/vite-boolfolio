<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menu: [
                {
                    'text': 'Home',
                    'route': 'home'
                },
                {
                    'text': 'About',
                    'route': 'about'
                },
                {
                    'text': 'Blog',
                    'route': 'blog'
                },
                {
                    'text': 'Contacts',
                    'route': 'contacts'
                },
            ]
        }
    }
}
</script>


<template>

    <header class="header py-3">
        <div class="container py-2 d-flex justify-content-between align-items-center">
            <div class="logo">
                <img class="logo" src="../assets/img/logo1.png" alt="">
            </div>
            <div class="right d-flex gap-3">
                <router-link :to="{ name: item.route }" v-for="item in menu">{{ item.text }}</router-link>
            </div>
        </div>
    </header>

</template>

<style>
.header {
    background-color: #947EB0;

    .logo {
        width: 125px;
        height: 100px;
    }
}
</style>