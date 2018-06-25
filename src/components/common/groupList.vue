<template>
  <div id='adGroupBox'>
    <div class='adGroupList'>
      <div class='group-head'>
        <div class='list-left'>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="list-right" v-if='optionList.length > 0'>
          <el-input  placeholder="请输入内容" v-model="listRightValue"
          @focus='rightFocus' @change='listRightChange'></el-input>
          <i id='triangle' class='el-icon-caret-top'
            :class="{'t-rotate':isRotate}"></i>
            <ul class='list-drop-down' v-if='listRight'>
              <li :key='index' :class="{selectedBg:choseKeyWord.indexOf(index)!=-1 }"
              @click='getKeyWord($event,index)' v-for='(item,index) in optionList' >
                <p :class="{selected:choseKeyWord.indexOf(index)!=-1 }"
                style='margin-top:4px'>{{item.keyWords}}</p>
                <p :class="{selected:choseKeyWord.indexOf(index)!=-1 }"
                style='font-size:13px'>流量：{{item.flow}}</p>
              </li>
            </ul>
        </div>
      </div>
      <div class='chose' v-if='choseKeyWord.length > 0' @click="chosePanelClick">
          <header>
            <span class="chose-left">已选中 <b>20</b> 个</span>
            <a href="javascript:void(0)" @click='clearAll'>清空</a>
          </header>
          <ul class='choseListBox'>
            <li v-for='(item,key) in choseKeyWord' :key='key'>
              <span style="float:left;">{{optionList[item].keyWords}}</span>
              <i class='el-icon-close' @click='choseClose(item)'  style="float:right;"></i>
            </li>
          </ul>
      </div>
    </div>
    <div class='addBag'>
      <a href="">新增词包</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      value: '',
      isRotate: false,
      listRight: false,
      listRightValue: '', // 菜单输入值
    };
  },
  props: {
    optionList: {
      type: Array,
      default: () => [],
    },
    choseKeyWord: {
      type: Array,
      default: () => [],
    },
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
    width: 450px;
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
      .list-left {
        width: 30%;
        float: left;
      }
      .list-right {
        width: 67%;
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
          width: 100%;
          height: 248px;
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
            color:#dddede;
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
      }
    }
    .chose {
      width: 445px;
      height: 250px;
      border: 1px solid #ccc;
      margin-top: 10px;
      position: absolute;
      z-index: 22;
      header {
        height: 30px;
        line-height: 30px;
        background: #f5f5f6;
        color: #000;
        span, a {
          display: block;
        }
        span {
          float: left;
          margin-left: 15px;
        }
        a {
          float: right;
          margin-right: 15px;
          color: rgb(0, 0, 0);
          text-decoration: underline !important;
        }
      }
      .choseListBox {
        margin: 0;
        li {
          padding: 15px;
          i,span {
            display: block;
          }
          i {
            cursor: pointer;
            &:hover {
              color: #3482cb;
            }
          }
        }
      }
    }
  }
  .addBag {
    float: left;
    margin-top: 27px;
    margin-left: 15px;
    a {
      color: #3482cb;
      text-decoration: underline !important;
    }
  }
</style>
