<template>
  <header class="header">
    <HeaderLogo/>
    <HeaderSearch/>
    <HeaderNav/>
    <HeaderUser/>
  </header>
</template>

<script>
import HeaderSearch from "@/components/TheHeader/HeaderSearch.vue";
import HeaderLogo from "@/components/TheHeader/HeaderLogo.vue";
import HeaderNav from "@/components/TheHeader/HeaderNav.vue";
import HeaderUser from "@/components/TheHeader/HeaderUser.vue";

export default {
  name: 'TheHeader',
  components: { HeaderLogo, HeaderSearch, HeaderNav, HeaderUser },
}
</script>

<style scoped>
.header {
  color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
