import { defineStore } from "pinia";
import { systemList, chatMessageList } from "../api/message";

export const messageStore = defineStore({
  id: "message",
  state: () => {
    return {
      systemMessageList: [], // 通知消息
      systemNewMessage: [], // 新通知消息
      messageList: [], // 聊天记录
    };
  },

  actions: {
    // 获取系统消息
    async getSystemMessageList() {
      const res = await systemList({
        type: 0,
        is_informtype: 2,
      });
      if (res) {
        this.systemMessageList = res.data;
        if (this.systemMessageList[0])
          this.systemNewMessage = [this.systemMessageList[0]];
      }
    },

    // 获取聊天列表
    async getChatMessageList() {
      const res = await chatMessageList({});
      if (res) {
        this.messageList = res.data;
      }
    },
  },
});
