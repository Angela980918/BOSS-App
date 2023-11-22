import { defineStore } from "pinia";

export const taskStore = defineStore({
  id: "task",
  state: () => {
    return {
      cityList: [], //城市列表
      cityValue: localStorage.getItem("city") || "北京", // 当前城市
      bannerList: [], //轮播图
      positionList: [], //职位列表
      screenList: {}, // 筛选列表
      hotSearchList: [], // 热门搜索
    };
  },
  actions: {
    // 设置城市列表
    setCityList(data: any) {
      this.cityList = data;
    },

    // 设置当前城市
    setCityValue(name: string) {
      this.cityValue = name;
    },

    // 设置轮播图
    setBannerList(images: any) {
      this.bannerList = images;
    },

    //设置职位列表
    setPositionList(data: any) {
      this.positionList = data;
    },

    // 设置筛选列表
    setScreenList(data: any) {
      this.screenList = data;
    },

    // 设置热门搜索
    setHotSearchList(data: any) {
      this.hotSearchList = data;
    },
  },
});
