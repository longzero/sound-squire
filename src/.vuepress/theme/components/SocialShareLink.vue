<template lang="pug">
  a.social-link(target="_blank" :href="getShareUrl(network)")
    svg(v-if="network=='facebook'" viewBox="0 0 13 24" width="13" height="24" fill="none" xmlns="http://www.w3.org/2000/svg")
      path(d="M12.078 13.5l.656-4.313H8.563V6.376c0-1.219.562-2.344 2.437-2.344h1.922V.328S11.187 0 9.547 0C6.125 0 3.875 2.11 3.875 5.86v3.327H.031V13.5h3.844V24h4.688V13.5h3.515z" fill="#231F20")
    svg(v-else-if="network=='linkedin'" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg")
      path(d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z")
    svg(v-else-if="network=='pinterest'" viewBox="0 0 19 24" width="19" height="24" fill="none" xmlns="http://www.w3.org/2000/svg")
      path(d="M10.063.328C5.234.328.5 3.516.5 8.718c0 3.282 1.828 5.157 2.953 5.157.469 0 .75-1.266.75-1.64 0-.422-1.125-1.36-1.125-3.188 0-3.75 2.86-6.422 6.563-6.422 3.234 0 5.578 1.828 5.578 5.156 0 2.485-.985 7.125-4.219 7.125-1.172 0-2.203-.844-2.203-2.015 0-1.782 1.265-3.516 1.265-5.344 0-3.094-4.406-2.531-4.406 1.219 0 .796.094 1.64.469 2.39-.656 2.766-1.969 6.938-1.969 9.797 0 .89.094 1.735.188 2.625.14.188.093.188.328.094 2.344-3.235 2.297-3.89 3.328-8.11.61 1.079 2.063 1.688 3.281 1.688 4.969 0 7.219-4.875 7.219-9.234 0-4.641-4.031-7.688-8.438-7.688z" fill="#231F20")
    svg(v-else-if="network=='twitter'" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg")
      path(d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z")
</template>

<script>
  export default {
    props: ["network"],
    computed: {
      currentUrl() {
        return this.$themeConfig.domain + this.$page.path
      }
    },
    methods: {
      // currentPage() {
      //   let currentPage = this.network ? this.network : this.$page.path;
      //   return currentPage;
      // },
      getShareUrl(network) {
        if (network === 'facebook')
          return 'https://www.facebook.com/sharer/sharer.php?u=' + this.currentUrl
        else if (network === 'linkedin')
          return 'https://www.linkedin.com/shareArticle?mini=true&url=' + this.currentUrl + '&title=&summary=&source='
        else if (network === 'pinterest')
          return 'https://pinterest.com/pin/create/button/?url=' + this.currentUrl + '&media=&description='
        else if (network === 'twitter')
          return 'https://twitter.com/intent/tweet?url=' + this.currentUrl + '&text='
      }
    }
  };
</script>
