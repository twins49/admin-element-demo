<template>
  <el-container class="layout-main" :class="theme">
    <el-header>
      <div class="logo-group" :style="logoGroupStyle">
        <img v-if="collapse" src="@/assets/image/logo/header-icon-only.png">
        <img v-else src="@/assets/image/logo/header.png">
      </div>
      <div class="toggle-sidemenu-btn" @click="toggleAside">
        <Icon name="bars"></Icon>
      </div>
      <el-popover
        placement="bottom"
        width="400"
        trigger="click">
        <ul class='menue-right-list'>
          <li></li>
        </ul>
        <div class="menue-right" slot='reference'>
            Hi~&nbsp;&nbsp;&nbsp;<i class="fa fa-user-o" aria-hidden="true"></i>
            <span>admin</span>
        </div>
      </el-popover>

    </el-header>
  </el-container>
</template>

<script>
import Icon from 'components/Icon/Icon';

export default {
  name: 'MainPage',
  data() {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }],
      theme: 'default',
      collapse: false,
    };
  },
  components: {
    Icon,
  },
  computed: {
    logoGroupStyle() {
      return {
        width: `${this.collapse ? '65' : '200'}px`,
      };
    },
  },
  methods: {
    toggleAside() {
      this.collapse = !this.collapse;
    },
  },
};
</script>

<style scoped lang='scss'>
.menue-right-list{
  width: 300px;
}
.menue-right-lis li{
  height: 30px;
  text-align: center;
}
.menue-right {
  float: right;
  padding: 10px;
  color: #606266;
  font-size: 16px;
}
</style>
