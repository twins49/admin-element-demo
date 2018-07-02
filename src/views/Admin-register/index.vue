<template>
  <el-table
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
  </el-table>
</template>

<script>
import { adminAccountLists } from 'api/adminApi';

export default {
  data() {
    return {
      tableData: [],
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
  },
};
</script>
