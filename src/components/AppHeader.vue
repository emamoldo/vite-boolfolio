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

    <header class="bg-dark text-white py-3">
        <div class="container py-2 d-flex justify-content-between">
            <div class="logo">
                <img src="../assets/img/Logo.png" alt="">
            </div>
            <div class="right d-flex gap-3">
                <router-link :to="{ name: item.route }" v-for="item in menu">{{ item.text }}</router-link>
            </div>
        </div>
    </header>

</template>

<style></style>