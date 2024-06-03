<script>
export default {
    name: 'AppBanner',
    props: {
        'title': String,
        'leadText': String,
        'callToAction': String,
        'callToActionUrl': String,
    }
}
</script>

<template>

    <div class="banner">
        <div class="container">
            <h2>{{ title }}</h2>
            <p>{{ leadText }}</p>
            <router-link class="btn button" :to="{ name: callToActionUrl }">{{ callToAction }}</router-link>
        </div>
    </div>

</template>

<style>
.button {
    background-color: #9FA2BD;
}
</style>