<template>
  <div class="resgiter-container">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <ElForm ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="cart">
        <div class="container">
          <ElFormItem prop="Email" :label="'ایمیل'">
            <ElInput
              v-model="loginForm.Email"
              prefix-icon="el-icon-office-building"
              :placeholder="'لطفاایمیل خود را وارد کنید'"
              name="Email"
              auto-complete="on"
              type="text"
              @keyup.native.enter="handleLogin()"
            />
          </ElFormItem>
          <ElFormItem prop="NumID" :label="'کد ملی'">
            <ElInput
              v-model="loginForm.NumID"
              prefix-icon="el-icon-user"
              :placeholder="'لطفا کد ملی خود را وارد کنید'"
              name="NumID"
              type="text"
              @keyup.native.enter="handleLogin()"
            />
          </ElFormItem>
          <ElFormItem prop="TelNum" :label="'شماره تلفن'">
            <ElInput
              v-model="loginForm.TelNum"
              prefix-icon="el-icon-office-building"
              :placeholder="'لطفا شماره تلفن را وارد کنید'"
              name="TelNum"
              auto-complete="on"
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
            />
          </ElFormItem>

          <ElButton
            class="login-btn"
            :loading="loading"
            type="primary"
            style="width:100%;margin-bottom:30px;"
          >
            ثبت
          </ElButton>
        </div>
      </div>
    </ElForm>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      loginForm: {
        Email: '',
        NumID: '',
        password: '',
        TelNum: ''
      }
    }
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
