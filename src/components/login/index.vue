<template>
  <div class="login-container">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <ElForm ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="cart">
        <div class="imgcontainer">
          <div class="title-containerr">
            <h1 class="titler">
              sing in
            </h1>
          </div>
        </div>

        <div class="container">
          <ElFormItem prop="username" :label="'نام کاربری'">
            <ElInput
              v-model="loginForm.username"
              prefix-icon="el-icon-user"
              :placeholder="'لطفا نام کاربری خود را وارد کنید'"
              name="username"
              type="text"
              @keyup.native.enter="handleLogin()"
            />
          </ElFormItem>
          <ElFormItem prop="password" :label="'گذرواژه'">
            <ElInput
              v-model="loginForm.password"
              prefix-icon="el-icon-key"
              :placeholder="'لطفا گذرواژه را وارد کنید'"
              name="password"
              :type="passwordType"
              show-password
              @keyup.native.enter="handleLogin()"
            />
          </ElFormItem>
          <ElCheckbox v-model="loginForm.ldap" class="ldap-check">
            احراز هویت سازمانی
          </ElCheckbox>
          <ElButton
            class="login-btn"
            :loading="loading"
            type="primary"
            style="width:100%;margin-bottom:30px;"
            @click.native.prevent="handleLogin"
          >
            ورود
          </ElButton>
        </div>

        <div class="container" @click="forgetPassword">
          <span class="psw">
            رمز عبور خود را فراموش کرده اید؟
          </span>
        </div>
      </div>
    </ElForm>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {

        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
