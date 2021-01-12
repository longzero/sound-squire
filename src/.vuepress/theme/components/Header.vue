<template>
  <header class="site-header">
    <div class="container container--fluid">
      <RouterLink
        :to="$localePath"
        class="home-link"
      >
        <span class="site-name">
          <strong>long</strong>
          <span class="site-name-switch">
            <span class="site-name-main">zero</span>
            <span class="site-name-alternate">nguyen</span>
          </span>
        </span>
        <!-- <img
          v-if="$site.themeConfig.logo"
          class="logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
        >
        <span
          v-if="$siteTitle"
          ref="siteName"
          class="site-name"
          :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span> -->
      </RouterLink>

      <div class="header-links">
        <NavLinks class="site-navigation can-hide" />
        <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
        <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
        <div class="social-networks">
          <a target="_blank" class="social-link" href="//instagram.com/longzero">
            <svg viewBox="0 0 22 22" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 5.61c-3 0-5.39 2.437-5.39 5.39 0 3 2.39 5.39 5.39 5.39 2.953 0 5.39-2.39 5.39-5.39 0-2.953-2.437-5.39-5.39-5.39zm0 8.906A3.51 3.51 0 017.484 11c0-1.922 1.547-3.469 3.516-3.469A3.46 3.46 0 0114.469 11c0 1.969-1.547 3.516-3.469 3.516zm6.844-9.094a1.26 1.26 0 00-1.266-1.266 1.26 1.26 0 00-1.265 1.266 1.26 1.26 0 001.265 1.266 1.26 1.26 0 001.266-1.266zm3.562 1.266C21.313 5 20.938 3.5 19.72 2.28 18.5 1.062 17 .687 15.312.594 13.579.5 8.375.5 6.642.594 4.953.688 3.5 1.063 2.234 2.28 1.016 3.5.641 5 .547 6.687c-.094 1.735-.094 6.938 0 8.672.094 1.688.469 3.141 1.687 4.407 1.266 1.218 2.72 1.593 4.407 1.687 1.734.094 6.937.094 8.671 0 1.688-.094 3.188-.469 4.407-1.687 1.218-1.266 1.593-2.72 1.687-4.407.094-1.734.094-6.937 0-8.671zm-2.25 10.5c-.328.937-1.078 1.64-1.968 2.015-1.407.563-4.688.422-6.188.422-1.547 0-4.828.14-6.188-.422a3.554 3.554 0 01-2.015-2.015c-.563-1.36-.422-4.641-.422-6.188 0-1.5-.14-4.781.422-6.188a3.616 3.616 0 012.015-1.968c1.36-.563 4.641-.422 6.188-.422 1.5 0 4.781-.14 6.188.422.89.328 1.593 1.078 1.968 1.969.563 1.406.422 4.687.422 6.187 0 1.547.14 4.828-.422 6.188z" fill="#231F20"/></svg>
          </a>
          <a target="_blank" class="social-link" href="//twitter.com/longzero">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"/></svg>
          </a>
          <a target="_blank" class="social-link" href="//youtube.com/longzero">
            <svg viewBox="0 0 26 18" width="26" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.234 2.86c-.28-1.126-1.172-2.016-2.25-2.297C20.97 0 13 0 13 0S4.984 0 2.969.563C1.89.843 1 1.734.719 2.858.156 4.83.156 9.047.156 9.047s0 4.172.563 6.187a3.127 3.127 0 002.25 2.25C4.984 18 13 18 13 18s7.969 0 9.984-.516a3.127 3.127 0 002.25-2.25c.563-2.015.563-6.187.563-6.187s0-4.219-.563-6.188zm-14.859 9.984V5.25l6.656 3.797-6.656 3.797z" fill="#231F20"/></svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import AlgoliaSearchBox from '@AlgoliaSearchBox'
  import SearchBox from '@SearchBox'
  // import SidebarButton from '@theme/components/SidebarButton.vue'
  import NavLinks from '@theme/components/NavLinks.vue'

  export default {
    name: 'Navbar',

    components: {
      // SidebarButton,
      NavLinks,
      SearchBox,
      AlgoliaSearchBox
    },

    data () {
      return {
        linksWrapMaxWidth: null
      }
    },

    computed: {
      algolia () {
        return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      },

      isAlgoliaSearch () {
        return this.algolia && this.algolia.apiKey && this.algolia.indexName
      }
    },

    mounted () {
      const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
      const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
      const handleLinksWrapWidth = () => {
        if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
          this.linksWrapMaxWidth = null
        } else {
          this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
            - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
        }
      }
      handleLinksWrapWidth()
      window.addEventListener('resize', handleLinksWrapWidth, false)
    }
  }

  function css (el, property) {
    // NOTE: Known bug, will return 'auto' if style value is 'auto'
    const win = el.ownerDocument.defaultView
    // null means not to return pseudo styles
    return win.getComputedStyle(el, null)[property]
  }
</script>

<style lang="stylus">
  // @require '../styles/partials/variables'
</style>
