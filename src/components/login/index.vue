<template>
  <div class="mainLogin">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <ElForm
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <span class="signInStyle">Sing In</span>
      <el-input placeholder="Please input" v-model="email"></el-input>
      <el-input placeholder="Please input password" v-model="password" show-password></el-input>
    </ElForm>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      passwrod: ""
    };
  }
};
</script>


<style lang="scss">
@import "./style.scss";
</style>