<template>
  <div
    flex-1
    class="bg-#f4f4f5 transition-3s"
    min-h-1300px
    :class="leftBannerStatus ? 'pl-256px' : 'pl-110px'"
  >
    <div pl-50px pt-20px pr-50px>
      <!-- 上面搜索 -->
      <div relative mb-30px>
        <input
          type="text"
          w-456px
          h-44px
          rounded-18px
          b-0
          pl-20px
          placeholder="请输入"
        />
        <i class="iconfont icon-sousuo iconSearch" absolute></i>
      </div>
      <!-- 内容 -->
      <div text-28px mb-20px>还在构思中...</div>
      <div class="backToMainButton pointer" @click="backToMain">
        返回首页
        <i class="iconfont icon-nav_icon_shouye ml-6px"></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// 从pinia获取左侧状态栏的状态
import { storeToRefs } from 'pinia'
import leftBannerStore from '@/store/leftBannerOpen'
// 路由
import { useRouter } from 'vue-router'
const router = useRouter()

const leftBanner = leftBannerStore()
const { leftBannerStatus } = storeToRefs(leftBanner)
// 返回首页
const backToMain = () => {
  // 让 左侧 nav 栏 点击第一个
  localStorage.setItem('leftBannerSelect', JSON.stringify(0))
  router.push('/')
}
// 刷新时，记下 technology 页
onMounted(() => {
  localStorage.setItem('page', 'technology')
})
</script>

<style scoped>
/* 输入框搜索 */
.iconSearch {
  @apply absolute text-#a4a7b0 text-20px;
  top: 10px;
  left: 430px;
}
/* 返回主页按钮 */
.backToMainButton {
  @apply w-150px h-50px rounded-30px flex flex-center text-white;
  background: linear-gradient(90deg, #dec1ff 2%, #ff8bcb 100%);
}
</style>
