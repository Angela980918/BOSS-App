<!-- 我的账户 -->
<script lang="ts" setup>
import { reactive } from 'vue';
import AccountInfo from '../components/AccountInfo.vue'
import AccountList from '../components/AccountList.vue'
import { transferList, incomeList } from '@/api/my'

const tabs = [
  {
    type: 0,
    text: '全部'
  },
  {
    type: 1,
    text: '收入'
  },
  {
    type: 2,
    text: '提现'
  }
]

const state = reactive({
  type: tabs[0].type,
  loading: false,
  list: [],
  activeIndex: 0
})

const onChangeTab = async (value: any) => {
  state.activeIndex++
  state.list = []
  if (state.type == 0) {
    console.log("type=0")
    await getTransferList()
    await getIncomeList({
      type: value
    })
    state.list = state.list.flat(2)
  }
  if (state.type == 1) {
    console.log("type=1")
    await getIncomeList({
      type: value
    })
    state.list = state.list.flat(2)
  }
  if (state.type == 2) {
    console.log("type=2")
    await getTransferList()
    state.list = state.list.flat(2)
  }
}

// 收入
const getTransferList = async () => {
  state.loading = true
  const res = await transferList()
  if (res) {
    state.list.push(res)
  }
  state.loading = false
}

// 提现
const getIncomeList = async (data) => {
  state.loading = true
  const res = await incomeList(data)
  if (res) {
    state.list.push(res)
  }
  state.loading = false
}

onChangeTab(0)

const leftBack = () => { history.back() }
</script>

<template>
  <van-nav-bar title="我的账户" left-arrow @click-left="leftBack" />
  <AccountInfo></AccountInfo>

  <van-tabs v-model:active="state.type" title-active-color="#FF9415" color="#FF9415" @change="onChangeTab">
    <van-tab v-for="(item, index) in tabs" :key="index" :title="item.text">
      <van-pull-refresh v-model="state.loading" @refresh="onChangeTab">
        <AccountList :list="state.list"></AccountList>
        <van-loading v-if="state.activeIndex === 0 && state.loading">加载中...</van-loading>
        <div class="wy-no-data" v-if="!state.loading && state.list.length == 0">暂无数据</div>
      </van-pull-refresh>
    </van-tab>
  </van-tabs>
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
}
</style>