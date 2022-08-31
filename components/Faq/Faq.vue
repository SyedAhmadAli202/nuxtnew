<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col md="6" class="pa-6">
          <hidden point="smUp">
          <title-main :align="isMobile ? 'center' : 'left'">
            <strong>
              FAQ
            </strong>
          </title-main>
          <p
            class="text use-text-subtitle2"
            :class="[isMobile ? 'text-center' : 'text-left']"
          >
            {{ $t('saasLanding.faq_subtitle') }}
          </p>
          </hidden>
          <hidden point="smDown">
            <div class="illustration">
              <parallax-medium />
              <img src="/images/saas/ibz-faq.png" alt="illustration" />
            </div>
          </hidden>
        </v-col>
        <v-col md="6" cols="12" class="pa-6">
          <div class="accordion">
            <v-expansion-panels
              v-model="panel"
              active-class="expanded"
            >

              <v-expansion-panel class="paper" >
              <!--  v-for="(item, index) in faqData"
                :key="index" -->


                 <v-expansion-panel-header class="content">
                  <p class="heading">
                    {{ $t('saasLanding.faq_question') }}
                  </p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <p>
                    {{ $t('saasLanding.faq_answer') }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel class="paper" >
              <!--  v-for="(item, index) in faqData"
                :key="index" -->
                 <v-expansion-panel-header class="content">
                  <p class="heading">
                    {{ $t('saasLanding.faq_question1') }}
                  </p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <p>
                    {{ $t('saasLanding.faq_answer1') }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel class="paper" >
              <!--  v-for="(item, index) in faqData"
                :key="index" -->
                 <v-expansion-panel-header class="content">
                  <p class="heading">
                    {{ $t('saasLanding.faq_question2') }}
                  </p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <p>
                    {{ $t('saasLanding.faq_answer2') }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>



              <v-expansion-panel class="paper" >
              <!--  v-for="(item, index) in faqData"
                :key="index" -->
                 <v-expansion-panel-header class="content">
                  <p class="heading">
                    {{ $t('saasLanding.faq_question3') }}
                  </p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <p>
                    {{ $t('saasLanding.faq_answer3') }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel class="paper" >
              <!--  v-for="(item, index) in faqData"
                :key="index" -->
                 <v-expansion-panel-header class="content">
                  <p class="heading">
                    {{ $t('saasLanding.faq_question4') }}
                  </p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <p>
                    {{ $t('saasLanding.faq_answer4') }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'faq-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import ParallaxMedium from '../Parallax/Medium'
import Title from '../Title'

export default {
  components: {
    Hidden,
    ParallaxMedium,
    'title-main': Title
  },
  data() {
    return {
      panel: 0
      //faqData: faqData
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
