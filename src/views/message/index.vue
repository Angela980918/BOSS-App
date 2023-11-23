<script setup lang="ts">
import { reactive } from "vue";
import FooterTabbar from "@/components/FooterTabbar.vue";
import MessageList from "@/components/list/MessageList.vue";
import { messageStore } from '@/store/message'

const store = messageStore()

// 1.获取消息列表
store.getSystemMessageList()

// 2.获取聊天消息列表
store.getChatMessageList()
</script>

<template>
  <MessageList :message-list="store.systemMessageList" type="system" />
  <MessageList :message-list="store.messageList" />
  <FooterTabbar />
</template>

<style scoped></style>