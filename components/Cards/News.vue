<template>
  <div class="news">
    <figure>
      <img :src="img" alt="thumb">
    </figure>
    <div class="desc">
      <div class="text">
        <p class="type caption">
          {{ $t(text) }}
        </p>
        <p class="blog_details">{{ type }}</p>
      </div>
      <v-btn small color="primary" class="blog-readmore primary"  :href="'https://blog.ibizatoken.com/' + slug" target="_blank">

        {{ $t('saasLanding.news_readmore') }}

      </v-btn>


    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './cards-style.scss';
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>
