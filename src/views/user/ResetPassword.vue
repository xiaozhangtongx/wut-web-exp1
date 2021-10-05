<!--
 * @Description: 重置密码
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-05 17:55:23
-->
<template>
  <div id="reagister">
    <a-layout style="min-height: 100vh">
      <a-layout-content class="content">
        <h1>修改密码</h1>
        <ResetPasswordForm />
      </a-layout-content>
      <a-layout-footer>
        <li>
          <router-link to="/user/login">返回登录界面</router-link>
        </li>
      </a-layout-footer>
    </a-layout>

  </div>
</template>

<script>
import ResetPasswordForm from '@/components/user/ResetPasswordForm'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    ResetPasswordForm,
  },
}
</script>

<style scoped lang='less'>
#reagister {
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 90vh;
    h1 {
      font-weight: 800;
      font-size: 30px;
    }
  }
}
.ant-layout-footer {
  background: #3e3e3f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
  padding: 0;
  li {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    a {
      color: #fff;
    }
  }
}
</style>