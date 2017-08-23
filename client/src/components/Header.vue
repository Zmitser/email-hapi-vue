<template lang="pug">
  v-app
    v-navigation-drawer(temporary v-model="sideNav")
      v-list
        v-list-tile(href="/auth/google")
          v-list-tile-action
            v-icon room
          v-list-tile-content Sign Up with Google
    v-toolbar(dark class="primary")
      v-toolbar-side-icon(class="hidden-sm-and-up" v-on:click.stop="sideNav = !sideNav")
      v-toolbar-title
        router-link(to="/" tag="span" style="cursor: pointer;") Emaily
      v-spacer
      v-toolbar-items(class="hidden-xs-only")
        v-btn(flat href="/auth/google")
          v-icon(left dark) room
          | Sign Up with Google

</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    }
  }
</script>

<style lang="stylus"></style>
