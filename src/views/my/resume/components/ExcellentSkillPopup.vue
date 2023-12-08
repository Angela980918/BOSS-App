<!-- 擅长技能弹窗 -->
<script lang="ts" setup>
import { myStore } from '@/store/my'
import { showToast } from 'vant';
import { reactive, inject, provide } from 'vue';

const store = myStore()
if (store.sysSkillList.length === 0) {
  (async function () {
    await store.getLabelsSkill()
  })()
}
const { closeChange } = inject('popup') as any
</script>

<template>
  <van-nav-bar title="技能关键词" left-arrow @click-left="closeChange" />
  <dl class="skill-list">
    <dt>前端</dt>
    <dt>java <van-icon name="close" /></dt>
    <dt>自定义+</dt>
  </dl>
  <label>请您选择擅长技能</label>
</template>

<style scoped>
.skill-field {
  margin: 0 1rem;
}

.skill-list {
  padding: 1.31rem 1.09rem;
}

.skill-list dt {
  min-width: 4.5rem;
  height: 1.17rem;
  line-height: 1.17rem;
  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  border-radius: 0.27rem;
  font-size: 0.64rem;
  font-weight: 400;
  color: #333333;
  text-align: center;
  display: inline-block;
  margin: 0 0.64rem 0.8rem 0;
}

.skill-list dt.active {
  border: 1px solid #FF8E00;
  color: #FF8E00;
}

.skill-list dt i {
  margin-left: 0.2rem;
}
</style>