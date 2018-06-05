<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from 'components/MainPage/MainPage';

export default {
  name: 'App',
  components: {
    MainPage,
  },
};
</script>

<style lang='sass'>
  @import '~@/assets/style/public-class.scss';
  // 主题
  @import '~@/assets/style/theme/default.scss';
</style>
