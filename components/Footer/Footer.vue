<template>
  <footer class="footer" :class="{ invert: invert }">
    <v-container class="max-lg">
      <v-row class="spacing4">
        <v-col class="pa-4" md="3" cols="12">
          <div class="logo">
            <img :src="logo" alt="logo" />
            <h6 class="title">
              {{ brand.saas.projectName }}
            </h6>
          </div>
          <p class="body-2 text-center" v-if="isDesktop">
            &copy;&nbsp;
            {{ brand.saas.footerText }}
          </p>
        </v-col>
        <v-col class="px-6 py-0" md="6" cols="12">
          <v-expansion-panels
            v-if="isMobile"
            :dark="!invert"
            class="accordion-root"
          >
            <v-expansion-panel
              v-for="(footer, index) in footers"
              :key="index"
              class="accordion-content"
            >
              <v-expansion-panel-header>
                <strong class="mb-4">
                  {{ footer.title }}
                </strong>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li v-for="(item, index) in footer.description" :key="index">
                    <nuxt-link :to="footer.link[index]">
                      {{ item }}
                    </nuxt-link>
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row justify="space-around" v-if="isDesktop">
            <v-col
              v-for="(footer, index) in footers"
              :key="index"
              sm="3"
              cols="12"
              class="px-4 site-map-item"
            >
              <h6 class="title-nav">
                {{ footer.title }}
              </h6>
              <ul>
                <li v-for="(item, index) in footer.description" :key="index">
                  <!-- <nuxt-link :to="footer.link[index]">
                    {{ item }}
                  </nuxt-link>-->
                  <a :href="footer.link[index]" target="_blank"> {{ item }}</a>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="3" cols="12" class="pa-4">
          <div class="socmed">
            <v-btn text icon class="button" @click="openFacebook()">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn text icon class="button" @click="openTwitter()">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn text icon class="button" @click="openInstagram()">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn text icon class="button" @click="openLinkedin()">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>

            <v-btn text icon class="button" @click="openDiscord()">
              <v-icon>mdi-discord</v-icon>
            </v-btn>
            <v-btn text icon class="button" @click="openGithub()">
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn text icon class="button" @click="openTelegram()">
              <svg
                enable-background="new 0 0 24 24"
                height="21"
                viewBox="0 0 24 24"
                width="21"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"
                />
              </svg>
            </v-btn>
            <v-btn text icon class="button" @click="openMedium()">
              <svg
                enable-background="new 0 0 24 24"
                height="21"
                viewBox="0 0 24 24"
                width="21"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z"
                />
              </svg>
            </v-btn>
          </div>
          <!--    <v-select
            :items="langList"
            :value="lang"
            v-model="lang"
            label=""
            outlined
            class="select-lang"
            prepend-inner-icon="mdi-web"
            @change="switchLang(lang)"
          /> -->
        </v-col>
      </v-row>
      <p class="body-2 text-center" v-if="isMobile">
        &copy;&nbsp;
        {{ brand.saas.footerText }}
      </p>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/ibz-logo-big.png'
import brand from '~/static/text/brand'
import link from '~/static/text/link'

export default {
  data: () => ({
    logo: logo,
    brand: brand,
    link: link,
    lang: 'en',
    footers: [
      {
        title: 'Resources',
        description: [
          'Whitepaper es',
          'Whitepaper eng',
          'Chainsulting audit',
          'Solidproof audit',
        ],
        link: [
          '/images/saas/whitepaper_es.pdf',
          '/images/saas/whitepaper_eng.pdf',
          '/images/saas/chainsulting_audit.pdf',
          '/images/saas/solidproof_audit.pdf',
        ],
      },
      {
        title: 'Legal',
        description: ['privacy and terms'],
        link: [link.saas.privacy],
      },
    ],
  }),
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    langList: function () {
      const list = []
      this.$i18n.locales.map((item) => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    },
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  methods: {
    switchLang: function (val) {
      this.$i18n.setLocale(val)
    },

    openTelegram: function () {
      window.open('https://t.me/ibztoken', '_blank')
    },
    openMedium: function () {
      window.open('https://medium.com/@ibizatoken', '_blank')
    },
    openGithub: function () {
      window.open('https://github.com/ibizatoken', '_blank')
    },
    openDiscord: function () {
      window.open('https://www.telegram.com', '_blank')
    },
    openLinkedin: function () {
      window.open('https://www.linkedin.com/company/ibizatoken/', '_blank')
    },
    openInstagram: function () {
      window.open('https://www.instagram.com/ibizatoken/', '_blank')
    },
    openTwitter: function () {
      window.open('https://twitter.com/IbizaToken', '_blank')
    },
    openFacebook: function () {
      window.open('https://www.facebook.com/ibizatoken/', '_blank')
    },
  },
}
</script>
