<!-- 个人简历 -->
<script lang="ts" setup>
import PersonInfo from './components/PersonInfo.vue'
import PersonAdvantage from './components/PersonAdvantage.vue'
import PositionType from './components/PositionType.vue'
import ExcellentSkill from './components/ExcellentSkill.vue'
import WorkExperience from './components/WorkExperience.vue'
import ProjectExperience from './components/ProjectExperience.vue'
import EducationalExperience from './components/EducationalExperience.vue'

const leftBack = () => {
  history.back();
}
</script>

<template>
  <van-nav-bar title="我的简历" left-arrow @click-left="leftBack" />

  <PersonInfo></PersonInfo>
  <PersonAdvantage></PersonAdvantage>
  <PositionType></PositionType>
  <ExcellentSkill></ExcellentSkill>
  <WorkExperience></WorkExperience>
  <ProjectExperience></ProjectExperience>
  <EducationalExperience></EducationalExperience>
</template>

<style scoped></style>