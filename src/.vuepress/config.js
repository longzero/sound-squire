// const { description } = require('../../package')

// https://gist.github.com/MartinMuzatko/cc86b3f168630c05978d65c36169b129
let ogprefix = 'og: http://ogp.me/ns#'
let title = 'Sound Squire'
let description = 'Sound Squire is a brand new immersive tool for broadcasting music and sound effects during your tabletop plays. Spice up your adventures and campaigns. Both for players and GMs.'
let color = '#336699'
let author = 'Longzero'


module.exports = {
  base: '',
  domain: 'https://longzero.com',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: title,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#336699' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
    ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://soundsquire.com' }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://soundsquire.com/images/og.jpg' }],
    ['meta', { prefix: ogprefix, property: 'og:article:author', content: author }],
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    // ['link', { rel: 'preload', crossorigin: 'anonymous', as: 'font', href: '/fonts/oxygen-v10-latin-regular.woff2' }],
    // ['link', { rel: 'preload', crossorigin: 'anonymous', as: 'font', href: '/fonts/oxygen-v10-latin-700.woff2' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-5GQK95YTD3' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5GQK95YTD3');
    `],
    // ['script', {}, `
    //   // Facebook Pixel Code
    //   !function(f,b,e,v,n,t,s)
    //   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    //   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    //   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    //   n.queue=[];t=b.createElement(e);t.async=!0;
    //   t.src=v;s=b.getElementsByTagName(e)[0];
    //   s.parentNode.insertBefore(t,s)}(window, document,'script',
    //   'https://connect.facebook.net/en_US/fbevents.js');
    //   fbq('init', '373089603434494');
    //   fbq('track', 'PageView');
    // `],
  ],


  // locales: {
  //   // The key is the path for the locale to be nested under.
  //   // As a special case, the default locale can use '/' as its path.
  //   '/': {
  //     lang: 'en', // this will be set as the lang attribute on <html>
  //     title: title,
  //     description: description,
  //     // nav: [
  //     //   {
  //     //     text: 'Nav EN',
  //     //     link: '/'
  //     //   }
  //     // ]
  //   },
  //   '/fr/': {
  //     lang: 'fr',
  //     title: title,
  //     description: 'Mon nom est Long Nguyen. Je suis un développeur web front-end avec une obsession pour le UX. Je crée des sites web simple, clean et user-friendly pour des clients partout dans le monde. Rejoignez moi sur Instagram ou Twitter ou par email long@longzero.com.',
  //   }
  // },



  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },



  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    docsDir: '',
    domain: 'https://longzero.com',
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    // locales: {
    //   '/': {
    //     label: 'English',
    //     selectText: 'Languages',
    //     nav: [
    //       {text: 'Home', link: '/'},
    //       {text: 'Articles', link: '/articles/'},
    //     ],
    //     sidebar: {
    //       '/articles/': [
    //         {
    //           title: 'Articles',
    //           collapsable: false,
    //           children: ['Well-being']
    //         }
    //       ],
    //     }
    //   },
    //   '/fr/': {
    //     label: 'Français',
    //     selectText: 'Langues',
    //     nav: [
    //       {text: 'Home', link: '/fr/'},
    //       {text: 'Articles', link: '/fr/articles/'},
    //     ],
    //     sidebar: {
    //       '/fr/articles/': [
    //         {
    //           title: 'Articles',
    //           collapsable: false,
    //           children: ['Well-being']
    //         }
    //       ],
    //     }
    //   },
    // },
    repo: '',
    // nav: [
    //   {
    //     text: 'Articles',
    //     link: '/'
    //   }
    // ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'fulltext-search',
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary_large_image',
      type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      // image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
      image: ($page, $site) => $site.themeConfig.domain + '/images/' + ($page.frontmatter.postType || '') + '/' + ($page.frontmatter.image || 'og.jpg'),
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
    }]
  ]
}
