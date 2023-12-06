  <!-- 个人优点填写弹窗 -->
<script lang="ts" setup>
import { showToast } from 'vant';
import { reactive, inject } from 'vue';
import { personAdvantage } from '@/api/my'
const { closeChange } = inject('popup') as any
import { myStore } from '@/store/my'


const store = myStore()
const state = reactive({
  value: store.resumeInfo.advantage
})

// 提交
const submit = async () => {
  console.log(state.value)
  if (!state.value) {
    showToast('请输入个人优势')
    return
  }
  const res = await personAdvantage({
    "advantage": state.value
  })
  if (res) {
    closeChange()
    showToast('保存成功')
  } else {
    showToast('保存失败')
  }
}
</script>
  
<template>
  <van-nav-bar title="个人优点" left-arrow @click-left="closeChange" />
  <van-field v-model="state.value" rows="12" autosize label="" type="textarea" maxlength="500" placeholder="请输入您的个人优势"
    show-word-limit />
  <van-button class="wy-submit" @click="submit">保存</van-button>
</template>
  
<style scoped></style>