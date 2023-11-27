<!-- 个人信息-->
<script lang="ts" setup>
import UserInfoPage from '../components/UserInfoPage.vue'
import { provide } from 'vue';

const closeChange = () => {
  history.back();
}
provide('popup', {
  closeChange
})

</script>

<template>
  <UserInfoPage />
</template>

<style scoped></style>