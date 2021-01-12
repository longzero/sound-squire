<template lang="pug">
  //- https://www.bencarter.me/building_a_blog_with_vuepress/
  .post-list(v-if="posts.length")
    .post-item.fade-in.move-up.animation.js-animate(v-for="post in paginatedPosts" v-if="(post.frontmatter.status == 1)")
      router-link.post-link(:to="post.path")
        .post-image(v-if="(post.frontmatter.postType == 'articles')")
          picture(v-if="post.frontmatter.image")
            source(:srcset="'/images/articles/thumbnails/' + post.frontmatter.image")
            img(:src="'/images/articles/thumbnails/' + post.frontmatter.image" alt="" loading="lazy")
        .post-data
          .post-title {{post.frontmatter.title}}
            //- span.content {{post.content}}
          .post-date(v-if="post.frontmatter.updatedDate") {{ formatDate(post.frontmatter.date) }}<br>
            | Updated: {{ formatDate(post.frontmatter.updatedDate) }}
          .post-date(v-else) {{ formatDate(post.frontmatter.date) }}
    .pagination(v-if="totalPages > 1")
      a.pagination-button(v-if="canDecrement" @click="decrement" href="#")
        | <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167L16.67 24 4.5 12.004z"/></svg>
        //- | <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755L5.626 12 20 23.219l-.619.781L4 12 19.391 0 20 .755z"/></svg>
        | Previous posts
      a.pagination-button(v-if="canIncrement" @click="increment" href="#")
        | Next posts
        | <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.33 24L4.5 21.171l9.339-9.175L4.5 2.829 7.33 0 19.5 11.996z"/></svg>
        //- | <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755L18.374 12 4 23.219l.619.781L20 12 4.609 0 4 .755z"/></svg>
</template>

<script>
  export default {
    props: {
      postsPerPage: {
        type: Number,
        default: 333,
      },
      type: String
    },
    data() {
      return {
        currentPage: 1,
      }
    },
    computed: {
      posts() {
        // console.log(this.type) // Type of content requested. Most likely “articles” from Home.vue
        let currentType = this.type ? this.type : this.$page.path;
        let language = this.$lang;
        let posts = this.$site.pages
          // This filter breaks if there is a permalink
          .filter(function(post) {
            // https://softchris.github.io/pages/vue-vuepress.html#a-list-control
            // let conditions = post.path.indexOf('/articles/') >= 0

            // Build the path based on the folder requested and the current language.
            let folder = '/' + currentType + '/'
            if (language != 'en') folder = '/' + language + folder
            let conditions = post.path.startsWith(folder)

            // Check date and include only if it is from today or before.
            let postDate = new Date(post.frontmatter.date)
            let today = new Date()
            conditions = conditions && postDate.getTime() <= today.getTime()

            // Check if status is 1.
            conditions = conditions && post.frontmatter.status === 1

            return conditions
          })
          .sort((a, b) => {
            return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
          });
        return posts;
      },

      paginatedPosts() {
        return this.posts.slice(
          this.currentPage * this.postsPerPage - this.postsPerPage,
          this.currentPage * this.postsPerPage
        )
      },

      totalPages() {
        return Math.ceil(this.posts.length / this.postsPerPage)
      },

      canIncrement() {
        return this.currentPage < this.totalPages
      },

      canDecrement() {
        return this.currentPage > 1
      },
    },
    methods: {
      increment() {
        if (this.canIncrement) {
          this.currentPage++
        }
      },

      decrement() {
        if (this.canDecrement) {
          this.currentPage--
        }
      },

      formatDate(currentDate) {
        return currentDate.substring(0, 10)
      }
    }
  };
</script>

<style lang="styl">
  @require '../theme/styles/partials/variables'
  @require '../theme/styles/partials/articles'
  @require '../theme/styles/partials/pagination'
</style>
