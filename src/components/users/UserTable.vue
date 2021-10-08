<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 16:41:03
-->
<template>
  <el-table :data="tableData" stripe style="width: 100%" border fit>
    <af-table-column type="index" align="center">
    </af-table-column>
    <af-table-column prop="name" label="学生姓名" align="center">
    </af-table-column>
    <af-table-column prop="password" label="学生密码" align="center">
    </af-table-column>
    <af-table-column prop="email" label="学生邮箱" align="center">
    </af-table-column>
    <af-table-column prop="birthday" label="学生生日" align="center">
    </af-table-column>
    <af-table-column prop="money" label="学生余额" align="center">
    </af-table-column>
    <af-table-column prop="operation" label="操作" align="center">
      <a-space align="center">
        <a-button type="primary" style="background:#009688; border:none" size="small">
          编辑
        </a-button>
        <a-button type="danger" size='small'>
          删除
        </a-button>
      </a-space>

    </af-table-column>
  </el-table>
</template>

<script>
export default {
  created() {
    this.getData()
  },
  data() {
    return {
      zhangsan: {
        name: '张三',
        password: '123456',
        email: 'zhangsan@qq.com',
        birthday: '2000-09-09',
        money: 500,
      },
      tableData: [],
    }
  },
  methods: {
    getData() {
      for (let i = 0; i < Math.round(Math.random() * 5 + 5); i++) {
        this.zhangsan.password = this.zhangsan.password.replace(/^(\d{1})\d{4}(\d+)/, '$1****$2')
        this.tableData.push(this.zhangsan)
      }
    },
  },
}
</script>

<style scoped lang='less'>
</style>