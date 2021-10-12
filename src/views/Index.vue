<template>
  <div class="index">
    <div id="nav">
      <top-bar />
    </div>
    <div class="index-content">
      <div class="row">
        <box
          v-for="item in boxList1"
          :key="item.index"
          style="magrn:20px"
          :title="item.title"
        />
      </div>
      <div class="row">
        <box
          v-for="item in boxList2"
          :key="item.index"
          style="margin: 20px;"
          :title="item.title"
        />

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
  data () {
    return {
      boxList1: [
        {
          title: '111',
          url: 'www.baidui.com'
        },
        {
          title: '111',
          url: 'www.baidui.com',
        },
        {
          title: '111',
          url: 'www.baidui.com'
        }
      ],
      boxList2: [
        {
          title: '222',
          url: 'www.baidui.com',
        },
        {
          title: '222',
          url: 'www.baidui.com'
        },
        {
          title: '222',
          url: 'www.baidui.com'
        }
      ],
    }
  }

}
</script>


<style lang="less" scope>
.index {
  height: 100%;
  width: 100%;
  // background-image: url("../assets/8.jpg");
  // background-size: 100% 100%;
  background-color: #f2f2f2;
  .index-content {
    padding: 100px 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .row {
      width: 48%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }
}
.box:nth-child(1) .grid-content {
  background-image: url("../assets/小狗.png");
  background-repeat: no-repeat;
}
.box:nth-child(2) .grid-content {
  background-image: url("../assets/小狗2.png");
  background-repeat: no-repeat;
}
.box:nth-child(3) .grid-content {
  background-image: url("../assets/小狗3.png");
  background-repeat: no-repeat;
}
</style>