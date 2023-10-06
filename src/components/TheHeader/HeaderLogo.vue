<template>
  <router-link to="/">
    <div class="logo">
      <img class="image" src="../../assets/logo.jpeg">
      <p class="text">FILMS</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "AppLogo"
}
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  color: black;
}

.image {
  height: 50px;
}

.text {
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 0 4px;
  color: #232121;
}
</style>
