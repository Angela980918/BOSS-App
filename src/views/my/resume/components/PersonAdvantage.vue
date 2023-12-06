<!-- 个人优点 -->
<script lang="ts" setup>
import { reactive, provide } from 'vue';
import { myStore } from '@/store/my'
import PersonAdvantagePopup from './PersonAdvantagePopup.vue'

const closeChange = () => {
  console.log("closeChange")
  state.show = false
  store.getResumeDetail()
}
provide('popup', {
  closeChange
})
const state = reactive({
  show: false
})
const store = myStore()
</script>

<template>
  <div class="resume-label">
    <h3>个人优势<img src="@/assets/img/my/icon-feedback.png" @click="state.show = true" />
    </h3>
    <label>{{ store.resumeInfo.advantage || '请您填写个人优势' }}</label>
  </div>

  <!-- 个人优点填写弹窗 -->
  <van-popup v-model:show="state.show" position="right" :style="{ width: '100%', height: '100%' }">
    <PersonAdvantagePopup></PersonAdvantagePopup>
  </van-popup>
</template>

<style scoped>
.resume-label h3 {
  display: flex;
  align-items: flex-end;
}

.resume-label img {
  width: 1rem;
  height: 1rem;
  margin-left: 0.32rem;
}
</style>