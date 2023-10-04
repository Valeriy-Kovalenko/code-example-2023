<template>
  <div class="search">
    <img src="../../../assets/search.png"/>
    <input type="text" placeholder="Search">
  </div>
</template>

<script>
export default {
  name: "HeaderSearch"
}
</script>

<style scoped>
.search {
  display: flex;
  align-items: center;
  height: 40px;
  width: 300px;
  border: 1px solid lightgrey;
  border-radius: 12px;
  background-color: #fff;
}
img {
  height: 20px;
  margin: 0 4px 0 8px;
}

input {
  padding-left: 8px;
  height: 32px;
  width: 400px;
  border: none;
  border-radius: 14px;
}

input:focus {
  outline: none;
}
</style>
