<!-- 账户详情 -->
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { myStore } from '@/store/my'
const store = myStore()
const router = useRouter()

// if (!store.userInfo.user_name) store.getUserInfo()
const gotoPage = (path: any) => {
  router.push(path)
}
</script>

<template>
  <div class="account-info">
    <p>
      <label>账户余额（无忧币）<van-icon @click="gotoPage('/my/account/coinExplain')" name="question-o" /></label>
      <span @click="gotoPage('/my/account/advance')">提现<van-icon name="arrow" /></span>
    </p>
    <h3>{{  store.userInfo.account_price && store.userInfo.account_price.toFixed(2) }}</h3>
  </div>
</template>

<style scoped>
.account-info {
  background: #FF8E00;
  width: 100%;
}

p {
  padding: 1rem 0.67rem 3.57rem;
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 400;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
}

h3 {
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: #FFFFFF;
  padding-bottom: 2.13rem;
  text-align: center;
}
</style>