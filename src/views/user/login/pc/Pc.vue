<!--
 * @Description: pc端登录界面
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-04 13:32:30
-->
<template>
  <div id="pc-login">
    <a-layout style="min-height: 100vh">
      <a-layout-content class="content">
        <h1>登录</h1>
        <div class="login-form1">
          <li id="li1">
            <OtherLoginWays />
          </li>
          <li id="li2">
            <a-divider type="vertical" />
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
#pc-login {
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 800;
      font-size: 34px;
    }
    .login-form1 {
      width: 70vw;
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        height: 100%;
        width: 30%;
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
        .ant-divider {
          background-color: rgb(112, 79, 79);
        }
        .ant-divider-vertical {
          height: 80%;
        }
      }
    }
  }
  .ant-layout-footer {
    background: #3e3e3f;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      width: 50%;
      height: 100%;

      text-align: center;
      cursor: pointer;
      a {
        color: #fff;
      }
    }
  }
}
</style>