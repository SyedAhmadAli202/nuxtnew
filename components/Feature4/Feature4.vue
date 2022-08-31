<template>
  <div class="root">
    <div class="decoration">
      <svg class="wave">
        <use xlink:href="/images/saas/deco-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <v-row>
          <v-col md="6" cols="12">
            <u-animate-container>
              <u-animate
                :offset="10"
                name="fadeInRightShort"
                delay="0.5s"
                duration="0.5s"
              >
                <div class="desc">
                  <title-main :align="isMobile ? 'center' : 'right'">
                    <span>
                      {{ $t('saasLanding.feature_title1') }}
                      <strong>
                        {{ $t('saasLanding.feature_titlestrong7') }}
                      </strong>
                    </span>
                  </title-main>
                  <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-right']">
                    {{ $t('saasLanding.feature_desc7') }}
                  </h6>
                  <div :class="[isMobile ? 'text-center' : 'text-right']">
                    <v-btn color="primary" large class="btn" href="https://nxt.ibizatoken.com/">
                      {{ $t('saasLanding.see_detail2') }}
                    </v-btn>
                  </div>
                </div>
              </u-animate>
            </u-animate-container>
          </v-col>
          <v-col md="6" cols="12">
            <div class="illustration-right">
              <section class="parallax-wrap" v-if="loaded">
                <parallax
                  :speed-factor="isMobile ? 0 : 0.15"
                  :section-height="isMobile ? 0 : 200"
                  direction="up"
                >
                  <div class="viewport">
                    <figure class="figure screen">
                      <img :src="imgAPI.saas[10]" alt="illustration" />
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
                    <figure class="graphic">
                    </figure>
                  </div>
                </parallax>
              </section>
              <parallax-medium />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style-4.scss';
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
      loaded: false
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
