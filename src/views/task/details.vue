<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { taskDetails, taskCollection } from '@/api/task'
import { showToast } from 'vant';
import TaskDetail from './components/TaskDetail.vue'

const router = useRouter()
const taskId = router.currentRoute.value.params.id

const state = reactive({
  item: '',
  status: 0,
  loading: true
})

// 根据任务ID获取当前任务详情
const getTaskDetail = async () => {
  state.loading = true
  const res: any = await taskDetails({
    task_id: taskId
  })

  if (res) {
    state.item = res.records[0]
    state.status = res.records[0].status
    state.loading = false
  } else {
    showToast(res.msg)
    state.loading = false
  }
}
getTaskDetail()

const leftBack = () => history.back()

// 立即沟通
const gotoMessage = () => {

}

// 收藏
const setTaskCollection = async () => {
  state.loading = true
  const res: any = await taskCollection({
    task_id: taskId
  })

  if (res) {
    state.status = res.data.status
  }
  state.loading = false
  showToast(res.msg)
}
</script>

<template>
  <van-nav-bar title="任务详情" left-arrow @click-left="leftBack" />
  <TaskDetail :item="state.item" v-if="state.item"></TaskDetail>
  <div class="task-detail-footer">
    <van-action-bar-icon :class="state.status == 1 ? 'active' : ''" icon="star-o" text="收藏" @click="setTaskCollection" />
    <van-button type="primary" block @click="gotoMessage">立即沟通</van-button>
  </div>
</template>

<style scoped>
.task-detail-footer {
  display: flex;
  position: fixed;
  left: 0;
  width: 100%;
  align-items: center;
  background: #ffffff;
  bottom: 0;
  padding: 0.64rem 0;
}

.task-detail-footer button {
  margin-right: 0.64rem;
}

.task-detail-footer .active>>>.van-icon-star-o:before {
  color: #FE8F27;
}
</style>