<template>
  <el-container class="layout-main" :class="theme">
    <el-header>
      <Header @collapseChange = 'collapseChange' />
    </el-header>
    <el-main class='dd-p0 main'>
      <!-- 侧边栏 -->
      <Aside :collapsed='collapsed' />
      <section class="content-container" :style="collapsed?'left:64px;':''">
        <div class="grid-content bg-purple-light">
          <!-- 页面最顶上的title -->
          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <!-- 面包屑 -->
            <!-- <el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb> -->
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-main>
  </el-container>
</template>

<script>
import Header from 'views/header';
import Aside from 'views/aside';

export default {
  name: 'MainPage',
  data() {
    return {
      theme: 'default',
      collapsed: false,
    };
  },
  components: {
    Header,
    Aside,
  },
  methods: {
    collapseChange(collapse) {
      this.collapsed = collapse;
    },
  },
  created() {
    window.console.log(this.$route.matched);
  },
};
</script>

<style scoped lang='scss'>
.main {
  display: flex;
  // background: #324057;
  position: relative;
  bottom: 0px;
  overflow: hidden;
  .content-container {
    // background: #f1f2f7;
    background-color: #fff;
    flex:1;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    left: 235px;
    overflow-y: scroll;
    width: 100%;
    padding: 0 20px 20px 20px;
    .breadcrumb-container {
      // margin-bottom: 15px;
      .title {
        width: 200px;
        float: left;
        color: #475669;
        padding: 15px 0;
      }
      .breadcrumb-inner {
        float: right;
      }
    }
    .content-wrapper {
      background-color: #fff;
      box-sizing: border-box;
    }
  }
}
</style>
