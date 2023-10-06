<template>
  <nav class="nav">
    <router-link to="/lists" class="nav__item">Lists</router-link>
    <router-link to="/watchlist" class="nav__item">Watchlist</router-link>
    <router-link to="/community" class="nav__item">Community</router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav"
}
</script>

<style scoped>
.nav__item {
  font-size: 24px;
  font-weight: bold;
  margin-right: 40px;
}

.nav__item:last-child {
  margin-right: 0;
}

a {
  text-decoration: none;
  color: black;
}
</style>
