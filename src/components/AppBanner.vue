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
            <router-link class="btn btn-primary" :to="{ name: callToActionUrl }">{{ callToAction }}</router-link>
        </div>
    </div>

</template>

<style></style>