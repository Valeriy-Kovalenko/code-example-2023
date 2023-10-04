<template>
  <TheHeader/>
  <router-view></router-view>
  <TheFooter/>
</template>

<script>
import TheHeader from './components/UI/TheHeader/TheHeader.vue'
import TheFooter from './components/UI/TheFooter.vue'

export default {
  name: 'App',
  components: { TheHeader, TheFooter }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
