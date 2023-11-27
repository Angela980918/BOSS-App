import { defineStore } from "pinia";
import { userInfo, resumeDetail, resumeDict, labelsSkill } from "../api/my";
export const myStore = defineStore({
  id: "my",
  state: () => {
    return {
      userInfo: <any>{}, // 用户基本信息
      companyList: [],
      projectList: [],
      resumeInfo: {},
      experience: [],
      highestEducation: <any>[],
      jobsType: [],
      salaryScope: <any>[],
      sysSkillList: [],
    };
  },

  actions: {
    // 获取用户基本信息
    async getUserInfo() {
      const res = await userInfo();
      if (res) {
        this.userInfo = res;
      }
    },
  },
});
