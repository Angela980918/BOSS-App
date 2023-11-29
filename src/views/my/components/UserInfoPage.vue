<!-- 个人信息 -->
<script lang="ts" setup>
import { reactive, inject } from 'vue';
import { taskStore } from '@/store/task'
import { myStore } from '@/store/my'
import { common } from '@/utils/common'
const { closeChange } = inject('popup') as any
import { uploadImage, userModify } from '@/api/my';
const store = myStore()
const tsStore = taskStore()
if (!tsStore.areaList.length) {
  tsStore.getCityList()
}
const state = reactive({
  fileList: [],
  showSex: false,
  showBirthday: false,
  showWorkTime: false,
  showCity: false,
  loading: false,
  userName: '',
  sex: '',
  birthday: '',
  workTime: '',
  city: '',
  area: '',
  minDate: new Date(1999, 0, 1),
  maxDate: new Date()
})

// 初始化数据
const setInfo = () => {
  state.userName = store.userInfo.user_name;
  state.sex = common.sex(store.userInfo.sex)
  state.birthday = store.userInfo.birthday
  state.workTime = store.userInfo.work_time
  state.city = store.userInfo.city
  state.area = store.userInfo.area
  if (store.userInfo.it_head) {
    state.fileList = [{
      url: store.userInfo.it_head
    }]
  }
}

if (!store.userInfo.user_name) {
  (async function () {
    await store.getUserInfo()
    setInfo()
  })()
} else {
  console.log("setInfo")
  setInfo()
  console.log(state)
}

// 性别
const sexList = [
  { name: '男' },
  { name: '女' }
]

const afterRead = async (file: any) => {
  console.log(file.file)
  file.status = 'uploading'
  file.message = '上传中...'
  let param = new FormData()
  param.append('user', 'test')
  param.append('file', file.file)
  const res = await uploadImage(param)
  console.log(res)
  file.url = res.imageUrl
  file.status = 'done'
  file.message = '上传成功'
  state.fileList = [file]
}

const deleteFile = () => {
  state.fileList = []
}

// 性别选择
const sexSelect = (value: any) => {
  state.sex = value.name
}

// 出生年月日
const birthdayConfirm = (value: any) => {
  const date = value.selectedValues
  state.birthday = date[0] + "-" + date[1] + "-" + date[2]
  state.showBirthday = false
}

// 工作年月日
const workTimeConfirm = (value: any) => {
  const date = value.selectedValues
  console.log(date)
  state.workTime = date[0] + "年" + date[1] + "月"
  console.log(state.workTime)
  state.showWorkTime = false
}

//  所在城市
const cityConfirm = (value: any) => {
  const position = value.selectedOptions
  state.city = position[0].text
  state.area = position[1].text
  state.showCity = false
}

// 提交表单
const onSubmit = (values: any) => {
  console.log('提交', values)
}
</script>

<template>
  <van-nav-bar title="个人信息" left-arrow @click-left="closeChange" />
  <div class="user-page">
    <van-form @submit="onSubmit">
      <div class="user-pic">
        <van-uploader  v-model="state.fileList" accept=".jpg,.png" :after-read="afterRead" :before-delete="deleteFile" max-count="1" />
      </div>

      <div class="user-item">
        <h5>姓名</h5>
        <van-field label="" v-model="state.userName" placeholder="请输入您的姓名" />
      </div>

      <div class="user-item">
        <h5>性别</h5>
        <van-field v-model="state.sex" placeholder="请选择您的性别" @click="state.showSex = true" readonly is-link />
        <van-action-sheet v-model:show="state.showSex" :actions="sexList" cancel-text="取消" close-on-click-action
          @select="sexSelect" />
      </div>

      <div class="user-item">
        <h5>出生日期</h5>
        <van-field v-model="state.birthday" placeholder="请选择您的出生日期" @click="state.showBirthday = true" readonly is-link />
        <van-action-sheet v-model:show="state.showBirthday">
          <van-date-picker type="year-month" title="选择年月日" :min-date="state.minDate" :max-date="state.maxDate"
            @confirm="birthdayConfirm" @cancel="state.showBirthday = false" />
        </van-action-sheet>
      </div>

      <div class="user-item">
        <h5>参加工作时间</h5>
        <van-field v-model="state.workTime" placeholder="请选择您的工作时间" @click="state.showWorkTime = true" readonly is-link />
        <van-action-sheet v-model:show="state.showWorkTime">
          <van-date-picker type="year-month" title="选择年月日" :min-date="state.minDate" :max-date="state.maxDate"
            @confirm="workTimeConfirm" @cancel="state.showWorkTime = false" />
        </van-action-sheet>
      </div>

      <div class="user-item">
        <h5>所在城市</h5>
        <van-field v-model="state.city" placeholder="请选择您的城市" @click="state.showCity = true" readonly is-link />
        <van-action-sheet v-model:show="state.showCity">
          <van-picker title="选择所在城市" :columns="tsStore.areaList" @confirm="cityConfirm" :columns-num="2"
            @cancel="state.showCity = false" />
        </van-action-sheet>
      </div>
      <van-button class="wy-confirm-btn" round block native-type="submit">
        提交
      </van-button>
    </van-form>
  </div>
</template>

<style scoped>
:deep(.van-image__img) {
  border-radius: 50%;
}

:deep(.van-picker__confirm) {
  color: #FE8F27
}

:deep(.van-uploader__upload) {
  margin: 0;
}

.user-page {
  margin: 0 0.6rem;
}

.user-pic {
  text-align: center;
  padding: 0.67rem;
  margin-bottom: 1.47rem;
  border-bottom: 1px solid #f3f3f3;
}

.user-pic img {
  width: 3.7rem;
  height: 3.7rem;
  border-radius: 50%;
}

.wy-confirm-btn {
  height: 2.35rem;
  line-height: 2.35rem;
  background: linear-gradient(90deg, #FEA829, #FE8F27);
  border-radius: 0.27rem;
  width: calc(100vw - 1.2rem);
  border: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 0 0.6rem 0.6rem;
  font-size: 0.8rem;
  color: #FFFFFF;
}
</style>