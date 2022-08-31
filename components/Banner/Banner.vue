<template>
  <div class="root">
    <v-dialog v-model="dialog" max-width="690">
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h2 class="title">
            {{ $t('saasLanding.banner_title') }}
            <v-btn icon @click="handleVideoClose()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h2>
        </v-card-title>
        <div class="text-center" v-if="yt.use">
          <youtube
            :video-id="videoId"
            :player-vars="playerVars"
            :width="640"
            :height="360"
            ref="youtube"
          />
        </div>
      </v-card>
    </v-dialog>
    <div class="decoration">
      <iframe
        frameborder="0"
        allowfullscreen="0"
        allow="autoplay; loop;"
        title=""
        width="2612"
        height="1469.25"
        src="https://www.youtube.com/embed/mKqg-xtk5qE?playlist=mKqg-xtk5qE&autoplay=1&loop=1&controls=0&rel=0&mute=1&origin=http%3A%2F%2Fveluxi.ux-maestro.com&enablejsapi=1&widgetid=1"
        id="widget1"
        >…</iframe
      >

    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div class="slider-wrap">
        <div class="text-center">
          <h3 class="use-text-title">
            <strong>{{ $t('saasLanding.banner_title') }} </Strong>

          </h3>
          <p class="use-text-subtitle">
            {{ $t('saasLanding.banner_subtitle') }}
          </p>

        </div>

      </div>
    </v-container>
    <div class="deco">
      <hidden point="mdDown">
        <div :class="{ hide: hide }" class="deco-inner">
          <div class="wave wave-one" />
          <div class="wave wave-two" />
        </div>
      </hidden>
      <div class="wave wave-cover" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import youtube from '~/youtube'
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import Hidden from '../Hidden'
export default {
  components: {
    Hidden
  },
  data() {
    return {
      videoId: 'mKqg-xtk5qE',
      hide: false,
      link: link,
      imgAPI: imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        loop: 1,
        autoplay: 0,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 0,
        origin: 'https://localhost:8008'
      },
      yt: youtube
    }
  },
  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false
      }
      this.dialog = true
      setTimeout(() => {
        this.player = this.$refs.youtube.player
        this.player.playVideo()
      }, 100)
    },
    handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
