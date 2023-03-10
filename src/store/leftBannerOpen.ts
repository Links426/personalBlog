import { defineStore } from 'pinia'
// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一表示
// 参数2：对象，可以提供state actions getters
const leftBannerStatus = defineStore('leftBanner', {
  state: () => {
    return {
      leftBannerStatus: true,
    }
  },
  getters: {},
  actions: {
    changeLeftBannerStatus() {
      this.leftBannerStatus = !this.leftBannerStatus
    },
  },
})

export default leftBannerStatus
