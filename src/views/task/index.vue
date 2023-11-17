<script setup lang="ts">
import { reactive, provide } from "vue";
import { useRouter } from 'vue-router';
import { taskStore } from '@/store/task'
import FooterTabbar from "@/components/FooterTabbar.vue";
import TaskList from "@/components/list/TaskList.vue";
import Banner from './components/Banner.vue'
import Screen from './components/Screen.vue'
import PositionType from './components/PositionType.vue'
import CitySwitch from './components/CitySwitch.vue'

const store = taskStore()

// 初始状态
const state = reactive({
  citySwitchBool: false,
  positionTypeBool: false,
  screenBool: false,
  positionValue: '',
  serviceMode: '',
  taskCycle: '',
  pageNum: 0,
  pageSize: 10,
  finished: false,
  loading: false,
  taskList: []
})

const taskList = reactive([
  {
    id: 1,
  },
  {
    id: 2,
  },
])
const router = useRouter()
router
// 搜索跳转
const gotoSearch = () => {
  console.log("搜索跳转")
}

// 关闭弹窗
const closeCitySwitch = (name: any) => {
  // console.log("name:", name)
  if (name) {
    store.setCityValue(name)
  }
  state.citySwitchBool = false
}

provide('popup', {
  closeCitySwitch
})
</script>

<template>
  <div class="task-page">
    <!-- 头部 -->
    <div class="task-top" @click="state.citySwitchBool = true">
      <!-- 城市切换 -->
      <div class="task-top-city">
        <i></i>
        <strong>{{ store.cityValue }}</strong>
        <span></span>
      </div>

      <!-- 输入框 -->
      <input readonly placeholder="请输入想要搜索的内容" @click="gotoSearch" />
      <!-- 消息列表 -->
      <router-link to="/message/systemList" class="task-icon-message"></router-link>
    </div>

    <!-- 轮播图 -->
    <Banner />

    <!-- 任务标题 -->
    <div class="task-title">
      <h3>最新任务</h3>
      <div class="task-positon-pop">职位类型<span></span></div>
      <div class="task-screen-pop">筛选<span></span></div>
    </div>
    <TaskList :task-list="taskList" />

    <!-- 切换城市弹窗 -->
    <van-popup v-model:show="state.citySwitchBool" position="right" :style="{ width: '100%', height: '100%' }">
      <CitySwitch></CitySwitch>
    </van-popup>
  </div>

  <FooterTabbar />
</template>

<style scoped>
.task-page {
  background: #f9f9f9;
  padding: 0 0.59rem 3rem;
  min-height: calc(100vh - 3rem);
}

.task-top {
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.91rem;
}

.task-top-city {
  display: flex;
  align-items: center;
}

.task-top-city i {
  width: 1.04rem;
  height: 1.01rem;
  background: url('@/assets/img/icon/icon-place.png') no-repeat;
  background-size: 0.9rem;
  background-position-y: center;
}

.task-top-city strong {
  font-size: 0.8rem;
  font-weight: 500;
  color: #333333;
  margin-left: 0.1rem;
}

.task-top-city span {
  margin: 0 0.6rem 0 0.2rem;
  display: inline-block;
  border-left: 0.18rem solid transparent;
  border-right: 0.18rem solid transparent;
  border-top: 0.36rem solid #333333;
}

.task-top input {
  flex: 1;
  height: 1.71rem;
  background: #ffffff url('@/assets/img/icon/icon-search.png') 0.35rem 0.3rem no-repeat;
  background-size: 0.89rem;
  background-position-y: center;
  border: 0.03px solid #EDEDED;
  border-radius: 0.85rem;
  font-size: 0.69rem;
  font-weight: 300;
  color: #999999;
  padding-left: 1.7rem;
}

.task-icon-message {
  width: 1.31rem;
  height: 1.28rem;
  background: url('@/assets/img/icon/icon-remind.png') no-repeat;
  background-size: 1.2rem;
  margin-left: 0.27rem;
  background-position-y: center;
}

.task-title {
  display: flex;
  align-items: center;
  margin-bottom: 0.67rem;
  margin-top: 1.44rem;
}

.task-title h3 {
  flex: 1;
  font-size: 0.96rem;
  line-height: 0.96rem;
  font-weight: bold;
  color: #333333;
}

.task-positon-pop,
.task-screen-pop {
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 300;
  color: #666666;
  margin-left: 0.56rem;
}

.task-positon-pop span,
.task-screen-pop span {
  display: inline-block;
  border-left: 0.18rem solid transparent;
  border-right: 0.18rem solid transparent;
  border-top: 0.36rem solid #333333;
  margin-left: 0.25rem;
}
</style>