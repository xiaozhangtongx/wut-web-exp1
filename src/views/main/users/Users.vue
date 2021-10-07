<!--
 * @Description: 用户管理
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 16:53:18
-->
<template>
  <a-card>
    <h2>用户信息管理</h2>
    <a-row type="flex" justify="end">
      <a-col :span="5">
        <a-input placeholder="请输入学生姓名" />
      </a-col>
      <a-col :span="2" style="margin-left:10px">
        <a-button type="primary">
          查询
        </a-button>
      </a-col>
    </a-row>
    <UserTable style="margin-top:20px" />
  </a-card>
</template>


<script>
import UserTable from '@/components/users/UserTable'
export default {
  name: 'Users',
  data() {
    return {}
  },
  methods: {},
  components: {
    UserTable,
  },
}
</script>

<style scoped lang='less'>
</style>