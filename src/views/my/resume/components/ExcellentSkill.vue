<!-- 擅长技能 -->
<script lang="ts" setup>
import ExcellentSkillPopup from './ExcellentSkillPopup.vue'
import { reactive, provide } from 'vue';
const state = reactive({
  show: false
})

const props = defineProps({
  page: {
    type: String
  }
})

const closeChange = () => {
  state.show = false
}
provide('popup', {
  closeChange
})
</script>

<template>
  <div class="resume-label">
    <h3>擅长技能<van-icon name="add-o" @click="state.show = true" /></h3>

    <label>请您填写擅长技能</label>
  </div>

  <!--擅长技能弹窗-->
  <van-popup v-model:show="state.show" position="right" :style="{ width: '100%', height: '100%' }">
    <ExcellentSkillPopup></ExcellentSkillPopup>
  </van-popup>
</template>

<style scoped>
.text-list dt {
  font-size: 0.59rem;
  line-height: 0.59rem;
  font-weight: 300;
  color: #666666;
  padding: 0.4rem 0.5rem;
  margin-right: 0.27rem;
  margin-bottom: 0.3rem;
  background: #F6F7F8;
  border-radius: 0.16rem;
  display: inline-block;
}
</style>