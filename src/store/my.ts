import { defineStore } from "pinia";
import { userInfo, resumeDetail, resumeDict, labelsSkill } from "../api/my";
export const myStore = defineStore({
  id: "my",
  state: () => {
    return {
      userInfo: <any>{}, // 用户基本信息
      companyList: [],
      projectList: [],
      resumeInfo: {}, // 简历信息
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

    // 获取简历信息
    async getResumeDetail() {
      if (Object.keys({}).length === 0) await this.getUserInfo();
      const res = await resumeDetail(this.userInfo);
      if (res && res.data[0]) {
        this.companyList = res.data[0].companyList;
        this.projectList = res.data[0].projectList;
        this.resumeInfo = res.data[0].info[0];
      }
    },
  },
});
