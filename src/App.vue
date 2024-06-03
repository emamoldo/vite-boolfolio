<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <AppFooter />
  </footer>
</template>

<style></style>