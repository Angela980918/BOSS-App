<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <!-- <router-view v-slot="{ Component }">
    <keep-alive v-if="$route.meta.keepAlive">
      <component :is="Component" />
    </keep-alive>

    <component v-else :is="Component" />
  </router-view> -->
</template>


<style scoped></style>