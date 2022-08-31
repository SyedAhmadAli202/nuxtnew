<template>
  <div class="root">
    <v-container>
      <div class="desc">
      <title-main align="center" >
        <span>
          <strong>
          {{ $t('saasLanding.feature_title3') }}
        </strong>

        </span>
      </title-main>

          <h4 class="use-text-subtitle2" align="center">
            {{ $t('saasLanding.feature_desc3') }}
          </h4>
</div>

    </v-container>
    <div v-if="loaded" class="carousel">
      <slick :options="settings">
        <div
          v-for="item in articles"
          :key="item.slug"
        >

          <div class="item">
            <news-card
            :img="item.coverImage"
            :text="item.title"
            :type="item.brief"
            :slug="item.slug"
            />

          </div>
        </div>
      </slick>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import './news-event-style.scss';
</style>

<script>
import axios from 'axios'
import Title from '../Title'
import imgAPI from '~/static/images/imgAPI'
import NewsCard from '../Cards/News'


export default {
  components: {
    'title-main': Title,
    NewsCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      articles: [],
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
    this.fetchArticles()
  },
  methods: {
    async fetchArticles() {
      const app = this
      const query = `
      query GetUserArticles($page: Int!) {
          user(username: "ibizatoken") {
              publication {
                  posts(page: $page) {
                      title
                      brief
                      slug
                      coverImage
                  }
              }
          }
      }
  `

      const variables = { page: 0 }
      const articles = await axios.post('https://api.hashnode.com/', {
        query,
        variables
      })
      console.log('articles.data', articles.data)
      app.articles = articles.data.data.user.publication.posts
      console.log('This is all articles', app.articles)
    }
  }
}
</script>
