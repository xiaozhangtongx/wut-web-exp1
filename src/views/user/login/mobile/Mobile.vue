<!--
 * @Description: 移动端登录界面
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-04 13:32:30
-->
<template>
  <div id="mobile-login">
    <a-layout style="min-height: 100vh">
      <a-layout-content class="content">
        <h1> 登录</h1>
        <div class="login-form">
          <li id="li1">
            <OtherLoginWays />
          </li>
          <li id="li2">
            <a-divider>或 手动登录</a-divider>
          </li>
          <li id="li3">
            <LoginFrom />
          </li>
        </div>

      </a-layout-content>
      <a-layout-footer>
        <li>
          <router-link to="/user/register">注册</router-link>
        </li>
        <li>
          <router-link to="/user/resetpwd">忘记密码</router-link>
        </li>
      </a-layout-footer>
    </a-layout>

  </div>
</template>

<script>
import LoginFrom from '@/components/user/loginform/LoginFrom'
import OtherLoginWays from '@/components/user/loginform/OtherLoginWays'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    LoginFrom,
    OtherLoginWays,
  },
}
</script>

<style scoped lang='less'>
#mobile-login {
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
    .login-form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      #li1,
      #li3 {
        flex: 6;
      }
      #li2 {
        flex: 1;
        height: 100%;
        width: 100%;
        .ant-divider-horizontal.ant-divider-with-text-center::before,
        .ant-divider-horizontal.ant-divider-with-text-left::before,
        .ant-divider-horizontal.ant-divider-with-text-right::before,
        .ant-divider-horizontal.ant-divider-with-text-center::after,
        .ant-divider-horizontal.ant-divider-with-text-left::after,
        .ant-divider-horizontal.ant-divider-with-text-right::after {
          border-top: 1px solid #797676;
        }
        .ant-divider-vertical {
          height: 100%;
        }
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
}
</style>