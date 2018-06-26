<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2"
   label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <div class='errorTip' v-if='errorTip'>{{errorTip}}</div>
    <el-form-item prop="name">
      <el-input type="text"
       v-model="ruleForm2.name" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="ruleForm2.pwd"
       auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;"
       @click.native.prevent="handleSubmit2('ruleForm2')">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { login } from 'api/adminLoginApi';

export default {
  data() {
    return {
      logining: false,
      errorTip: '',
      ruleForm2: {
        name: '',
        pwd: '',
      },
      rules2: {
        name: [
          { required: true, message: '请输入账号', trigger: 'change' },
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'change' },
        ],
      },
      checked: true,
    };
  },
  methods: {
    // 提交表单
    handleSubmit2(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          window.console.warn(this.ruleForm2);
          login(this.ruleForm2).then((res) => {
            window.console.log(res);
            return 111;
          });
        }
        return false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
    .errorTip {
      color:crimson;
      position: relative;
      top: -16px;
      font-size:14px;
    }
  }
</style>
