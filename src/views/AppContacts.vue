<script>
import AppBanner from '../components/AppBanner.vue'
export default {
    name: 'AppContacts',
    components: {
        AppBanner
    }
}
</script>



<template>

    <AppBanner class="py-5" title="Contact Us" leadText="Contact Us" callToAction="Home" callToActionUrl="home">
    </AppBanner>

    <div class="container">
        <div class="py-2">
            <label for="first-name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="first-name" placeholder="Mario Rossi">
        </div>
        <div class="mb-3">
            <label for="FormControlInput" class="form-label">Email address</label>
            <input type="email" class="form-control" id="FormControlInput" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="FormControlTextare1" class="form-label">Textarea</label>
            <textarea class="textarea form-control" id="FormControlTextarea" rows="3"
                placeholder="Your Content Here!"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send!</button>
    </div>


</template>

<style>
.textarea {
    height: 200px;
}
</style>
