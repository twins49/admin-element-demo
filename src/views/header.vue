<template>
    <el-row>
      <el-col :span="5">
        <div class="logo-group" :style="logoGroupStyle">
          <img v-if="collapse" src="@/assets/image/logo/header-icon-only.png">
          <img v-else src="@/assets/image/logo/header.png">
        </div>
        <div class="toggle-sidemenu-btn" @click="toggleAside">
          <Icon name="bars"></Icon>
        </div>
      </el-col>
      <el-col :span="2" :offset="17" class='menue-right'>
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
</template>

<script>
import Icon from 'components/Icon/Icon';

export default {
  name: 'NavMenu',
  data() {
    return {
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
      this.$emit('collapseChange', this.collapse);
    },
  },
};
</script>

<style scoped lang='scss'>
.el-dropdown-link{
  border: none;
  cursor: pointer;
}
.menue-right {
  color: #606266;
  font-size: 16px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
