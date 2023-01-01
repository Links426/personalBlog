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
      <div flex>
        <!-- 卡片 -->
        <div
          w-280px
          h-400px
          bg-white
          rounded-8px
          mr-20px
          flex-col
          flex
          class="cardShadow transition-3s"
          v-for="item in sourceList"
          :key="item.id"
        >
          <!-- 上方图片 -->
          <div
            w-full
            h-210px
            bg-black
            rounded-t-8px
            bg-cover
            :style="{
              backgroundImage:
                'url(' + getImgFile.getAssetsFile(item.imgSrc) + ')',
            }"
          ></div>
          <!-- 下方内容 -->
          <div
            pt-30px
            pl-16px
            pr-16px
            pb-14px
            flex
            flex-1
            flex-col
            justify-between
          >
            <!-- 中间的文字 -->
            <div>
              <!-- 标题 -->
              <div class="text-18px text-#1F1D2B font-500 mb-12px">
                {{ item.title }}
              </div>
              <!-- 介绍 -->
              <div class="text-12px text-#9195A1 mb-4px">{{ item.detail }}</div>
              <div class="text-12px text-#3b3948">{{ item.class }}</div>
            </div>
            <!-- 底部的标志 -->
            <div flex justify-between>
              <!-- 左侧 -->
              <div class="flex items-center text-12px text-#9195A1">
                <i class="iconfont icon-icon"></i>
                <div ml-4px>{{ item.view }}</div>
              </div>
              <!-- 右侧 -->
              <div flex items-center>
                <!-- 网盘密码 -->
                <div class="text-24px font-600 text-#dddfe4">
                  {{ item.password }}
                </div>
                <!-- 下载按钮 -->
                <div
                  class="w-80px h-40px bg-#4380FF text-#fff flex-center-col rounded-20px text-14px ml-8px pointer"
                >
                  下载
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// 从pinia获取左侧状态栏的状态
import { storeToRefs } from 'pinia'
import leftBannerStore from '@/store/leftBannerOpen'
// 引入静态资源
import getImgFile from '@/util/getStaticFile'

const leftBanner = leftBannerStore()
const { leftBannerStatus } = storeToRefs(leftBanner)
// 刷新时，记下 technology 页
onMounted(() => {
  localStorage.setItem('page', 'download')
})

// 资源 下载 列表
const sourceList = reactive([
  {
    id: 0,
    imgSrc: 'QQ20221226-1.jpg',
    title: '贪吃蛇小游戏源码',
    detail: 'zip格式文件',
    class: '游戏 / vue源码',
    view: 287,
    password: '6wum',
  },
  {
    id: 1,
    imgSrc: 'QQ20221226-1.jpg',
    title: '俄罗斯方块游戏源码',
    detail: 'zip格式文件',
    class: '游戏 / vue源码',
    view: 332,
    password: 'x5ks',
  },
])
</script>

<style scoped>
/* 输入框搜索 */
.iconSearch {
  @apply absolute text-#a4a7b0 text-20px;
  top: 10px;
  left: 430px;
}
/* 卡片阴影 */
.cardShadow:hover {
  box-shadow: 0px 4px 43px -19px rgba(0, 0, 0, 0.3);
}
</style>
