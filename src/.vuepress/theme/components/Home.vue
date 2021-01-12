<template lang="pug">
  .wrapper.wrapper--home.h-text-center
    .main-content
      div
        img.site-logo(src="/images/logo.png", alt="Logo")

        h1(:data-text="$page.frontmatter.line1")
          span {{ $page.frontmatter.line1 }}

        p {{ $page.frontmatter.paragraph1 }}
          strong  {{ $page.frontmatter.paragraphStrong }}
          |  {{ $page.frontmatter.paragraph2 }}

        .newsletter-box
          p {{ $page.frontmatter.newsletterLine }}

          | <!-- Begin Mailchimp Signup Form -->
          //- link(href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css")
          #mc_embed_signup
            form(action="https://soundsquire.us7.list-manage.com/subscribe/post?u=9dd2cb773526c4c3ef21289b4&amp;id=d3c71460f1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate)
              #mc_embed_signup_scroll
                label(for="mce-EMAIL") Subscribe
                input(type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required)
                | <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_9dd2cb773526c4c3ef21289b4_d3c71460f1" tabindex="-1" value=""></div>
                | <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
          | <!--End mc_embed_signup-->
    .home-footer
      a(:href="$page.frontmatter.facebookLink") <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 30L30 0l30 30-30 30L0 30zm30 27.172L57.172 30 30 2.828 2.828 30 30 57.172z" fill="#E5D7AA"/><path d="M6 30L30 6l24 24-24 24L6 30z" fill="#E5D7AA"/><path d="M33.719 31l.437-2.875h-2.781V26.25c0-.813.375-1.563 1.625-1.563h1.281V22.22S33.125 22 32.031 22c-2.281 0-3.781 1.406-3.781 3.906v2.219h-2.563V31h2.563v7h3.125v-7h2.344z" fill="#525158"/></svg>
      p {{ $page.frontmatter.footerLine }}


</template>

<script>
  // import SocialShareLink from '@theme/components/SocialShareLink.vue'
  export default {
    components: {
      // SocialShareLink
    }
  }
</script>

<style lang="stylus">
  @require '../styles/partials/variables'
  // @require '../styles/partials/home'

  h1
    padding-bottom: 30px
    position: relative
    span
      background-color: #E5D7AA;
      background-image: linear-gradient(90deg, #E5D7AA, #CDB25B);
      // background-image: conic-gradient(#E5D7AA, #CDB25B);
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
      position: relative
      z-index: 10
    &:after
      background none
      content attr(data-text)
      position absolute
      top 0
      left 50%
      z-index: 1
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transform translateX(-50%)
      white-space: nowrap

  #app
  .theme-container
    min-height: 100vh
    width 100%

  .home-footer
    font-size calc(12 / 16 * 1rem)
    padding 30px 20px
    a
      display: inline-block
      margin-bottom: 15px

  .main-content
    display: flex
    align-items: center
    justify-content: center
    flex-grow 1

  .newsletter-box
    color color-1
    margin-top: 60px

  .theme-container
    background-image url('/images/domen-kozelj-cavrem-town-close-updated.jpg')
    background-position center
    background-size cover
    display: flex
    // align-items: center
    justify-content: center

  .wrapper--home
    display: flex
    flex-direction: column
    justify-content: space-between
    margin-left: auto
    margin-right: auto
    max-width: 704px

  .h-text-center
    text-align: center

</style>
