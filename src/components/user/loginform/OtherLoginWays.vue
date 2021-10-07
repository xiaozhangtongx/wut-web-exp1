<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-04 15:30:43
-->

<template>
  <div class="btn">
    <a-button type="primary" icon="qq" size="large" class="qq" @click="qqLogin">
      QQ登录
    </a-button>

    <a-button type="primary" icon="wechat" size="large" class="wechat" @click="wechatLogin">
      微信登录
    </a-button>
    <a-button type="primary" icon="alipay" size="large" @click="alipayLogin">
      支付宝登录
    </a-button>

  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    qqLogin() {
      this.$router.push('/main/home')
      return this.$message.success('通过qq登录成功！')
    },
    wechatLogin() {
      this.$router.push('/main/home')
      return this.$message.success('通过微信登录成功！')
    },
    alipayLogin() {
      this.$router.push('/main/home')
      return this.$message.success('通过支付宝登录成功！')
    },
  },
}
</script>

<style scoped lang="less">
.btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ant-btn {
  margin-bottom: 15px;
  width: 300px;
  height: 50px;
}
.wechat {
  background-color: #07c160;
}
.qq {
  background-color: #2f86c4;
}
.ant-btn-primary {
  border: none;
}
</style>
