<template>
  <header class="app-header full">
    <div class="logo" @click="$router.push('/')">
      <span v-html="getSvg('logo')"> </span>
    </div>
    <AppNav />
  </header>
</template>

<script>
import AppNav from './AppNav.vue'
import { svgService } from '../services/svg.service'
export default {
  name: 'AppHeader',
  components: {
    AppNav,
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
}
</script>

<style></style>
