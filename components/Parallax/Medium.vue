<template>
  
</template>

<style lang="scss" scoped>
@import './parallax-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
