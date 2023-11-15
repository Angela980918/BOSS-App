<script setup lang="ts">
import { reactive } from "vue";
import FooterTabbar from "@/components/FooterTabbar.vue";
import ContractList from "@/components/list/ContractList.vue";

const taskList = reactive([
  {
    id: 1,
  },
  {
    id: 2,
  },
]);
</script>

<template>
  <ContractList :contract-list="taskList" />
  <FooterTabbar />
</template>

<style scoped></style>