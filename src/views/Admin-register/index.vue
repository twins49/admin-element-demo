<template>
<section>
  <!--工具条-->
  <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
    <el-form :inline="true" :model="filters">
      <el-form-item>
        <el-input v-model="filters.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">新增</el-button>
      </el-form-item>
    </el-form>
  </el-col>
  <el-table :data="tableData" highlight-current-row
   @selection-change="selsChange" style="width: 100%;">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column type="index" width="60">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120" sortable>
    </el-table-column>
    <el-table-column prop="sex" label="性别" width="100"  sortable>
    </el-table-column>
    <el-table-column prop="age" label="年龄" width="100" sortable>
    </el-table-column>
    <el-table-column prop="birth" label="生日" width="120" sortable>
    </el-table-column>
    <el-table-column prop="addr" label="地址" min-width="180" sortable>
    </el-table-column>
    <el-table-column label="操作" width="150">
    </el-table-column>
  </el-table>
  <!-- <el-table
    :data="tableData"
    border
    >
    <el-table-column
    prop="authority"
    label="账号权限"
    align='center'
    width="180"
    >
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建日期"
      align='center'
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="lastLogin"
      label="最后登录日期"
      align='center'
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="账号名称"
      align='center'
      width="180"
      >
    </el-table-column>
  </el-table> -->
</section>
</template>

<script>
import { adminAccountLists } from 'api/adminApi';

export default {
  data() {
    return {
      tableData: [],
      filters: {
        name: '',
      },
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      adminAccountLists().then((res) => {
        const { code, data } = res.data;
        if (code === 200) {
          this.tableData = data;
          window.console.log(this.tableData);
        }
      });
    },
    selsChange(sels) {
      this.sels = sels;
    },
  },
};
</script>

