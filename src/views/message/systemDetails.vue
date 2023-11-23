<!-- 系统消息详情 -->
<script lang="ts" setup>
import { reactive } from 'vue';
import { systemDetails } from '@/api/message';
import { showToast } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter()
const id = router.currentRoute.value.params.id
const state = reactive({
  item: [],
  loading: false
})

const leftBack = () => {
  history.back();
}

// 获取消息详情
const getSystemDetails = async () => {
  state.loading = true
  const res: any = await systemDetails({
    id: id
  })
  // console.log(res)
  if (res) {
    state.item = res[0]
  } else {
    showToast(res.msg)
  }
  state.loading = false
}
getSystemDetails()
</script>

<template>
  <van-nav-bar title="查看消息" left-arrow @click-left="leftBack" />
  <h3 class="time">{{ state.item.create_time }}</h3>
  <h3>{{ state.item.title }}</h3>
  <p>{{ state.item.content }}</p>
</template>

<style scoped>
.time {
  color: #525050;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
}

h3 {
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 400;
  color: #333333;
  margin: 1.7rem 0.75rem 0.83rem;
}

p {
  font-size: 0.69rem;
  font-weight: 500;
  color: #666666;
  line-height: 1.23rem;
  text-indent: 2em;
}
</style>