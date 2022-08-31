<template>
<div class="root">
  <v-container :class="{ fixed: isDesktop }">
    <v-row class="spacing6" style="justify-content:center">
      <v-col md="7" cols="12" class="px-6">
        <div class="slider-wrap">
          <hidden point="smDown">
            <div class="decoration">
              <svg version="1.1">
                <defs>
                  <linearGradient x1="78.2441494%" y1="65.8737759%" x2="10.5892887%" y2="33.8596367%" id="linearGradient-1">
                    <stop :stop-color="$vuetify.theme.themes.light.primarydark" offset="0%" />
                    <stop :stop-color="$vuetify.theme.themes.light.primary" offset="100%" />
                  </linearGradient>
                </defs>
  <g> <rect width="850" height="400" viewBox="0 0 954 618" rx="30" ry="30"/></g>
              </svg>
            </div>
          </hidden>
          <h4
            :class="[isMobile ? 'text-center' : 'text-left']"
            class="testi-title use-text-title2">
            {{ $t('saasLanding.testi_title') }}
            <br />
            <strong>
              {{ $t('saasLanding.testi_titlestrong') }}
            </strong>
          </h4>
          <v-icon class="icon">mdi-format-quote-close</v-icon>
          <div v-if="loaded" class="carousel">
            <slick
              ref="slider"
              :options="slickOptions"
              @afterChange="handleAfterChange"
            >
              <div
                v-for="(item, index) in testiContent"
                class="item"
                :key="index"
              >
                <div class="inner">
                  <div class="profile">
                    <v-avatar class="avatar">
                      <img :src="item.avatar" :alt="item.name" />
                    </v-avatar>
                    <h6 class="name">
                      {{ item.name }}
                      <span>
                        {{ item.title }}
                      </span>
                    </h6>
                    <v-btn color="primary" large class="testi-btn" :href="item.link">
                      {{ $t('saasLanding.see_detail2') }}
                    </v-btn>
                  </div>
                  <p class="use-text-paragraph">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </slick>
          </div>
        </div>
      </v-col>
      </v-row>
      <v-row class="spacing6" style="justify-content:center;">
      <v-col md="10" cols="12" class="use-hidden-sm-down px-6">
        <hidden point="smDown">

          <div class="logo-wrap">
              <div
                v-for="(item, index) in testiContent"
                :key="index"
                class="figure-btn"
              >
                <v-btn
                  @click="gotoSlide(index)"
                  text
                  :class="{ active: currentSlide === index }"
                >
                  <img
                    :src="item.logo"
                    :alt="'logo' + index"
                    :key="index"
                  >
                </v-btn>
              </div>
          </div>
        </hidden>
      </v-col>
      </v-row>
  </v-container>
</div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'
import colors from 'vuetify/lib/util/colors'
import Title from '../Title'

const palette = {
  deepBlue: {
    primary: '#080A3E', // primary main
    primarylight: colors.indigo.lighten5, // primary light
    primarydark: colors.indigo.darken3, // primary dark
    secondary: '#001C7D', // secondary main
    secondarylight: colors.lightBlue.lighten5, // secondary light
    secondarydark: '#11309a', // secondary dark
    anchor: colors.indigo.base // link
  }
}

const theme = {
  ...palette.deepBlue
}

const testiData = [
  {
    text:
      'Ibiza Token brings to the island the first NFT platform aimed to democratize art through a decentralized system.',
    name: 'Diario de Ibiza',
    logo: '/images/logos/diario-de-ibiza-logo.png',
    link: 'https://www.diariodeibiza.es/buscador?text=ibiza+token'
  },
  {
    text:
      'In Spain, Ibiza Token announced the launch of an NFT platform with the aim of supporting content creators and businesses in Ibiza.',
    name: 'Cointelegraph',
    logo: '/images/logos/cointelegraph-logo.png'
  },
  {
    text:
      'The conference Ibiza NXT lands in Ibiza to introduce blockchain technology.',
    name: 'Periodico de Ibiza',
    //  title: 'Graphic Designer',
    logo: '/images/logos/periodico-de-ibiza-logo.png',
    link:
      'https://www.periodicodeibiza.es/search.html?what=noticias&terms=ibiza%20token&page=1'
  },
  {
    text:
      'Las Dalias presents his first NFT collection “El Viaje/The trip “which will be available on the Ibiza Token Marketplace.',
    name: 'Noudiari',
    //title: 'CEO Software House',
    logo: '/images/logos/noudiari-logo.png',
    link: 'https://www.noudiari.es/?s=ibiza+token'
  },
  {
    text:
      'As Spain is one of the countries in Europe that has made the most progress in blockchain technology, Ibiza wants to be a benchmark with Ibiza Token" whose objective is above all to make the local art of the island visible.',
    name: 'Dirigentes Digital',
    //  title: 'Senior Graphic Designer',
    logo: '/images/logos/dirigentes-logo.png',
    link:
      'https://dirigentesdigital.com/tecnologia/nft-solamente-una-moda-de-gente-con-demasiado-dinero'
  },
  {
    text:
      'Ibiza Token presents itselfas a space where artists directly connect with buyers through NFTs.',
    name: 'Cadena Ser',
    //  title: 'Senior Graphic Designer',
    logo: '/images/logos/ser.png',
    link: 'https://cadenaser.com/audio/1636634889_242783/'
  }
]

export default {
  components: {
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent: testiData,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        pauseOnHover: false
      }
    }
  },
  mounted() {
    this.loaded = true
    this.$vuetify.theme.themes = {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    }
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
