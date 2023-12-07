  <!-- 职业类型填写弹窗 -->
<script lang="ts" setup>
import PositionType from '../../../task/components/PositionType.vue'
import ServiceTypePopup from './ServiceTypePopup.vue'

import { showToast } from 'vant';
import { reactive, inject, provide } from 'vue';
const { closeChange } = inject('popup') as any
import { myStore } from '@/store/my'
import { jobIntention } from '@/api/my';

const store = myStore()
const state = reactive({
  showPositionType: false,
  showServiceType: false,
  showPriceType: false,
  positionValue: '',
  serviceValue: '',
  priceValue: ''
})

const priceSelect = (value:any) => {
  if (value) state.priceValue = value.name
}
// 关闭职位类型弹窗
const closePositionType = (name: any) => {
  if (name) state.positionValue = name
  state.showPositionType = false
}

// 关闭服务类型弹窗
const closeServiceType = (name: any) => {
  let formatName = name.join(',')
  if (name) state.serviceValue = formatName
  state.showServiceType = false
}

// 保存
const submit = async () => {
  if (!state.positionValue) {
    showToast('请选择职位类型')
    return
  }
  if (!state.serviceValue) {
    showToast('请选服务类型')
    return
  }
  if (!state.priceValue) {
    showToast('请选服务价格')
    return
  }
  const res = await jobIntention({
    "position_name": state.positionValue,
    "service_mode": state.serviceValue,
    "service_price": state.priceValue
  })
  if (res) {
    closeChange()
    showToast('保存成功')
  } else {
    showToast('保存失败')
  }
}

provide('popup', {
  closePositionType,
  closeServiceType
})
</script>
  
<template>
  <van-nav-bar title="求职意愿" left-arrow @click-left="closeChange" />
  <div class="position-list">
    <div class="user-item">
      <h5>职位类型</h5>
      <van-field v-model="state.positionValue" label="" placeholder="请选择您的职位类型" readonly is-link
        @click="state.showPositionType = true" />
    </div>
    <div class="user-item">
      <h5>服务类型</h5>
      <van-field v-model="state.serviceValue" :multple="true" label="" placeholder="请选择您的服务类型" readonly is-link
        @click="state.showServiceType = true" />
    </div>
    <div class="user-item">
      <h5>服务价格</h5>
      <van-field v-model="state.priceValue" label="" placeholder="请选择您的服务价格" readonly is-link
        @click="state.showPriceType = true" />
      <van-action-sheet v-model:show="state.showPriceType" :actions="store.salaryScope" cancel-text="取消"
        close-on-click-action @cancel="state.showPriceType = false" @select="priceSelect" />
    </div>
    <van-button class="wy-submit" @click="submit">保存</van-button>

    <!-- 职位类型弹窗 -->
    <van-popup v-model:show="state.showPositionType" position="right" :style="{ width: '100%', height: '100%' }">
      <PositionType></PositionType>
    </van-popup>


    <!-- 服务类型弹窗 -->
    <van-popup v-model:show="state.showServiceType" :multple="true" position="right"
      :style="{ width: '100%', height: '100%' }">
      <ServiceTypePopup></ServiceTypePopup>
    </van-popup>
  </div>
</template>
  
<style scoped>
.position-list {
  margin: 1.52rem 0.67rem 0;
}
</style>