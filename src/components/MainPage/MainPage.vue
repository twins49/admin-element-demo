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

<style scoped>

</style>
