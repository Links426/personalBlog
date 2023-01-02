<template>
  <div h-352px flex-1 w-full flex ml-30px>
    <div
      bg-white
      h-full
      flex-1
      rounded-10px
      flex
      flex-col
      justify-between
      p-30px
      v-for="item in personShareList"
      :key="item.id"
      :class="item.id < 2 ? 'mr-20px' : ''"
    >
      <div>
        <!-- 顶上的logo -->
        <div flex items-center justify-between>
          <div :style="{ backgroundColor: item.logoBg }" class="rounded-10px">
            <i :class="item.logo" class="personShare-icon"></i>
          </div>
          <div class="text-40px" :style="{ color: item.logoBg }">
            {{ item.amount }}
          </div>
        </div>
        <!-- 内容 -->
        <div pt-40px>
          <div class="text-#1d1b26 font-600 text-18px">
            {{ item.title }}
          </div>
          <div class="text-#858a96 text-14px pt-12px">
            {{ item.slogan }}
          </div>
        </div>
      </div>
      <!-- 跳转 -->
      <div
        class="w-110px h-40px bg-#4380ff rounded-20px flex-center text-#fff font-700 mt-20px pointer"
      >
        <i
          class="iconfont icon-nav_icon_shujuchaxun"
          style="font-size: 20px"
        ></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// 个人分享模块
const personShareList = reactive([
  {
    id: 0,
    amount: 7,
    title: '个人分享',
    slogan: '我的日常记录，平时所想、记录、旅游、摄影…',
    logo: 'iconfont icon-nav_icon_fabuguanli',
    logoBg: '#25b67f',
  },
  {
    id: 1,
    amount: 23,
    title: '项目&文件',
    slogan: '设计及开发项目总结，不限于开发完成的项目，包括一些产品概念...',
    logo: 'iconfont icon-nav_icon_zhiduguanli',
    logoBg: '#9540f3',
  },
  {
    id: 2,
    amount: 0,
    title: '技术交流',
    slogan:
      '小白在开发过程中或多或少会遇到并解决一些问题，站在设计的角度去看开发问题',
    logo: 'iconfont icon-nav_icon_zaixianwendang',
    logoBg: '#fe6b4d',
  },
])
</script>

<style scoped>
/* 最底下模块数据 个人分享的class */
.personShare-icon {
  @apply w-56px h-56px flex-center rounded-10px text-white;
  font-size: 30px;
}
</style>
