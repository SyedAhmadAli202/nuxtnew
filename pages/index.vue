<template>
<div>
  <div class="main-wrap">
    <main-header />
    <div class="container-wrap">
      <section id="home">
        <banner />
      </section>
      <section>
        <company-logo />
      </section>
      <section :class="!isMobile && 'space-top-short'">
        <counter />
      </section>
      <section id="feature-3" :class="isMobile ? 'space-top-short' : 'space-top'">
        <feature-3 />
      </section>
   <section id="feature" :class="isMobile ? 'space-top-short' : 'space-top'">
        <feature />
      </section>
      <section id="benefit" class="space-top-short space-bottom-short">
        <benefit />
      </section>
      <section id="feature-4" :class="isMobile ? 'space-top-short' : 'space-top'">
        <feature-4 />
        </section>
      <section id="blog" :class="isMobile ? 'space-top-short' :  'space-top'">
        <news-event />
      </section>
      <section id="testimonials" >
        <testimonials />
      </section>
      <section  :class="space-top-short">
        <Roadmap/>
      </section>
      <section id="faq" class="space-top">
        <faq />
      </section>
      <section  class="space-top-short">
        <subscribe />
      </section>
    </div>
    <section id="footer" class="space-top-short">
      <footer-with-deco />
    </section>
    <hidden point="mdDown">
      <page-nav />
    </hidden>
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

  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin(6px);
  }
}
.space-bottom-testi {
  @include breakpoints-up(md) {
    margin-bottom: section-margin($spacing1 * 0.5);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(sm) {
    margin-top: section-margin(6px);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
}
.container-wrap {
  margin-top: -40px;
  > section {
    position: relative;
  }
}
</style>

<script>
import Header from '~/components/Header'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
import Banner from '~/components/Banner'
import CompanyLogo from '~/components/CompanyLogo'
import Feature3 from '~/components/Feature3'
import Feature from '~/components/Feature'
import Testimonials from '~/components/Testimonials'
import PricingPlan from '~/components/PricingPlan'
import Faq from '~/components/Faq'
import NewsEvent from '~/components/NewsEvent'
import FooterWithDeco from '~/components/Footer/FooterWithDeco'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'
import Blog from '~/components/Blog'
import Feature4 from '~/components/Feature4'
import Benefit from '~/components/Benefit'
import Subscribe from '~/components/SubscribeForm'
import Roadmap from '~/components/Roadmap'

export default {
  components: {
    'main-header': Header,
    Banner,
    CompanyLogo,
    Feature,
    Feature3,
    Testimonials,
    PricingPlan,
    Faq,
    NewsEvent,
    FooterWithDeco,
    PageNav,
    Hidden,
    Notification,
    Blog,
    Feature4,
    Benefit,
    Subscribe,
    Roadmap
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown' // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    }
  },
  head() {
    return {
      title: brand.saas.name + ' - Home Page'
    }
  }
}
</script>
