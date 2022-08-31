<template>
  <div>
    <section id="home" />
    <div class="main-wrap">
      <!-- <main-header />-->

      <div class="container-wrap">
        <section class="space-top space-bottom">
          <v-container>
            <v-btn
              style="color: #fff; background: #000"
              href="/"
              text
              icon
              class="backtohome"
            >
              <v-icon class="icon signArrow"> mdi-arrow-left </v-icon></v-btn
            >
            <title-main :align="isMobile ? 'center' : 'center'">
              <span>
                <strong>
                  {{ $t('common.privacy_title') }}
                </strong>
              </span>
            </title-main>

            <h4 class="display-1 text-center">
              <strong> {{ $t('common.privacy_subtitle') }} </strong>
            </h4>
            <p class="display-1 text-center">
              {{ $t('common.privacy_content') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.privacy_pargraph_title') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.privacy_content2') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.privacy_pargraph_title2') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.privacy_content3') }}
            </p>

            <h5 class="display-1 text-center">
              {{ $t('common.privacy_pargraph_title4') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.privacy_content5') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.privacy_pargraph_title5') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.privacy_content6') }}
            </p>
            <title-main
              :align="isMobile ? 'center' : 'center'"
              :class="isMobile ? 'space-top-short' : 'space-top-short'"
            >
              <span>
                <strong>
                  {{ $t('common.terms_title') }}
                </strong>
              </span>
            </title-main>
            <p class="display-1 text-center">
              {{ $t('common.terms_content') }}
            </p>
            <title-main
              :align="isMobile ? 'center' : 'center'"
              :class="isMobile ? 'space-top-short' : 'space-top-short'"
            >
              <span>
                <strong>
                  {{ $t('common.terms_title2') }}
                </strong>
              </span>
            </title-main>
            <h5 class="display-1 text-center">
              {{ $t('common.terms_pargraph_title') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.terms_content2') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.terms_pargraph_title2') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.terms_content3') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.terms_pargraph_title3') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.terms_content4') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.terms_pargraph_title4') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.terms_content5') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.terms_pargraph_title5') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.terms_content6') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.terms_pargraph_title6') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.terms_content7') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.terms_pargraph_title7') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.terms_content8') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.terms_pargraph_title8') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.terms_content9') }}
            </p>
            <h5 class="display-1 text-center">
              {{ $t('common.terms_pargraph_title9') }}
            </h5>
            <p class="display-1 text-center">
              {{ $t('common.terms_content10') }}
            </p>
          </v-container>
        </section>
      </div>

      <!--   <section class="spaceTop">
        <main-footer/>
      </section> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';

@function section-margin($margin) {
  @return $margin * 20;
}

.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
  .text-center {
    text-align: left !important;
  }
  h4 {
    margin-bottom: $spacing3;
  }
  h5 {
    margin-top: $spacing5;
    font-weight: $font-medium;
    font-size: 18px !important;
  }

  p {
    margin-top: $spacing1;
    font-weight: $font-regular;
    font-size: 14px !important;
    line-height: 19px;
  }

  title-main strong {
    margin-top: $spacing3 !important;
  }
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
}
.space-top {
  margin-top: section-margin($spacing1);
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
}
.container-wrap {
  margin-top: $spacing10;
  padding: $spacing4;
  > section {
    position: relative;
  }
}
</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
//import brand from '~/static/text/brand'
import Title from '../components/Title'
export default {
  components: {
    'main-header': Header,
    'title-main': Title,
    'main-footer': Footer,
  },
  data() {
    return {
      tab: null,
      loaded: false,
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
    },
  },
}
</script>
