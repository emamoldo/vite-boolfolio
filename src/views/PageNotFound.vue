<script></script>

<template>
    <div class="container py-5">
        <div class="d-flex justify-content-center flex-column">
            <h1>Sorry!! This page doesn't exist!!</h1>

            <router-link class="btn button" :to="{ name: 'home' }">
                Back To home
            </router-link>
        </div>
    </div>

</template>

<style>
.button {
    width: 250px;
}
</style>