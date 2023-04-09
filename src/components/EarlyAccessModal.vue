<template>
  <article class="early-access-modal">
    <h3>Get early access today</h3>
    <p>
      it only take a minute to sign up and our free starter tier is extremely
      generous. if you have any questions, our support team would be happy to
      help you.
    </p>
    <form @submit.prevent="emailSubmitted">
      <input type="text" placeholder="email@example.com" />
      <button class="btn btn-blue">Get started for free</button>
    </form>
  </article>
</template>
<script>
export default {
  methods: {
    emailSubmitted() {
      console.log('hi')
    },
  },
}
</script>
