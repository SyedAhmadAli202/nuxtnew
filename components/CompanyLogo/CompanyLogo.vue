<template>
  <div class="root">
    <v-container>
      <div class="carousel-wrap">
        <!--<v-btn class="nav prev" @click="slickPrev">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn class="nav next" @click="slickNext">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>-->
        <div>
          <slick ref="slider" :options="slickOptions">
            <div v-for="item in logos" :key="item" class="item">
              <a :href="item.url" target="_blank">
                <img :src="item.img" />
              </a>
            </div>
          </slick>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './logo-style.scss';
@import './slick-logo-carousel.css';
</style>

<script>
export default {
  components: {
    Slick: () => import('vue-slick'),
  },
  data() {
    return {
      slickOptions: {
        dots: false,
        speed: 500,
        slidesToShow: 6,
        arrows: false,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              autoplaySpeed: 3000,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      mounted() {
        this.loaded = true
      },
      methods: {
        slickNext() {
          this.$refs.slider.next()
        },
        slickPrev() {
          this.$refs.slider.prev()
        },
      },
      logos: [
        {
          url: 'https://polygon.technology/',
          img: '/images/logos/architect.png',
        },
        { url: 'https://transak.com/', img: '/images/logos/cloud.png' },
        { url: 'https://www.yomi.digital/', img: '/images/logos/coin.png' },
        { url: 'https://mego.cx/', img: '/images/logos/mobile.png' },
        { url: 'https://beincrypto.com/', img: '/images/logos/beincrypto.png' },
        {
          url: 'https://www.conselldeivissa.es/es/el-consell',
          img: '/images/logos/consell-2.png',
        },
        {
          url: 'https://www.eivissacultural.es/',
          img: '/images/logos/eivicult.png',
        },
        {
          url: 'https://www.eivissacultural.es/',
          img: '/images/logos/sanostra.png',
        },
        { url: 'https://pimeef.com/', img: '/images/logos/PIMEF_01.png' },
        { url: 'https://lasdalias.es/', img: '/images/logos/LAS_DALIAS.png' },
        {
          url: 'https://www.atzaro.com/agroturismo-ibiza/',
          img: '/images/logos/ATZARO_01.png',
        },
        {
          url: 'https://ibizabotanicobiotecnologico.com/?fbclid=IwAR2B_JuFDtTkYXNFaTLZ-i2YgZcekyQnEVX9_Onl_RLVSiQ6baneyYvkDFY',
          img: '/images/logos/ibb.png',
        },
        {
          url: 'https://www.exclusivasmiro.es/',
          img: '/images/logos/MIRO_02.png',
        },
        {
          url: 'https://vettoniaseguridad.com/',
          img: '/images/logos/VETTONIA_LOWQ.png',
        },
        { url: 'http://emasbpaisajismo.es/', img: '/images/logos/EB_02.png' },
      ],
    }
  },
}
</script>
