import { defineStore } from 'pinia'
// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一表示
// 参数2：对象，可以提供state actions getters
const activeMenu = defineStore('leftBanner', {
  state: () => {
    return {
      activeMenuNum: 0,
    }
  },
  getters: {},
  actions: {},
})

export default activeMenu
