<template lang="pug">
  .theme-container
    Header.fade-in.move-up.animation.js-animate

    .container.container--content
      .site-message
        p
          strong Whatever you are looking for could not be found.
          | &nbsp;Verify the URL, use the search bar or look below. Here is everything this website has.

    Home

    Footer.fade-in.move-up.animation.js-animate

</template>

<script>
import Home from '@theme/components/Home.vue'
import Footer from '@theme/components/Footer.vue'
import Header from '@theme/components/Header.vue'

export default {
  components: {
    Footer,
    Header,
    Home,
  }
}
</script>

<style lang="stylus">
  @require '../styles/partials/variables'
  .site-message
    background-color color-1
    color #fff
    margin-bottom 80px
    padding 20px
    text-align center
</style>
