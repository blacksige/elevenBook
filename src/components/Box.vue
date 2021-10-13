<template>
  <div class="box">
    <div class="grid-content bg-purple">
      <div
        class="title-style"
        @click="openUrl(url)"
      >{{title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'hello world'
    },
    url:{
      type:String,
      default:'https://www.baidu.com'
    }
  },
  methods:{
    openUrl(url){
      window.open(url,"_blank");
      //_blank : 在新窗口打开
      //_self : 在当前窗口打开
      
      //window.location.href = url : 当前页面重定向
    }
  }
}
</script> 
<style lang="less">
.box {
  width: 400px;
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
    .title-style {
      width: 100%;
      text-align: right;
      line-height: 100px;
      padding: 0 12px;
      color: #666;
      font-weight: 700;
      font-size: 15px;
    }
  }
  .grid-content:hover {
    -webkit-animation: shadow-drop-2-bottom 0.4s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: shadow-drop-2-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }
}

@-webkit-keyframes shadow-drop-2-bottom {
  0% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px) translateY(-12px);
    transform: translateZ(50px) translateY(-12px);
    -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
    box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
  }
}
@keyframes shadow-drop-2-bottom {
  0% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px) translateY(-12px);
    transform: translateZ(50px) translateY(-12px);
    -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
    box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
  }
}
</style>