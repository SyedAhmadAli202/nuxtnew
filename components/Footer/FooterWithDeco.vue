<template>
<div class="footer-deco">
  <div class="decoration">
    <svg class="left-deco">
      <use xlink:href="" />
    </svg>
    <svg class="right-deco">
      <use xlink:href="" />
    </svg>
  </div>
  <div class="action">
    <h4 class="use-text-title2">
      {{ $t('saasLanding.footer_waiting') }}
    </h4>
    <v-container >
    <v-row class="market-buttons">

    <div v-for="item in logos" :key="item" class="item">
      <v-btn class="market-coin" color="secondary" large> <a :href="item.url" target="_blank">
          <img :src="item.img" />
           <p class="use-text-paragraph">
            {{ item.text }} </p>
        </a></v-btn>
    </div>

  </v-row>
</v-container>
  </div>
  <footer-main />
</div>
</template>

<style lang="scss" scoped>
@import './footer-style.scss';
</style>

<script>
import Footer from './Footer'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    'footer-main': Footer
  },
  data() {
    return {
      mounted() {
        this.loaded = true
      },
      logos: [
        {
          url: 'https://www.coingecko.com/en/coins/ibiza-token',
          img: '/images/logos/coingecko-logo.png',
          text: 'Coingecko'
        },
        {
          url: 'https://coinmarketcap.com/currencies/ibiza-token/',
          img: '/images/logos/coinmarket-logo.png',
          text: 'CoinMarketCap'
        }
      ]
    }
  }
}
</script>
