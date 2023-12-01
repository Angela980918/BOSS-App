<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component v-if="$route.meta.keepAlive" :is="Component" />
    </keep-alive>
  </router-view>
  <router-view v-if="!$route.meta.keepAlive"></router-view>
</template>


<style scoped></style>