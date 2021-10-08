<!--
 * @Description: 侧边栏
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 14:40:53
-->
<template>
  <div>
    <a-menu :default-selected-keys="['1']" mode="inline" @click="handleClick">
      <a-menu-item key="1" @click="$router.push('/main/home')">
        <a-icon type="home" />
        <span class="nav-text">系统首页</span>
      </a-menu-item>
      <a-menu-item key="2" @click="$router.push('/main/users')">
        <a-icon type="team" />
        <span class="nav-text">用户管理</span>
      </a-menu-item>
      <a-menu-item key="3" @click="$router.push('/main/articles')">
        <a-icon type="file" />
        <span class="nav-text">文章管理</span>
      </a-menu-item>
      <a-sub-menu key="4" @titleClick="titleClick">
        <span slot="title">
          <a-icon type="setting" /><span>主题定制</span>
        </span>
        <a-menu-item key="5" @click="chooseTheme1">
          深蓝
        </a-menu-item>
        <a-menu-item key="6" @click="chooseTheme2">
          橘黄
        </a-menu-item>
      </a-sub-menu>

    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },

  methods: {
    handleClick(e) {
      console.log('click', e)
    },
    titleClick(e) {
      console.log('titleClick', e)
    },
    chooseTheme1() {
      this.$store.commit('theme1')
      return this.$message.success('主题设置成功！')
    },
    chooseTheme2() {
      this.$store.commit('theme2')
      return this.$message.success('主题设置成功！')
    },
  },
}
</script>

<style lang="less" scoped>
</style>
