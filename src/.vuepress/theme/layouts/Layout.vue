<template lang="pug">
  //- .theme-container(:class="pageClasses")
  .theme-container
    //- Header

    Home(v-if="$page.frontmatter.home")

    //- .layout(v-else)
      header.container.container--content.post-header(v-if="$page.frontmatter.type == 'post'")
        h1 {{ $frontmatter.title }}
        .post-date(v-if="$frontmatter.updatedDate") {{ formatDate($frontmatter.date) }}<br>
          | Updated: {{ formatDate($frontmatter.updatedDate) }}
        .post-date(v-else) {{ formatDate($frontmatter.date) }}
        .post-media(v-if="$frontmatter.image")
          img(:src="'/images/articles/' + $frontmatter.image" alt="$frontmatter.imageAlt" loading="lazy")

      Content.container.container--content.rte(v-if="$page.frontmatter.type == 'post'")
      Content.container(v-else)

    //- window.location.href is not working
    //- SocialShare(v-if="$page.frontmatter.type == 'post'")

    //- Footer
</template>

<script>
import Home from '@theme/components/Home.vue'
// import Footer from '@theme/components/Footer.vue'
// import Header from '@theme/components/Header.vue'
// import Page from '@theme/components/Page.vue'
// import Sidebar from '@theme/components/Sidebar.vue'
// import SocialShare from '@theme/components/SocialShare.vue'
// import { resolveSidebarItems } from '../util'

export default {
  name: 'Layout',
  components: {
    Home,
    // Page,
    // Sidebar,
    // Footer,
    // Header,
    // SocialShare
  },
  data () {
    return {}
  },
  // computed: {
  //   pageClasses () {
  //     const userPageClass = this.$page.frontmatter.pageClass
  //     return [
  //       {
  //         'no-navbar': !this.shouldShowNavbar,
  //         'sidebar-open': this.isSidebarOpen,
  //         'no-sidebar': !this.shouldShowSidebar
  //       },
  //       userPageClass
  //     ]
  //   }
  // },
  // methods: {
  //   formatDate(currentDate) {
  //     return currentDate.substring(0, 10)
  //   },
  // },
  mounted () {
    // ADD TARGET BLANK TO EXTERNAL LINKS
    // https://gist.github.com/allybee/5871749
    // remove subdomain of current site's url and setup regex
    var internal = location.host.replace("www.", "");
    internal = new RegExp(internal, "i");
    var a = document.getElementsByTagName('a'); // then, grab every link on the page
    for (var i = 0; i < a.length; i++) {
      var href = a[i].host; // set the host of each link
      if( !internal.test(href) ) { // make sure the href doesn't contain current site's host
        a[i].setAttribute('target', '_blank'); // if it doesn't, set attributes
        a[i].setAttribute('rel', 'noopener noreferrer');
      }
    }
    // Alternative way
    // document.querySelectorAll('a').forEach(link => {
    //   if (link.hostname !== location.hostname) {
    //     link.setAttribute('target', '_blank');
    //     link.setAttribute('rel', 'noopener noreferrer');
    //   }
    // })
  }
}
</script>

<style lang="stylus">
</style>
