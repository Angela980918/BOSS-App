<!-- 个人设置 -->
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import setItem from '../components/setItem.vue'
import { userStore } from '@/store/user'
const store = userStore()
const router = useRouter()

// 推出登录
const logout = () => {
  store.logout()
  router.push('/login')
}

// 返回
const leftBack = () => { 
  history.back() 
}


</script>

<template>
  <div class="set-page">
    <van-nav-bar title="我的设置" left-arrow @click-left="leftBack" />
    <setItem></setItem>
    <van-button class="set-btn" @click="logout">退出登录</van-button>
  </div>
</template>

<style scoped>
.set-page {
  height: 100vh;
  background: #f9f9f9;
}

.set-btn {
  height: 2.35rem;
  line-height: 2.35rem;
  background: linear-gradient(90deg, #FFA400, #FF8900);
  border-radius: 0.27rem;
  font-size: 0.8rem;
  color: #FFFFFF;
  border: 0;
  text-align: center;
  width: calc(100vw - 1.28rem);
  margin: 0 0.64rem;
}
</style>