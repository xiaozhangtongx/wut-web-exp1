<!--
 * @Description: 登录表单
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-04 15:12:35
-->

<template>
  <a-form id="components-form-demo-normal-login" :form="form" class="login-form"
    @submit="handleSubmit">
    <a-form-item>
      <a-input v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入你的用户名' }] },
        ]" placeholder="用户名">
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input-password v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入你的密码!' }] },
        ]" type="password" placeholder="密码">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input-password>
    </a-form-item>
    <a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit">
          登录
        </a-button>
      </a-form-item>

    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
          this.$router.push('/main/home')
          return this.$message.success('用户登录成功！')
        }
      })
    },
  },
}
</script>


<style lang="less" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/deep/ .ant-input,
.ant-btn {
  width: 300px;
  height: 50px;
}
.ant-form-item {
  margin-bottom: 5px;
}

/deep/.ant-form-item-control {
  margin-top: 5px;
  margin-bottom: 4px;
}
</style>