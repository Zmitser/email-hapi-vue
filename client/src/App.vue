<template lang="pug">
  v-app
    v-header
    main
      v-container(fluid)
          v-layout(column align-center)
              router-view
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
