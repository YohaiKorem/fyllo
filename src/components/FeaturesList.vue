<template>
  <ul class="features-list clean-list flex">
    <li class="feature-container anywhere">
      <div class="icon-container anywhere" v-html="getSvg('anywhere')"></div>
      <h3 class="feature-heading">Acces your files, anywhere</h3>
      <p>
        The ability to use a smartphone.tablet, or computer to access your
        account means your files follow you everywhere.
      </p>
    </li>
    <li class="feature-container security">
      <div class="icon-container security" v-html="getSvg('security')"></div>
      <h3 class="feature-heading">Security you can trust</h3>
      <p>
        2-factor authentication and user-controlled encryption are just a couple
        of the security features we allow to help secure your files.
      </p>
    </li>
    <li class="feature-container collab">
      <div class="icon-container collab" v-html="getSvg('collab')"></div>
      <h3 class="feature-heading">Real-time collaboration</h3>
      <p>
        securely share files and folders with friends, family and colleagues for
        live collaboration, No email attachments required.
      </p>
    </li>

    <li class="feature-container any-file">
      <div class="icon-container any-file" v-html="getSvg('anyFile')"></div>
      <h3 class="feature-heading">Store any type of file</h3>
      <p>
        Whether you're sharing holidays, photos or work documents, Fyllo has you
        ocovered allowing for all file types to be securely stored and shared.
      </p>
    </li>
  </ul>
</template>
<script>
import { svgService } from '../services/svg.service'
export default {
  name: 'FeaturesList',
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
}
</script>
