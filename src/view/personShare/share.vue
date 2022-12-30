<template>
  <div
    flex-1
    class="bg-#f4f4f5 transition-3s"
    min-h-1100px
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

      <!-- 详细内容 -->
      <!-- 选择页面 -->
      <div flex text-14px>
        <div
          v-for="item in detailSelectData"
          :key="item.id"
          class="detailUnselected pointer transition-3s"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// 从pinia获取左侧状态栏的状态
import { storeToRefs } from 'pinia'
import leftBannerStore from '@/store/counter'
const leftBanner = leftBannerStore()
const { leftBannerStatus } = storeToRefs(leftBanner)
onMounted(() => {
  localStorage.setItem('page', 'share')
})
const detailSelectData = reactive([
  { id: 0, value: '文章' },
  { id: 1, value: '摄影' },
  { id: 2, value: '随记' },
])
</script>

<style scoped>
/* 输入框搜索 */
.iconSearch {
  @apply absolute text-#a4a7b0 text-20px;
  top: 10px;
  left: 430px;
}
/* 选择页面未选中 */
.detailUnselected {
  @apply text-#3b3948 mr-40px;
}
</style>
