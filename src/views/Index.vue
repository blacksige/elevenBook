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
          :title="item.title"
          :url="item.url"
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
          url: 'https://i.cnblogs.com/posts/edit'
        },
        {
          title: '111',
          url: 'www.baidui.com',
        },
        {
          title: '111',
          url: 'www.baidui.com'
        },
        {
          title: '333',
          url: 'www.baidui.com'
        },
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
        },
        {
          title: '222',
          url: 'www.baidui.com'
        },
        {
          title: '222',
          url: 'www.baidui.com'
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
  overflow: auto;
  .index-content {
    padding: 80px;
    .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
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
.box:nth-child(4) .grid-content {
  background-image: url("../assets/茱萸.png");
  background-repeat: no-repeat;
}
.box:nth-child(5) .grid-content {
  background-image: url("../assets/菊花1.png");
  background-repeat: no-repeat;
}
.box:nth-child(6) .grid-content {
  background-image: url("../assets/菊花2.png");
  background-repeat: no-repeat;
}
.box:nth-child(7) .grid-content {
  background-image: url("../assets/菊花3.png");
  background-repeat: no-repeat;
}
.box:nth-child(8) .grid-content {
  background-image: url("../assets/酒杯.png");
  background-repeat: no-repeat;
}
.box:nth-child(9) .grid-content {
  background-image: url("../assets/酒壶.png");
  background-repeat: no-repeat;
}
.box:nth-child(10) .grid-content {
  background-image: url("../assets/风筝.png");
  background-repeat: no-repeat;
}
.box:nth-child(11) .grid-content {
  background-image: url("../assets/花苞.png");
  background-repeat: no-repeat;
}
</style>