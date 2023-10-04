<template>
  <header class="header">
    <HeaderLogo/>
    <HeaderSearch/>
    <HeaderNav/>
    <HeaderUser/>
  </header>
</template>

<script>
import HeaderSearch from "@/components/UI/TheHeader/HeaderSearch.vue";
import HeaderLogo from "@/components/UI/TheHeader/HeaderLogo.vue";
import HeaderNav from "@/components/UI/TheHeader/HeaderNav.vue";
import HeaderUser from "@/components/UI/TheHeader/HeaderUser.vue";

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
