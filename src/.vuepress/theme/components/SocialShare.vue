<template lang="pug">
  .container.container--content.social-sharing
    strong Share this<br>
    SocialShareLink(network="facebook")
    SocialShareLink(network="linkedin")
    SocialShareLink(network="pinterest")
    SocialShareLink(network="twitter")
</template>

<script>
  import SocialShareLink from '@theme/components/SocialShareLink.vue'
  export default {
    components: {
      SocialShareLink
    }
  }
</script>

<style lang="stylus">
  @require '../styles/partials/variables'

  .social-link
    display: inline-block
    margin 0
    vertical-align: middle
    &:hover
      path
        fill #000

  .social-sharing
    border-top 1px solid #ddd
    margin-top 50px
    padding-top 10px
    text-align: center
    path
      fill color-1
      transition-duration: .3s
    .social-link
      margin 10px 10px 0
</style>
