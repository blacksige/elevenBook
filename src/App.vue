<template>
  <div id="app">
    <div id="nav" v-if="isShowBar">
      <top-bar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from './components/TopBar'

export default {
  name: 'App',
  data(){
    return{
      isShowBar:false
    }
  },

  components:{
      TopBar
  },
  mounted(){
     this.isShowBar = window.sessionStorage.getItem('isShowBar')
  
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
