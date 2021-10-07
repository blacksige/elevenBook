<template>
  <div class="home">
    <div id="nav">
      <top-bar />
    </div>
    <div class="home-content">
      <div class="row">
        <box />

        <box />

        <box />

      </div>
      <div class="row">

        <box />

        <box />

        <box />

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Box from '@/components/Box.vue'
import TopBar from '@/components/TopBar'

export default {
  name: 'Home',
  components: {
    Box,
    TopBar
  },

}
</script>


<style lang="less" scope>
.home {
  height: 100%;
  width: 100%;
  background-image: url("../assets/8.jpg");
  background-size: 100% 100%;
  .home-content {
    padding: 50px;
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-top: 5%;
    }
  }
}
</style>