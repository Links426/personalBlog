<template>
  <div flex>
    <!-- 左侧banner -->
    <div w-256px bg-white fixed h-full pt-32px flex flex-col justify-between>
      <div pl-32px>
        <!-- 顶部logo -->
        <div mb-48px>
          <div class="text-12px text-#9195A1">
            <div class="text-20px text-#1d1b26">XLin</div>
            <div>照顾好自己，休息一会</div>
          </div>
        </div>
        <!-- 菜单页面 -->
        <div>
          <div class="text-#9195A1 text-14px mb-12px">菜单</div>
          <div
            v-for="item in menuList"
            :key="item.id"
            flex
            h-56px
            w-224px
            items-center
            class="pointer"
            @click="activeMenu(item.id)"
          >
            <div
              :class="{ activeMenuBg: activeMenuNum === item.id }"
              class="w-36px h-36px bg-#f2f2f3 rounded-10px text-center lh-36px text-#868a96"
            >
              <i :class="item.icon"></i>
            </div>
            <div
              class="text-#1F1D2B text-14px pl-16px text-#868a96"
              :class="{ activeMenuText: activeMenuNum === item.id }"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <!-- 点击展开按钮 -->
      <div
        w-full
        h-48px
        text-center
        lh-48px
        style="border-top: 1px solid #f2f2f3"
      >
        <i
          class="iconfont slideOpenIcon pointer"
          :class="
            leftBannerOpen ? 'icon-nav_icon_zhankai' : 'icon-nav_icon_shouqi'
          "
          @click="leftBannerOpen = !leftBannerOpen"
        ></i>
      </div>
    </div>
    <i flex-1 class="bg-#f4f4f5" pl-256px min-h-1600px>213</i>
  </div>
</template>
<script setup lang="ts">
// 菜单列表
const menuList = reactive([
  { id: 0, icon: 'iconfont icon-nav_icon_shouye', name: '首页' },
  { id: 1, icon: 'iconfont icon-nav_icon_zhiduguanli', name: '个人分析' },
  { id: 2, icon: 'iconfont icon-nav_icon_fabuguanli', name: '技术交流' },
  { id: 3, icon: 'iconfont icon-nav_icon_shujudaochu', name: '资源下载' },
  { id: 4, icon: 'iconfont icon-nav_icon_jinduguanli', name: '关于' },
])
const activeMenuNum = ref(0)
// 菜单点击动态
const activeMenu = (item: number) => {
  console.log(item)
  activeMenuNum.value = item
}
// 左侧展开
const leftBannerOpen = ref(true)
</script>

<style scoped>
.activeMenuBg {
  @apply bg-#4380FF text-#fff;
}
.activeMenuText {
  @apply text-#1F1D2B;
}
.slideOpenIcon {
  @apply text-#868a96;
  font-size: 22px;
}
</style>
