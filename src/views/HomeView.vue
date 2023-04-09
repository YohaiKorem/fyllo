<template>
  <main class="main-view main-container full">
    <Hero />
    <FeaturesList />
    <FylloPreview />
    <ReviewList />
    <EarlyAccessModal />
  </main>
</template>

<script>
import { svgService } from '../services/svg.service'
import Hero from '../components/Hero.vue'
import FeaturesList from '../components/FeaturesList.vue'
import FylloPreview from '../components/FylloPreview.vue'
import ReviewList from '../components/ReviewList.vue'
import EarlyAccessModal from '../components/EarlyAccessModal.vue'
export default {
  components: {
    Hero,
    FeaturesList,
    FylloPreview,
    ReviewList,
    EarlyAccessModal,
  },
  name: 'HomeView',
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
}
</script>
