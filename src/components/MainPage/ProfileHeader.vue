<template>
  <div class="profile-header">
    <div class="background-image">
      <img src="../../assets/background-image.png"/>
    </div>
    <div class="info"></div>
  </div>
</template>

<script>
export default {
  name: "ProfileHeader"
}
</script>

<style scoped>
.profile-header {
  width: 80%;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 10px;
}

.background-image  {
  height: 300px;
  overflow: hidden;
  border-radius: 10px;

}
.background-image img {
  width: 100%;
}
</style>
