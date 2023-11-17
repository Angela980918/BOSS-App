import { defineStore } from "pinia";

export const taskStore = defineStore({
  id: "task",
  state: () => {
    return {
      cityList: [], //城市列表
      cityValue: localStorage.getItem("city") || "广州", // 当前城市
      bannerList: [], //轮播图
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
  },
});
