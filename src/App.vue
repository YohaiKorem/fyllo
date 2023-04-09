<template>
  <main class="main-content main-container">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </main>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
