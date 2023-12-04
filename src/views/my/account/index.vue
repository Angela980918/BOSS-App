<!-- 我的账户 -->
<script lang="ts" setup>
import AccountInfo from '../components/AccountInfo.vue'

const leftBack = () => { history.back() }
</script>

<template>
  <van-nav-bar title="我的账户" left-arrow @click-left="leftBack" />
  <AccountInfo></AccountInfo>
</template>

<style scoped>
:deep(.van-nav-bar__content) {
  background: #FF8E00;
  /* background: red; */

}

:deep(.van-nav-bar__title),
:deep(.van-icon-arrow-left:before) {
  color: #ffffff;
}

.van-hairline--bottom:after {
  border: 0;
}

dl {
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-around;
}

dl dt {
  padding: 1.47rem 0 0.59rem;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 500;
  color: #666666;
}

dl dt.active {
  color: #FF8E00;
  border-bottom: 1px solid #FF8E00;
}</style>