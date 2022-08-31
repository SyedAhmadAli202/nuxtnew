<template>
  <div class="root">
    <v-container class="max-sm">
     <h3 class="subscribe-title use-text-title2">
        {{ $t('saasLanding.Subscribe_title') }}
      </h3>
      <div class="form">
       <v-form
              accept-charset="UTF-8"
              ref="form"
              v-model="valid"
              method="POST"
            >

                  <v-text-field
                    :placeholder="$t('saasLanding.footer_mail')"
                    v-model="email"
                    :rules="emailRules"
                    :label="$t('common.form_email')"
                    class="input light"
                    color="white"
                    solo
                    filled
                    required
                    full-width
                  />

          <v-btn
            :text="!isDesktop"
            :color="isDesktop ? 'primary' : 'white'"
            class="button"
             @click="validate"
          >
            <span v-if="isDesktop">{{ $t('saasLanding.Subscribe') }}</span>
            <v-icon v-if="isMobile">mdi-send</v-icon>
          </v-btn>
        </v-form>

  </div>
  </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './subscribe-style.scss';
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      valid: true,

      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      routeLink: '/'
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.onSubmit()
      }
    },
    onSubmit() {
      let data = {
        email: this.email
      }
      axios
        .post(
          'https://getform.io/f/aafdaca9-58d8-4230-a138-837e34e3b909',
          data,
          {
            headers: {
              Accept: 'application/json'
            }
          }
        )
        .then(
          response => {
            this.isSuccess = response.data.success ? true : false
            this.$refs.form.reset()
          },
          response => {
            // Error
            console.log('response', response)
          }
        )
    }
  },
  computed: {
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
