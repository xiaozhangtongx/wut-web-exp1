<!--
 * @Description: 注册表单
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-05 17:19:00
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
          'newpwd',
          { rules: [{ required: true, message: '请输入你的新密码!' }] },
        ]" type="password" placeholder="新密码">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-input-password v-decorator="[
          'confirmpwd',
          { rules: [{ required: true, message: '请确认你的密码!' }] },
        ]" type="password" placeholder="确认密码">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit">
        确定
      </a-button>
    </a-form-item>

  </a-form>
</template>

<script>
export default {
  data() {
    return {}
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_resetpwd' })
  },
  methods: {
    // 判断密码是否相同
    confirmPwd() {
      if (this.confirmpwd == this.newpwd) {
        this.$router.push('/user/login')
        return this.$message.success('密码修改成功！')
      } else {
        return this.$message.error('你输入的密码不同！')
      }
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        // console.log(values)
        if (!err) {
          if (values.newpwd == values.confirmpwd) {
            this.$router.push('/user/login')
            return this.$message.success('密码修改成功！')
          } else {
            return this.$message.error('你输入的密码不同！')
          }
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
  margin-bottom: 10px;
}

/deep/.ant-form-item-control {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>