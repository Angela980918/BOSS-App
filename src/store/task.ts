import { defineStore } from "pinia";
import { cityList } from "../api/task";
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
      areaList: [], // 城市地区列表
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

    // 获取城市地区列表
    async getCityList() {
      const res: any = await cityList({});
      if (res) {
        this.cityList = res;
        let city: any = [];
        for (var i = 0; i < res.length; i++) {
          city.push({
            text: res[i].name,
            children: [],
          });
          if (res[i].children && res[i].children.length) {
            for (var j = 0; j < res[i].children.length; j++) {
              city[i].children.push({
                text: res[i].children[j].name,
              });
            }
          }
        }
        this.areaList = city;
      }
    },
  },
});
