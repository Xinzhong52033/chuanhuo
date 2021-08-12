<template>
  <el-container id="app">
    <el-main class="page-main">
        <router-view class="router-container"/>
    </el-main>
  </el-container>
</template>

<script>

import homeFooter from './views/layout/footer.vue'
import { setRem } from './rem.js'
export default {
  components: {
    homeFooter
  },
  name: 'App',
//   created () {
//     setRem()
//     window.addEventListener('resize', this.resizeHandler)
//   },
//   beforeDestroy () {
//     window.removeEventListener('resize', this.resizeHandler)
//   },
//   methods: {
//     resizeHandler () {
//       window.screenWidth = document.body.clientWidth
//       location.reload() 
//       setRem()
//     }
//   }
}
</script>

<style lang="less">
@import './style/common.less';
// 引入字体和iconfont
@import './style/font.less';
@import './assets/iconfont/iconfont.css';
#app {
  // font-size: 14px;
  font-size: 0.16rem;
  color: @fc1;
  width: 100vw;
  .wh(100%,100%);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .main-header{
    // position: fixed;
   .wh(100%, 40px);
    background: #F7F9FC;
    // z-index: 9999999;
  }
  .main-footer {
    .wh(100%, 353px) !important;
    padding: 0;
  }
  .page-main {
    .wh(100%, 100%);
    // .wh(100vw, 100vh);
    // margin-top: 40px;
    padding: 0;
  }
}
</style>
