<template>
  <div class='selfSelect'>
    <div class='adGroupList'>
      <div class='group-head'>
        <div class="list-right">
          <el-input  placeholder="请输入内容" v-model="listRightValue"
          @focus='rightFocus' @change='listRightChange'></el-input>
          <i id='triangle' class='el-icon-caret-top'
            :class="{'t-rotate':isRotate}"></i>
            <ul class='list-drop-down' v-if='listRight'>
              <li :key='index' :class="{selectedBg:choseKeyWord.indexOf(index)!=-1 }"
              @click='getKeyWord($event,index)' v-for='(item,index) in mockList' >
                <p :class="{selected:choseKeyWord.indexOf(index)!=-1 }">{{item.keyWords}}</p>
                <p :class="{selected:choseKeyWord.indexOf(index)!=-1 }"
                style='font-size:13px'>流量：{{item.flow}}</p>
              </li>
            </ul>
          <div class='count' v-if='listRight'>
           <a href="javascript:void(0)" style="display:block;float:left;">全选</a>
           <span style='float:left;margin-left:5px;'> (选取前 50 个)</span>
            <a style='float:right;margin-right:10px;' href="javascript:void(0)">清空</a>
          </div>
        </div>
      </div>
    </div>
    <p class='tip'>
      最多 100 个
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      isRotate: false,
      listRight: false,
      listRightValue: '', // 菜单输入值
      choseKeyWord: [],
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
    // 输入框获取焦点 显示下拉框
    rightFocus() {
      this.listRight = true;
    },
    rightBlur() {
      this.listRight = false;
      window.console.log(this.listRight);
    },
    // 选取下拉菜单的关键字
    getKeyWord(event, key) {
      if (this.choseKeyWord.indexOf(key) !== -1) {
        this.choseKeyWord.splice(this.choseKeyWord.indexOf(key), 1);
      } else {
        this.choseKeyWord.push(key);
      }
    },
    listRightChange() {
      window.console.log(this.listRightValue);
    },
    // 面板被点击的时候
    chosePanelClick() {
      this.listRight = false;
    },
    // 删除已选项列表指定列
    choseClose(key) {
      const index = this.choseKeyWord.indexOf(key);
      if (index !== -1) {
        this.choseKeyWord.splice(index, 1);
      }
    },
    // 删除所有已选项列表
    clearAll() {
      this.choseKeyWord = [];
    },
  },
  watch: {
    // 让三角形箭头旋转
    listRight(newValue) {
      this.isRotate = newValue;
    },
  },
};
</script>

<style lang='scss'>
  .adGroupList {
    padding-top:20px;
    width: 370px;
    margin-left: 100px;
    margin-bottom: 15px;
    overflow: hidden;
    float: left;
    ::-webkit-scrollbar {
      width: 4px;
      z-index: 3;
    }
    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track{
      background-color: transparent;
    }
    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb{
      background-color: #dddddd;
      border-radius: 2px;
      outline: none;
    }
    .group-head {
      height: 30px;
      .list-right {
        width: 97%;
        float: left;
        margin-left: 10px;
        position: relative;
        #triangle {
          transition:0.4s;
          position: absolute;
          top: 0;
          right: 1px;
          top: 12px;
          right: 10px
        }
        .t-rotate {
          transform:rotate(180deg);
        }
        .list-drop-down {
          max-height: 248px;
          overflow-y: auto;
          overflow-x: hidden;
          border:1px solid #ddd;
          position: relative;
          z-index: 33;
          margin: 0;
          background: #fff;
          .selectedBg {
            background:#f1f3f4;
          }
          li{
            overflow: hidden;
            font-size: 14px;
            color:#bbb;
            border-bottom: 1px solid #ddd;
            position: relative;
            cursor: pointer;
            &:hover {
              background:#f1f3f4;
            }
            p{
              margin-bottom: 0;
              margin-left: 10px;
              line-height: 1.5;
            }
            .selected {
              color:#3482cb;
            }
          }
        }
        .count {
          height: 30px;
          line-height: 30px;
          padding-left: 15px;
          font-size: 14px;
          background: #ccc;
          a, span {
            color: #000;
            display: block;
          }
          a {
            text-decoration: underline !important;
          }
        }
      }
    }
  }
  .tip {
    margin-top: 25px;
    margin-left: 15px;
    float: left;
    color:#ccc;
  }
</style>
