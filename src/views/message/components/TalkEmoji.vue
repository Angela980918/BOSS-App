<script setup lang="ts">
import { inject } from 'vue'

// 选中图标
const { emojiChange } = inject('popup')
const list = [
  '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘',
  '😗', '😙', '😚', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏',
  '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤',
]

</script>
<template>
  <div>
    <span v-for="(item, index) in list" :key="index" @click="emojiChange(item)">{{ item }}</span>
  </div>
</template>
<style scoped>
div {
  height: 8rem;
  margin-top: 0.64rem;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
}

div span {
  width: 14.28%;
  display: inline-block;
  margin-bottom: 0.32rem;
  font-size: 1.4rem;
  text-align: center;
}
</style>