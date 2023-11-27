<!-- 个人信息 -->
<script lang="ts" setup>
import { reactive, inject } from 'vue';
import { DatePicker } from 'vant';
const { closeChange } = inject('popup') as any

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
  minDate: new Date(1970, 1, 1),
  maxDate: new Date()
})

const sexList = [
  { name: '男' },
  { name: '女' }
]

const afterRead = (file: any) => {

}

const deleteFile = (file: any) => {

}

// 性别选择
const sexSelect = (value: any) => {
  state.sex = value.name
}

// 出生年月日
const birthdayConfirm = (value: any) => {
  state.showBirthday = false
  console.log(value)
}

// 工作年月日
const workTimeConfirm = (value: any) => {
  state.showWorkTime = false
  console.log(value)
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
        <van-uploader accept=".jpg,.png" :after-read="afterRead" :before-delete="deleteFile" max-count="1" />
      </div>

      <div class="user-item">
        <h5>姓名</h5>
        <van-field label="" placeholder="请输入您的姓名" />
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
        <van-field label="" placeholder="请选择您的工作时间" @click="state.showWorkTime = true" readonly is-link />
        <van-action-sheet v-model:show="state.showWorkTime">
          <van-date-picker type="year-month" title="选择年月日" :min-date="state.minDate" :max-date="state.maxDate"
            @confirm="workTimeConfirm" @cancel="state.showWorkTime = false" />
        </van-action-sheet>
      </div>

      <div class="user-item">
        <h5>所在城市</h5>
        <van-field label="" placeholder="请选择您的城市" readonly is-link />
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