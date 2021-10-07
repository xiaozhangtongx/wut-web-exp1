<!--
 * @Description: 注册表单
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-05 17:19:00
-->
<template>
  <a-form id="components-form-demo-normal-login" :form="form" class="register-form"
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
      <a-input v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: '请检查你邮箱的格式是否正确！',
              },
              {
                required: true,
                message: '请输入你的邮箱！',
              },
            ],
          },
        ]" placeholder="邮箱">
        <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-date-picker placeholder="年/月/日" format="YYYY/MM/DD" v-decorator="[
          'date',
          { rules: [{ required: true, message: '请输入日期' }] },
        ]">
        <template> </template>
      </a-date-picker>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit">
        注册
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_register' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
          this.$router.push('/user/login')
          return this.$message.success('用户注册成功！')
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.register-form {
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
