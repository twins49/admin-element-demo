<template>
  <div class="hello">
    数量:{{count}}<br/>
    getter:{{filterCount}}<br/>
    <button @click='fn'>点击我+1</button>
    <hr>
    <h1>token:{{adminToken}}</h1>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    ...mapState('clock', ['count']),
    ...mapState('adminLogin', ['adminToken']),
    ...mapGetters('clock', ['filterCount']),
  },
  methods: {
    ...mapActions('clock', ['addCount']),
    fn() {
      this.addCount();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
