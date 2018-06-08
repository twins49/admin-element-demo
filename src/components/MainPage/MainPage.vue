<template>
  <el-container class="layout-main" :class="theme">
    <el-header>
      <el-row>
        <el-col :span="22">
          <div class="logo-group" :style="logoGroupStyle">
            <img v-if="collapse" src="@/assets/image/logo/header-icon-only.png">
            <img v-else src="@/assets/image/logo/header.png">
          </div>
          <div class="toggle-sidemenu-btn" @click="toggleAside">
            <Icon name="bars"></Icon>
          </div>
        </el-col>
        <el-col :span="2">
          <el-dropdown>
            <div class="el-dropdown-link" >
                Hi~&nbsp;&nbsp;&nbsp;<i class="fa fa-user-o" aria-hidden="true"></i>
                <span>admin</span>
            </div>
              <el-dropdown-menu  slot="dropdown">
              <el-dropdown-item><i class="fa fa-sign-out mr10" aria-hidden="true"></i>
                退出登录</el-dropdown-item>
              <el-dropdown-item><i class="fa fa-user-circle-o mr10" aria-hidden="true"></i>
                个人中心</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
import Icon from 'components/Icon/Icon';

export default {
  name: 'MainPage',
  data() {
    return {
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
.el-dropdown-link{
  border: none;
}
.menue-right {
  float: right;
  padding: 10px;
  color: #606266;
  font-size: 16px;
}

</style>
