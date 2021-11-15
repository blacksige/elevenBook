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
        <div class="add-box">
          <a-tooltip placement="bottom" :title="tipText" :get-popup-container="getPopupContainer">
            <div class="grid-content" @click="() => (modalVisible = true)">
              <div class="title-style">
                <a-icon type="folder-add" />
              </div>
           </div>
          </a-tooltip>
          
        </div>

      </div>
    </div>
    <a-modal
      v-model="modalVisible"
      title="Vertically centered modal dialog"
      centered
      @ok="addStar()"
    >
      <a-form :form="form">
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="Title"
        >
          <a-input
          @change="getTitle"
            v-decorator="[
              'title',
              { rules: [{ required: true, message: 'Please input your Title' }]},
            ]"
          
            placeholder="请输入标题"
          />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="URL"
        >
          <a-input
           @change="getUrl"
            v-decorator="[
              'url',
              { rules: [{ required: true, message: 'Please input your URL' }]},
            ]"
          
            placeholder="请输入链接,如：https://www.baidu.com/"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Box from '@/components/Box.vue'
import TopBar from '@/components/TopBar'


const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const formTailLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16},
};

export default {
  name: 'Index',
  components: {
    Box,
    TopBar
  },
  data () {
    return {
      modalVisible:false,
      boxList1: [
        {
          title: '阮一峰的网络日志',
          url: 'http://www.ruanyifeng.com/home.html'
        },
        {
          title: 'Lodash中文文档',
          url: 'https://www.lodashjs.com/',
        },
        {
          title: 'MDN Web Docs',
          url: 'https://developer.mozilla.org/zh-CN/'
        },
        {
          title: 'Can I use ...',
          url: 'https://caniuse.com/'
        },
        {
          title: 'ES6 入门教程',
          url: 'https://es6.ruanyifeng.com/',
        },
        {
          title: 'Babel',
          url: 'https://babeljs.io/docs/en/'
        },
        {
          title: 'webpack',
          url: 'https://webpack.js.org/'
        },
        {
          title: '掘金',
          url: 'https://juejin.cn/'
        },
        {
          title: 'animista经典动画实现',
          url: 'https://animista.net/'
        },
        {
          title: 'CSS Tricks css灵感之地',
          url: 'https://lhammer.cn/You-need-to-know-css/#/zh-cn/'
        },
        {
          title: '算法可视化',
          url: 'https://visualgo.net/en'
        },
         {
          title: 'TypeScript',
          url: 'https://github.com/xcatliu/typescript-tutorial'
        }
      ],
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
      tipText:'制作你的个人收藏吧！',

      title:'',
      url:'',


    }
  },
  mounted(){
    var that = this;
    if(localStorage.getItem('boxList')){
      that.boxList1 = JSON.parse(localStorage.getItem('boxList'));
    }
  },
  methods:{
    getPopupContainer(trigger) {
      return trigger.parentElement;
    },
    addStar(){
      console.log(this.url, this.title);
      var addObj = {
        title:this.title,
        url:this.url
      }

      this.boxList1.push(addObj);
      localStorage.setItem('boxList',JSON.stringify(this.boxList1));

      this.modalVisible = false;
    },
    getTitle(e){
      console.log(e.target.value);
      this.title = e.target.value;
    },
    getUrl(e){
      console.log(e.target.value);
       this.url = e.target.value;
    },
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success');
        }
      });
    },
 
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
      justify-content: center;
      flex-wrap: wrap;

      .add-box{
        width: 22%;
        min-width: 300px;
        margin: 20px;
        .grid-content {
          border-radius: 8px;
          min-height: 36px;
          cursor: pointer;
          display: flex;
          flex-direction: row;
          // border: gray 1px solid;
          background-color: #ffffff;
          padding: 20px;
          white-space: nowrap; /*禁止自动换行*/
          overflow: hidden;
           &:hover{
              -webkit-transform: scale(1.05);
              -moz-transform: scale(1.05);
              -o-transform: scale(1.05);
              -moz-box-shadow:3px 5px 7px rgba(0,21,88,.7);
              -webkit-box-shadow: 3px 5px 7px rgba(0,21,88,.7);
              box-shadow:3px 5px 7px rgba(0, 21, 88, 0.7);
            }
          .title-style {
            width: 100%;
            text-align: left;
            line-height: 100px;
            padding: 0 12px;
            color: rgb(26, 177, 214);
            font-weight: 700;
            font-size: 60px;
            text-align: center;
           
          }
        }
      }
    }
  }
}
.box:nth-child(1) .grid-content {
  background-image: url("../assets/sea-img/sea-deep.png");
}
.box:nth-child(2) .grid-content {
  background-image: url("../assets/sea-img/sea-flow.png");
}
.box:nth-child(3) .grid-content {
  background-image: url("../assets/sea-img/sea-gril.png");
}
.box:nth-child(4) .grid-content {
  background-image: url("../assets/sea-img/sea-garbage.png");
}
.box:nth-child(5) .grid-content {
  background-image: url("../assets/sea-img/sea-ground.png");
}
.box:nth-child(6) .grid-content {
  background-image: url("../assets/sea-img/sea-line.png");
}
.box:nth-child(7) .grid-content {
  background-image: url("../assets/sea-img/sea-man-garbage.png");
}
.box:nth-child(8) .grid-content {
  background-image: url("../assets/sea-img/sea-play.png");
}
.box:nth-child(9) .grid-content {
  background-image: url("../assets/sea-img/sea-tree.png");
}
.box:nth-child(10) .grid-content {
  background-image: url("../assets/sea-img/sea-tree-gril.png");
}
.box:nth-child(11) .grid-content {
  background-image: url("../assets/sea-img/sea-white.png");
}
.box:nth-child(12) .grid-content {
  background-image: url("../assets/sea-img/sea.png");
}
.box:nth-child(13) .grid-content {
  background-image: url("../assets/sea-img/sea-earth.png");
}
.box:nth-child(14) .grid-content {
  background-image: url("../assets/sea-img/sea-grass.png");
}
.box:nth-child(15) .grid-content {
  background-image: url("../assets/sea-img/sea-sun.png");
}
.box:nth-child(16) .grid-content {
  background-image: url("../assets/sea-img/sea-dolphin.png");
}
.box .grid-content {
  background-repeat: no-repeat;
  background-size: 200px 150px;
  background-position: right;
}
</style>