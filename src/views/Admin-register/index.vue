<template>
  <div class='admin-register'>
    <el-row>
      <el-col :span="18">
        <el-form ref="ruleForm" :model="ruleForm" label-width="80px" :rules='rules'>
          <el-form-item label="账号名称" prop='name'>
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="账号密码" prop='pwd'>
            <el-input v-model="ruleForm.pwd" type='password'></el-input>
          </el-form-item>
          <el-form-item label="权限选择" prop='auth'>
            <el-select v-model="ruleForm.auth" placeholder="选择账号权限">
              <el-option label="超级管理员" value="1"></el-option>
              <el-option label="普通管理员" value="2"></el-option>
              <el-option label="编辑" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import { register } from 'api/adminLoginApi';

export default {
  name: 'admin-register',
  data() {
    return {
      ruleForm: {
        name: '',
        pwd: '',
        auth: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入账号名称', trigger: 'blur' },
        ],
        pwd: [
          { required: true, message: '请输入账号密码', trigger: 'blur' },
        ],
        auth: [
          { required: true, message: '请选择权限', trigger: 'change' },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 注册账号信息
          register(this.ruleForm)
            .then((res) => {
              window.console.log(res);
            })
            .catch((error) => {
              window.console.log(error);
            });
        } else {
          this.$message.error({
            showClose: true,
            message: '验证失败，还有东西没填好',
            type: 'error',
          });
        }
      });
    },
  },
};
</script>

<style scoped lang='scss'>
  .admin-register {
    margin-top: 30px;
  }
</style>
