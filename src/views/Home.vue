<template>
  <div class="home">
    <div id="nav">
      <top-bar />
    </div>
    <div class="home-content">
      <a-row
        type="flex"
        :gutter="20"
        justify="center"
        style="margin: 30px;"
      >
        <a-col :span="6">
          <box />
        </a-col>
        <a-col :span="6">
          <box />
        </a-col>
        <a-col :span="6">
          <box />
        </a-col>
      </a-row>
      <a-row
        type="flex"
        :gutter="20"
        justify="center"
        style="margin: 30px;"
      >
        <a-col :span="6">
          <box />
        </a-col>
        <a-col :span="6">
          <box />
        </a-col>
        <a-col :span="6">
          <box />
        </a-col>
      </a-row>
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


<style lang="less">
.home-content {
  padding: 50px;
}
</style>