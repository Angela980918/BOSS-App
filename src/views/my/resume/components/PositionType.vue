<!-- 职位类型 -->
<script lang="ts" setup>
import { reactive, provide } from 'vue';
import { myStore } from '@/store/my'
import PositionTypePopup from './PositionTypePopup.vue'
const store = myStore()
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
  store.getResumeDetail()
}
provide('popup', {
  closeChange
})
</script>

<template>
  <div>
    职位类型
  </div>
</template>

<style scoped></style>