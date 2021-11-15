<template>
  <div>
    <a-menu
      v-model="current"
      mode="horizontal"
      style="text-align:left;box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"
      theme="dark"
      @click="handleClick"
    >
      <a-menu-item key="index">
        <a-icon type="html5" />前端导航
      </a-menu-item>

      <a-sub-menu>

        <span
          slot="title"
          class="submenu-title-wrapper"
        >
          <a-icon type="radar-chart" />算法与数据结构
        </span>

        <a-menu-item-group title="算法基本">
          <a-menu-item key="page1">
            时间与空间复杂度
          </a-menu-item>
        </a-menu-item-group>

        <a-menu-item-group title="数据结构">
          <a-menu-item key="page2">
            线性表
          </a-menu-item>
          <a-menu-item key="page3">
            递归
          </a-menu-item>
          <a-menu-item key="page4">
            非线性表
          </a-menu-item>
        </a-menu-item-group>

        <a-menu-item-group title="排序">
          <a-menu-item key="page5">
            冒泡、选择、插入排序
          </a-menu-item>
          <a-menu-item key="page6">
            归并、快速、希尔、堆排序
          </a-menu-item>
          <a-menu-item key="page7">
            计数、桶、基数排序  
          </a-menu-item>
          <a-menu-item key="page8">
            经典排序算法汇总
          </a-menu-item>
        </a-menu-item-group>

      </a-sub-menu>

      <a-menu-item key="app">
        <a-icon type="appstore" />网站源码
      </a-menu-item>

      <a-menu-item key="myBook">
        <a-icon type="smile" />
        个人博客
      </a-menu-item>

      <a-menu-item key="git">
        <a-icon type="global" />
        github代码仓库
      </a-menu-item>


      <a-sub-menu style="float: right;">

        <span
          slot="title"
          class="submenu-title-wrapper"
        >
            Hi,<span style="font-size: 16px;">{{name}}</span>
        </span>

          <a-menu-item key="name">
            退出
          </a-menu-item>
      </a-sub-menu>

    </a-menu>
  </div>
</template>

<script>

export default {
  data () {
    return {
      current: ['index'],
      name: '永远少年'
    };
  },

  mounted () {
    this.name = window.sessionStorage.getItem('username');
  },
  methods: {
    handleClick (e) {
      console.log(this.$route.path);
      if (this.$route.path != '/'.concat(e.key) && e.key != 'app' && e.key != 'name' && e.key != 'myBook' && e.key != 'git') {
        this.$router.push('/'.concat(e.key))
      } else if (e.key == 'app') {
        window.open('https://github.com/blacksige/elevenBook', "_blank");
      } else if (e.key == 'myBook') {
        window.open('https://www.cnblogs.com/ifeelthecall/', "_blank");
      } else if (e.key == 'git') {
        window.open('https://github.com/blacksige', "_blank");
      } else if (e.key == 'name') {
         this.$router.push('/login')
      }



    },
  },
};
</script>