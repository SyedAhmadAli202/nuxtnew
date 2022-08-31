<template>
  <div class="more-feature">
    <v-container :class="{ fixed: isDesktop }">
      <div class="item" id="statistic" v-if="loaded">
        <v-row>
          <v-col cols="12" v-scroll="handleScroll">
            <div class="text" :class="{ 'text-center': isMobile }">
              <title-main
              :align="isMobile ? 'center' : 'center'">
                <span>
                <strong>
              {{ $t('saasLanding.Roadmap_title') }}
              </strong>
            </span>
            </title-main>
            </div>
            <section v-if="loaded">
                <div class="viewport">
                  <figure class="figure screen">
                    <img :src="imgAPI.saas[12]" alt="screen" />
                  </figure>
                </div>
            </section>
        <!--   <v-container class="max-md">
              <ul class="progress-wrap">
                <li
                  v-for="(item, index) in coinData"
                  :key="index"
                >
                  <div class="coin">
                    <v-avatar class="logo">
                      <img :src="item.logo" :alt="item.name" />
                    </v-avatar>
                    <h5 class="headline">
                      {{ item.name }}
                    </h5>
                  </div>
                  <div class="progress">
                    <div class="unit">
                      <h6 class="title">
                        <span>USD</span>
                        &nbsp;5.000
                      </h6>
                      <h6 class="title">
                        <span>USD</span>
                        &nbsp;15.000
                      </h6>
                    </div>
                    <v-progress-linear
                      :color="item.color"
                      :value="play ? item.progress : 0"
                      class="track"
                    />
                  </div>
                </li>
              </ul>
            </v-container>  -->
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import Title from '../Title'
import Parallax from 'vue-parallaxy'
import imgAPI from '~/static/images/imgAPI'
import ParallaxMedium from '../Parallax/Medium'
import ParallaxLarge from '../Parallax/Large'

/*const coinData = [
  {
    name: 'BTC',
    logo: '/images/crypto/btc.png',
    progress: 75,
    color: '#FBA630'
  },
  {
    name: 'DASH',
    logo: '/images/crypto/dash.png',
    progress: 40,
    color: '#21D3D7'
  },
  {
    name: 'NAN',
    logo: '/images/crypto/nan.png',
    progress: 90,
    color: '#548CCC'
  },
  {
    name: 'MNR',
    logo: '/images/crypto/mnr.png',
    progress: 35,
    color: '#FF6602'
  },
  {
    name: 'IOT',
    logo: '/images/crypto/iot.png',
    progress: 80,
    color: '#CE07D4'
  }
] */

export default {
  components: {
    'title-main': Title
  },
  data: () => ({
    loaded: false,
    imgAPI: imgAPI
  }),
  mounted() {
    this.loaded = true
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
  },
  methods: {
    handleScroll: function() {
      const top = this.offsetTop - window.innerHeight + 300
      if (window.scrollY > top) {
        return (this.play = true)
      }
      return false
    }
  }
}
</script>
