<template>
  <div flex>
    <!-- 左侧banner -->
    <div
      bg-white
      fixed
      z-99
      h-full
      pt-32px
      flex
      flex-col
      justify-between
      class="transition-3s"
      :class="leftBannerStatus ? 'leftBannerOpen' : 'leftBannerClosed'"
    >
      <div pl-32px>
        <!-- 顶部logo -->
        <div mb-48px v-if="leftBannerStatus">
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
            items-center
            class="pointer"
            @click="activeMenu(item.id)"
          >
            <div
              :class="{ activeMenuBg: activeMenuNum === item.id }"
              class="w-36px h-36px bg-#f2f2f3 rounded-10px text-center lh-36px text-#868a96 transition-3s"
            >
              <i :class="item.icon"></i>
            </div>
            <div
              class="text-#1F1D2B text-14px pl-16px text-#868a96"
              :class="{ activeMenuText: activeMenuNum === item.id }"
              v-if="leftBannerStatus"
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
            leftBannerStatus ? 'icon-nav_icon_zhankai' : 'icon-nav_icon_shouqi'
          "
          @click="changeLeftBannerStatus"
        ></i>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
// pinia获取左侧列表状态管理
import { storeToRefs } from 'pinia'
import leftBannerStore from '@/store/leftBannerOpen'
const leftBanner = leftBannerStore()
const { leftBannerStatus } = storeToRefs(leftBanner)

const router = useRouter()
const changeLeftBannerStatus = () => {
  leftBanner.changeLeftBannerStatus()
}
// 菜单列表
const menuList = reactive([
  { id: 0, icon: 'iconfont icon-nav_icon_shouye', name: '首页' },
  { id: 1, icon: 'iconfont icon-nav_icon_zhiduguanli', name: '个人分享' },
  { id: 2, icon: 'iconfont icon-nav_icon_fabuguanli', name: '技术交流' },
  { id: 3, icon: 'iconfont icon-nav_icon_shujudaochu', name: '资源下载' },
  { id: 4, icon: 'iconfont icon-nav_icon_jinduguanli', name: '关于' },
])
const activeMenuNum = ref(0)
// 菜单点击动态
const activeMenu = (item: number) => {
  activeMenuNum.value = item
  localStorage.setItem('leftBannerSelect', JSON.stringify(activeMenuNum.value))
  if (item === 0) {
    router.push('/')
  } else if (item === 1) {
    router.push('/share')
  } else if (item === 2) {
    router.push('/technology')
  }
}
onMounted(() => {
  activeMenuNum.value = Number(localStorage.getItem('leftBannerSelect'))
  router.push('/' + localStorage.getItem('page'))
})
// 监控左边 nav 栏 点击 传值
watch(
  () => router.currentRoute.value,
  () => {
    activeMenuNum.value = Number(localStorage.getItem('leftBannerSelect'))
  }
)
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
.leftBannerClosed {
  width: 110px;
}
.leftBannerOpen {
  width: 256px;
}
</style>
