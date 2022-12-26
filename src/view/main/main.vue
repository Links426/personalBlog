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
      :class="leftBannerOpen ? 'leftBannerOpen' : 'leftBannerClosed'"
    >
      <div pl-32px>
        <!-- 顶部logo -->
        <div mb-48px v-if="leftBannerOpen">
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
              class="w-36px h-36px bg-#f2f2f3 rounded-10px text-center lh-36px text-#868a96"
            >
              <i :class="item.icon"></i>
            </div>
            <div
              class="text-#1F1D2B text-14px pl-16px text-#868a96"
              :class="{ activeMenuText: activeMenuNum === item.id }"
              v-if="leftBannerOpen"
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
    <!-- 右侧内容 -->
    <div
      flex-1
      class="bg-#f4f4f5"
      min-h-1600px
      :class="leftBannerOpen ? 'pl-256px' : 'pl-110px'"
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
        <!-- 横幅模块 -->
        <div>
          <!-- 横幅内容 -->
          <div w-full h-460px bg-white rounded-20px pl-30px>
            <transition name="plus-icon">
              <div
                flex
                justify-between
                v-if="scrollButtonSelectedNum % 2 === 0"
                absolute
              >
                <!-- 左侧 -->
                <div pt-30px>
                  <div text-36px font-bold class="text-#1d1b26 mb-20px">
                    <div>留言墙</div>
                    <div>等你来留言</div>
                  </div>
                  <div class="text-#34323f mb-10px">
                    很多事情值得记录 当然也值得回味
                  </div>
                  <div class="text-#b5b7be text-14px mb-140px">
                    如您对留言板感兴趣，欢迎来贴便签纸。
                  </div>
                  <div flex>
                    <div
                      class="bannerColorButton w-120px h-48px rounded-26px text-white text-center lh-48px pointer mr-20px"
                    >
                      去留言～
                    </div>
                    <div
                      class="w-200px h-48px rounded-26px text-white text-center lh-48px pointer bg-#4380FF"
                    >
                      访问设计稿
                    </div>
                  </div>
                </div>
                <!-- 右侧 -->
                <div>
                  <img src="@/static/img/94649749_p0.png" pr-30px h-460px />
                </div>
              </div>
            </transition>

            <transition name="minus-icon">
              <div v-if="scrollButtonSelectedNum % 2 !== 0">
                <div flex justify-between>
                  <!-- 左侧 -->
                  <div pt-30px>
                    <div text-36px font-bold class="text-#1d1b26 mb-20px">
                      <div>2023</div>
                      <div>会发生什么呢</div>
                    </div>
                    <div class="text-#34323f mb-10px">
                      2023 我们期待会发生好事
                    </div>
                    <div class="text-#b5b7be text-14px mb-140px">
                      希望一切如愿
                    </div>
                    <div flex pt-8px>
                      <div
                        class="bannerColorButton w-240px h-48px rounded-26px text-white text-center lh-48px pointer mr-20px"
                      >
                        我也希望～
                      </div>
                    </div>
                  </div>
                  <!-- 右侧 -->
                  <div>
                    <img src="@/static/img/QQ20221118-0.png" h-460px pr-30px />
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <!-- 横幅按钮 -->
          <div flex justify-between mt-20px mr-20px>
            <div></div>
            <div flex>
              <div
                class="scrollButton pointer"
                mr-10px
                :class="{
                  scrollButtonSelected: scrollButtonSelectedNum % 2 === 0,
                }"
              ></div>
              <div
                class="scrollButton pointer"
                :class="{
                  scrollButtonSelected: scrollButtonSelectedNum % 2 !== 0,
                }"
              ></div>
            </div>
          </div>
        </div>
        <!-- 个人部分 -->
        <div>
          <!-- 标题 -->
          <div text-24px fw-500 mb-30px class="text-#1d1b26">模块数据</div>
          <!-- 访问数据 -->
          <div mb-20px>
            <div text-48px mb-10px class="text-#1f1d2b fw-600">26853</div>
            <div class="text-#3b3948 text-14px">总访问量</div>
          </div>
          <div>
            <div text-48px mb-10px class="text-#1f1d2b fw-600">50</div>
            <div class="text-#3b3948 text-14px">今日访问量</div>
          </div>
        </div>
      </div>
    </div>
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
  activeMenuNum.value = item
}
// 左侧展开
const leftBannerOpen = ref(true)

// 横幅选择按钮
const scrollButtonSelectedNum = ref(0)
// 横幅定时器
let timeInter: any = null
onMounted(() => {
  timeInter = setInterval(() => {
    scrollButtonSelectedNum.value++
  }, 3000)
})
onUnmounted(() => {
  clearInterval(timeInter) //销毁
  timeInter = null
})
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
  transition: all 0.2s;
}
.leftBannerOpen {
  width: 257px;
  transition: all 0.2s;
}
/* 输入框搜索 */
.iconSearch {
  @apply absolute text-#a4a7b0 text-20px;
  top: 10px;
  left: 430px;
}
/* 横幅左右切换按钮 */
.scrollButton {
  @apply w-20px h-10px bg-#d2d3d7 rounded-10px;
  transition: all 0.8s;
}
.scrollButtonSelected {
  @apply w-40px h-10px bg-#4380FF rounded-10px;
}
/* 横幅按钮 */
.bannerColorButton {
  background: linear-gradient(90deg, #dec1ff 2%, #ff8bcb 100%);
}
/* 横幅动画 */
.plus-icon-enter-active {
  transition: opacity 0.5s;
}
.plus-icon-enter-active {
  opacity: 0;
  transition: opacity 0.5s;
}
.plus-icon-leave-active {
  transition: opacity 0.5s;
}
.plus-icon-leave-to {
  opacity: 0;
}
.plus-icon-enter-to {
  opacity: 1;
}
.minus-icon-enter-active {
  transition: opacity 0.5s;
}
.minus-icon-enter-active {
  opacity: 0;
  transition: opacity 0.5s;
}
.minus-icon-leave-active {
  transition: opacity 0.5s;
}
.minus-icon-leave-to {
  opacity: 0;
}
.minus-icon-enter-to {
  opacity: 1;
}
</style>
