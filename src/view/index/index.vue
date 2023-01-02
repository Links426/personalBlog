<template>
  <!-- 右侧内容 -->
  <div
    flex-1
    class="bg-#f4f4f5 transition-3s"
    min-h-1040px
    :class="leftBannerStatus ? 'pl-256px' : 'pl-110px'"
  >
    <div pl-50px pt-20px pr-50px>
      <!-- 上面搜索 -->
      <IndexSearch></IndexSearch>
      <!-- 横幅模块 -->
      <IndexNavBar></IndexNavBar>
      <!-- 个人部分 -->
      <IndexPersonal></IndexPersonal>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import leftBannerStore from '@/store/leftBannerOpen'
const leftBanner = leftBannerStore()
const { leftBannerStatus } = storeToRefs(leftBanner)
</script>

<style scoped>
/* 输入框搜索 */
.iconSearch {
  @apply absolute text-#a4a7b0 text-20px;
  top: 10px;
  left: 430px;
}
</style>
