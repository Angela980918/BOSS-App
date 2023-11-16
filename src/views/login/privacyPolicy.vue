<script lang="ts" setup>
import { reactive } from 'vue';
import { getPolicy } from '@/api/user';
import { showToast } from 'vant';
const state = reactive({
  htmlText: ''
})
const onClickLeft = () => history.back();
const getPolicyChange = async () => {
  const res: any = await getPolicy({
    id: 16
  })
  console.log(res)
  if (res) {
    state.htmlText = res.records[7].content
  } else {
    showToast(res.msg)
  }
}
getPolicyChange()
</script>

<template>
  <van-nav-bar title="隐私政策" left-text="" left-arrow @click-left="onClickLeft" />
  <div class="text-agree" v-html="state.htmlText"></div>
</template>

<style scoped>
.text-agree {
  padding: 0.5rem 0.7rem;
}
</style>