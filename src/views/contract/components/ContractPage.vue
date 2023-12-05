<script lang="ts" setup>
import { reactive } from 'vue';
import { contractList } from '@/api/contract'
import ContractList from '@/components/list/ContractList.vue'
import { showToast } from 'vant';

const tabs = [
  {
    type: 2,
    text: "待签约"
  },
  {
    type: 3,
    text: "履约中"
  },
  {
    type: 4,
    text: "已完成"
  },
  {
    type: 5,
    text: "已失效"
  },
]

const state = reactive({
  loading: false,
  type: tabs[0].type,
  list: [],
  activeIndex: 0
})

// 设置选中标签页
const setTabList = (type: number) => {
  if (state.type === type) return
  state.type = type
  getContractList()
}

// 获取合约列表
const getContractList = async () => {
  state.loading = true
  const res: any = await contractList({ is_contract_type: state.type })
  if (res) {
    state.list = res.records
  } else {
    showToast(res.msg)
  }
  state.loading = false
  state.activeIndex++
}

getContractList()

const onChangeTab = (activeTab) => {
  state.type = activeTab
  getContractList()
}

</script>

<template>
  <!-- <div class="contract-tab">
    <span v-for="(item, index) in tabs" :class="state.type === item.type ? 'active' : ''" :key="index"
      @click="setTabList(item.type)">{{ item.text }}<i></i></span>
  </div>

  <van-pull-refresh v-model="state.loading" @refresh="getContractList">
    <ContractList :contractList="state.list"></ContractList>
    <van-loading v-if="state.activeIndex === 0 && state.loading">加载中...</van-loading>
    <div class="wy-no-data" v-if="!state.loading && state.list.length == 0">暂无数据</div>
  </van-pull-refresh> -->

  <van-tabs v-model:active="state.type" title-active-color="#FF9415" color="#FF9415" @change="onChangeTab">
    <van-tab v-for="(item, index) in tabs" :key="index" :title="item.text">
      <van-pull-refresh v-model="state.loading" @refresh="getContractList">
        <ContractList :contractList="state.list"></ContractList>
        <van-loading v-if="state.activeIndex === 0 && state.loading">加载中...</van-loading>
        <div class="wy-no-data" v-if="!state.loading && state.list.length == 0">暂无数据</div>
      </van-pull-refresh>
    </van-tab>
  </van-tabs>
</template>

<style  scoped>
.van-pull-refresh {
  height: calc(100vh - 46px - 5rem);
  overflow: auto;
}

.contract-tab {
  display: flex;
}

.contract-tab span {
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 400;
  color: #666666;
  flex: 1;
  align-items: center;
  border-bottom: 1px solid #EEEEEE;
  padding: 0.59rem 0;
  text-align: center;
  position: relative;
}

.contract-tab span.active {
  color: #FF9415;
}

.contract-tab span.active i {
  width: 1.63rem;
  height: 0.05rem;
  background: #FF9415;
  position: absolute;
  bottom: 0px;
  left: 50%;
  margin-left: -0.815rem;
}
</style>