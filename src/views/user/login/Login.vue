<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-04 13:27:06
-->
<template>
  <div id="user">
    <router-view />
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      screenWidth: null, //屏幕尺寸
    }
  },

  methods: {},

  mounted() {
    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
      //屏幕尺寸变化就重新赋值
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  },
  watch: {
    screenWidth: {
      handler: function (val) {
        // console.log(val)
        if (val >= 650) {
          this.$router.push('/user/login/pc')
        } else {
          this.$router.push('/user/login/mobile')
        }
      },
      // immediate: true,
    },
  },
}
</script>

<style scoped lang='less'>
#user {
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
}
</style>