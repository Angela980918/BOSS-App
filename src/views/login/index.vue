<script setup lang="ts">

</script>

<template>
  <div>
    <van-icon name="arrow-left" class="icon-left" />
    <div class="login-form">
      <h3>手机登录</h3>
      <div class="login-form-item">
        <i class="icon-phone"></i>
        <input placeholder="请输入手机号" type="text" />
      </div>
      <div class="login-form-item">
        <i class="icon-code"></i>
        <input placeholder="请输入验证码" type="text" />
        <span></span>
      </div>
      <van-button type="primary" block>登录</van-button>
      <div class="login-form-label">
        <van-checkbox>我已阅读</van-checkbox>
        <router-link to="/login/serviceAgree">《IT企业平台服务协议》</router-link>和
        <router-link to="/login/privacyPolicy">《隐私政策》</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-left {
  font-size: 0.8rem;
  margin: 0.67rem 0 0 0.67rem;
}

.login-form {
  padding: 0 1.07rem;
}

.login-form h3 {
  font-size: 1.39rem;
  line-height: 1.39rem;
  font-weight: 400;
  color: #333333;
  margin-top: 2.35rem;
  margin-bottom: 4rem;
  padding-left: 0.3rem;
}

.login-form-item {
  display: flex;
  font-size: 0.75rem;
  font-weight: 300;
  color: #9FA7AD;
  margin: 0 0.18rem 2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #E7E7E7;
  align-items: center;
}

.icon-phone {
  background: url('@/assets/img/icon/icon-phone.png') no-repeat;
  background-size: 100%;
  width: 1.01rem;
  height: 1.01rem;
}

.icon-code {
  background: url('@/assets/img/icon/icon-code.png') no-repeat;
  background-size: 100%;
  width: 1.01rem;
  height: 1.01rem;
}

.login-form-item input {
  flex: 1;
  margin-left: 0.48rem;
}

.login-form-item span {
  font-size: 0.75rem;
  font-weight: 300;
  color: #FE9527;
  border-left: 1px solid #FE9527;
  line-height: 0.75rem;
  padding-left: 0.56rem;
}

.login-form-label {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  width: 100%;
}
</style>