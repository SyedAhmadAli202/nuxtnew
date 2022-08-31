<template>
  <div class="root">
    <div class="decoration">
      <svg class="wave">
        <use xlink:href="/images/saas/deco-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <u-animate-container>
          <v-row :class="[isMobile ? 'column' : 'row']">
            <v-col cols="12" md="6">
              <div class="illustration-left">
                <section class="parallax-wrap" v-if="loaded">
                  <parallax
                    :speed-factor="isMobile ? 0 : 0.15"
                    :section-height="isMobile ? 0 : 120"
                    direction="up"
                  >
                    <div class="viewport">
                      <figure class="figure screen">
                        <img :src="imgAPI.saas[8]" alt="screen" />
                      </figure>
                    </div>
                  </parallax>
                </section>
                <section
                  class="parallax-wrap"
                  v-if="loaded && !isMobile"
                >
                  <parallax
                    :speed-factor="isMobile ? 0 : 0.15"
                    :section-height="100"
                    direction="down"
                  >
                    <div class="viewport">
                      <figure class="figure graphic">
                    <!--    <img :src="imgAPI.saas[1]" alt="illustration" /> -->
                      </figure>
                    </div>
                  </parallax>
                </section>
                <parallax-medium />
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.5s"
                duration="0.5s"
              >
                <div class="desc">
                  <title-main :align="isMobile ? 'center' : 'left'">
                    <span>
                      <strong>
                        {{ $t('saasLanding.feature_titlestrong6') }}
                      </strong>
                    </span>
                  </title-main>
                  <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-left']">
                    {{ $t('saasLanding.feature_desc6') }}
                  </h6>
<v-row>
                  <div v-for="item in logos" key="item" class="patch">
                     <a :href="item.url" target="_blank">
                        <img :src="item.img" />
                      </a>
                  </div>
</v-row>
                </div>
              </u-animate>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './benefit-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'
import imgAPI from '~/static/images/imgAPI'
import ParallaxMedium from '../Parallax/Medium'
import ParallaxLarge from '../Parallax/Large'
import Title from '../Title'

export default {
  components: {
    Parallax,
    ParallaxMedium,
    ParallaxLarge,
    'title-main': Title
  },
  data() {
    return {
      tab: null,
      imgAPI: imgAPI,
      loaded: false,

    logos: [{
        'url': 'https://apps.apple.com/us/app/ibizapay/id1588697473',
        'img': '/images/logos/apple.png',

      },
      {
        'url': 'https://play.google.com/store/apps/details?id=com.ibizatoken.wallet',
        'img': '/images/logos/google.png',

      },
    ]
    }
  },
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
  }

}
</script>
