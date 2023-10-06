<template>
  <main>
    <ProfileHeader/>
  </main>
</template>

<script>
import ProfileHeader from "@/components/MainPage/ProfileHeader";
export default {
  name: "MainPage",
  components: {ProfileHeader}
}
</script>

<style scoped>
* {
  background-color: #2c3440;
}

main {
  padding-top: 8px;
  height: 600px;
  border: 1px solid red;
}
</style>
