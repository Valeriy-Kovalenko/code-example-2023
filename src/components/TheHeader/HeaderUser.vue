<template>
<div class="user">
  <img src="../../assets/arrow-down.svg" class="arrow"/>
  <img src="../../assets/user1.jpg" class="avatar"/>
</div>
</template>

<script>
export default {
  name: "HeaderUser"
}
</script>

<style scoped>
.user {
  display: flex;
  align-items: center;
}
.avatar {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

.arrow {
  height: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
