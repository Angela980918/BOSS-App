<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const gotoDetail = (id: any) => {
  router.push('/contract/details/' + id)
}
// 接收参数
const props = defineProps({
  contractList: {
    type: Array<any>,
    default: () => []
  }
})
</script>

<template>
  <dl v-for="(item, index) in contractList" :key="index" @click="gotoDetail(item.contract_id)">
    <dd>
      <h3>移动端小程序前端开发前端工程师</h3>
      <span>履约中</span>
      <van-icon name="arrow" />
    </dd>

    <dt>
      <label>公司名称</label>
      <span>bbbbbb</span>
    </dt>

    <dt>
      <label>合约类型</label>
      <span>cccccc</span>
    </dt>

    <dt>
      <label>合约周期</label>
      <span>dddddd</span>
    </dt>

    <dt>
      <label>签约时间</label>
      <span>eeeeee</span>
    </dt>

    <dt>
      <label>合约进度</label>
      <span></span>
    </dt>
  </dl>

  <dt class="constract-progress">
    <i class="green"></i>
    <i class="green"></i>
    <i class="orange"></i>
    <i class="red"></i>
  </dt>
</template>

<style scoped>
dl {
  font-size: 0.64rem;
  color: #666666;
  padding: 1rem 0.7rem;
  border-bottom: 1px solid #eeeeee;
}

dl dd {
  display: flex;
  margin-bottom: 0.9rem;
  align-items: center;
}

dl dd h3 {
  font-size: 0.8rem;
  font-weight: 500;
  color: #333333;
  flex: 1;
}

dl dd span {
  text-align: right;
  font-size: 0.75rem;
  color: #FF9415;
}

dl dd i {
  font-size: 0.75rem;
}

dl dt {
  display: flex;
  margin-bottom: 0.72rem;
}

dl dt:last-child {
  margin-bottom: 0;
}

dl dt label {
  flex: 1;
}

dl dt span {
  text-align: right;
}

.constract-progress {
  display: flex;
  height: 0.53rem;
  widows: 100%;
}

.constract-progress {
  display: flex;
  height: 0.53rem;
  widows: 100%;
}

.constract-progress i {
  flex: 1;
  background: #f3f3f3;
  margin: 0 1px;
}

.constract-progress i.green {
  background: #50D400;
}

.constract-progress i.orange {
  background: #FE9215;
}


.constract-progress i.red {
  background: #FF4800;
}
</style>