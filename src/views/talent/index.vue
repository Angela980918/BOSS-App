<script setup lang="ts">
import { reactive } from "vue";
import TalentList from "@/components/list/TalentList.vue";

const talentList = reactive([
  {
    id: 1,
  },
  {
    id: 2,
  },
])
</script>

<template>
  <TalentList :talent-list="talentList" />
</template>

<style scoped></style>