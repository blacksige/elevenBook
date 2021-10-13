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

        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>

        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>

        <a-menu-item-group title="Item 3">
          <a-menu-item key="setting:5">
            Option 5
          </a-menu-item>
          <a-menu-item key="setting:6">
            Option 6
          </a-menu-item>
        </a-menu-item-group>

      </a-sub-menu>

      <a-menu-item key="app">
        <a-icon type="appstore" />网站源码
      </a-menu-item>

      <a-menu-item key="alipay">
        <a-icon type="smile" />
        关于我
      </a-menu-item>

      <a-menu-item style="float: right;">
        Hi,<span style="font-size: 16px;">{{name}}</span>
      </a-menu-item>
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
      if (this.$route.path != '/'.concat(e.key)) {
        this.$router.push('/'.concat(e.key))
      }


    },
  },
};
</script>