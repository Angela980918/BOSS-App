<!-- 个人简历 -->
<script lang="ts" setup>
import PersonInfo from './components/PersonInfo.vue'
import PersonAdvantage from './components/PersonAdvantage.vue'
import PositionType from './components/PositionType.vue'
import ExcellentSkill from './components/ExcellentSkill.vue'
import WorkExperience from './components/WorkExperience.vue'
import ProjectExperience from './components/ProjectExperience.vue'
import EducationalExperience from './components/EducationalExperience.vue'
import { myStore } from '@/store/my'

const store = myStore()
// 简历信息
store.getResumeDetail()
// 简历数据字典
store.getResumeDict()

const leftBack = () => {
  history.back();
}
</script>

<template>
  <van-nav-bar title="我的简历" left-arrow @click-left="leftBack" />

  <PersonInfo :item="store.resumeInfo"></PersonInfo>
  <PersonAdvantage></PersonAdvantage>
  <PositionType></PositionType>
  <ExcellentSkill></ExcellentSkill>
  <WorkExperience></WorkExperience>
  <ProjectExperience></ProjectExperience>
  <EducationalExperience></EducationalExperience>
  <van-button class="resume-btn" type="primary">预览简历</van-button>
</template>

<style scoped>
.resume {
  height: calc(100vh - 46px - 3rem);
  overflow: auto;
}

.resume-btn {
  height: 2.35rem;
  background: linear-gradient(90deg, #FEA829, #FE8F27);
  border-radius: 0.27rem;
  margin: 0 0.64rem 0.64rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100vw - 1.28rem);
  border: none;
  font-size: 0.8rem;
  font-weight: 400;
  color: #FFFFFF;
}
</style>