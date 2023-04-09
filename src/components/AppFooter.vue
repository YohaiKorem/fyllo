<template>
  <footer class="main-footer full">
    <div class="logo">
      <span v-html="getSvg('logo')"> </span>
    </div>
    <div class="fylo-details-container">
      <div class="location-container">
        <span v-html="getSvg('location')"></span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          quaerat voluptatem fugiat saepe molestiae laborum officiis nostrum
        </p>
      </div>
      <ul class="clean-list fylo-contact-list">
        <li class="phone-number">
          <div class="icon phone-icon" v-html="getSvg('phone')"></div>
          <span>+1-543-123-4567</span>
        </li>
        <li class="gmail">
          <span class="icon mail-icon" v-html="getSvg('email')"></span>
          <span>example@fylo.com</span>
        </li>
      </ul>
      <ul class="about-list clean-list">
        <li>About Us</li>
        <li>jobs</li>
        <li>Press</li>
        <li>Blog</li>
      </ul>
      <ul class="clean-list contact">
        <li>Contact Us</li>
        <li>Terms</li>
        <li>Privacy</li>
      </ul>
      <ul class="clean-list social-links">
        <li class="social-link-container">
          <i class="fa-brands fa-facebook-f"></i>
        </li>
        <li class="social-link-container">
          <i class="fa-brands fa-twitter"></i>
        </li>
        <li class="social-link-container">
          <i class="fa-brands fa-instagram"></i>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { svgService } from '../services/svg.service'
export default {
  name: 'AppFooter',
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
}
</script>
