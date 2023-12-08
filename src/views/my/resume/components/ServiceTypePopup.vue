<!-- 服务类型弹窗 -->
<script lang="ts" setup>
import { inject, reactive } from 'vue'
const { closeServiceType } = inject('popup') as any
import { myStore } from '@/store/my'
const store = myStore()
const state = reactive({
  serviceValue: []
})

const props = defineProps({
  serviceItem: {
    type: String
  }
})
if (props.serviceItem) {
  // 转化为数组
  let value = props.serviceItem.split(",")
  state.serviceValue = value
}
</script>

<template>
  <van-nav-bar title="服务类型" left-arrow @click-left="closeServiceType('')" />
  <van-checkbox-group v-model="state.serviceValue" ref="checkboxGroup">
    <van-checkbox :name="item" shape="square" v-for="(item, index) in store.jobsType" :key="index">{{ item
    }}</van-checkbox>
  </van-checkbox-group>
  <van-button class="wy-submit" @click="closeServiceType(state.serviceValue)">保存</van-button>
</template>

<style scoped>
.van-checkbox-group {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
</style>