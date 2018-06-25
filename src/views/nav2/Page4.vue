<template>
  <div id='page4'>
    <groupList :optionList='mockList' :choseKeyWord=[1,3,5] />
  </div>
</template>

<script>
import groupList from 'components/common/groupList';

export default {
  data() {
    return {
      mockList: [
        { keyWords: '游戏关键字a', flow: 123456 },
        { keyWords: '游戏关键字b', flow: 654321 },
        { keyWords: '游戏关键字b', flow: 654321 },
        { keyWords: '游戏关键字b', flow: 654321 },
        { keyWords: '游戏关键字b', flow: 654321 },
        { keyWords: '游戏关键字b', flow: 654321 },
        { keyWords: '游戏关键字b', flow: 654321 },
        { keyWords: '游戏关键字b', flow: 2234441 },
        { keyWords: '游戏关键字b', flow: 123 },
      ],
    };
  },
  methods: {
  },
  components: {
    groupList,
  },
};
</script>

<style lang='scss'>

</style>
