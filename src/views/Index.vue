<template>
  <div class="index">
    <div id="nav">
      <top-bar />
    </div>
    <div class="index-content">
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
  name: 'Index',
  components: {
    Box,
    TopBar
  },

}
</script>


<style lang="less" scope>
.index {
  height: 100%;
  width: 100%;
  // background-image: url("../assets/8.jpg");
  // background-size: 100% 100%;
  background-color: #284e7c;
  .index-content {
    padding: 50px;
    .row {
      margin-top: 5%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }
}
</style>