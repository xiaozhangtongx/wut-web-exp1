<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 14:57:04
-->
<template>
  <div>
    <h1 @click="$router.push('/main/home')">
      <a-icon type="file" />WEB技术第一次实验
    </h1>
    <a-dropdown>
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        <a-avatar style="backgroundColor:#87d068" size="large"
          src="https://qq.yh31.com/tp/zjbq/202006162239246617.gif" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="/user/login">退出</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>

  </div>
</template>


<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang='less'>
div {
  display: flex;
  justify-content: space-between;
  h1 {
    text-align: center;
    color: #ffff;
    font-weight: 700;
    cursor: pointer;
  }
}
</style>