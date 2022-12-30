<template>
  <!-- 右侧内容 -->
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
      <!-- 横幅模块 -->
      <div>
        <!-- 横幅内容 -->
        <div w-full h-460px bg-white rounded-20px pl-30px pr-30px inline-block>
          <div relative left-0>123</div>
          <div relative left-0>123</div>
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
      <div mt-20px flex>
        <!-- 左侧数据 -->
        <div>
          <!-- 标题 -->
          <div text-24px fw-500 mb-10px class="text-#1d1b26">模块数据</div>
          <!-- 访问数据 -->
          <div>
            <div mb-20px>
              <div text-48px mb-10px class="text-#1f1d2b fw-600">26853</div>
              <div class="text-#3b3948 text-14px">总访问量</div>
            </div>
            <div>
              <div text-48px mb-10px class="text-#1f1d2b fw-600">50</div>
              <div class="text-#3b3948 text-14px">今日访问量</div>
            </div>
          </div>
          <!-- 个人联系方式 -->
          <div flex mt-80px>
            <div
              class="contactDetailBlock"
              :class="{ contactDetailBlockVX: showContactVx }"
              @mouseover="showContactVx = true"
              @mouseleave="showContactVx = false"
              relative
            >
              <transition name="plus-icon">
                <div class="contactVxEWM" v-if="showContactVx" p-10px>
                  <img
                    src="@/static/img/QQ20221226-0.jpg"
                    alt=""
                    w-full
                    h-full
                  />
                </div>
              </transition>
              <i class="iconfont icon-weixin"></i>
            </div>
            <div
              class="contactDetailBlock"
              :class="{ contactDetailBlockBili: showContactBili }"
              @mouseover="showContactBili = true"
              @mouseleave="showContactBili = false"
            >
              <i class="iconfont icon-bilibili-line"></i>
            </div>
            <div
              class="contactDetailBlock"
              :class="{ contactDetailBlockGit: showContactGit }"
              @mouseover="showContactGit = true"
              @mouseleave="showContactGit = false"
              relative
            >
              <transition name="plus-icon">
                <div class="contactVxEWM" p-10px v-if="showContactGit">
                  <div>
                    <img
                      src="@/static/img/QQ20221226-1.jpg"
                      class="avaterStyle mb-10px"
                    />
                    <a
                      class="text-#fff bg-#4380FF pt-10px pb-10px pl-20px pr-20px rounded-20px"
                      href="https://github.com/XLin2048?tab=repositories"
                      >XLin2048</a
                    >
                  </div>
                </div>
              </transition>

              <i class="iconfont icon-github-fill"></i>
            </div>
          </div>
        </div>
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
                <div
                  :style="{ backgroundColor: item.logoBg }"
                  class="rounded-10px"
                >
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
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import leftBannerStore from '@/store/counter'
import router from '@/router'
const leftBanner = leftBannerStore()
const { leftBannerStatus } = storeToRefs(leftBanner)

// 横幅选择按钮
const scrollButtonSelectedNum = ref(0)
// 横幅定时器
let timeInter: any = null
onMounted(() => {
  router.push('/')
  localStorage.setItem('page', 'index')
  timeInter = setInterval(() => {
    scrollButtonSelectedNum.value++
  }, 3000)
})
onUnmounted(() => {
  clearInterval(timeInter) //销毁
  timeInter = null
})
// 展示微信的
const showContactVx = ref(false)
// 展示b站的
const showContactBili = ref(false)
// 展示git的
const showContactGit = ref(false)

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
/* 联系方式的方块 */
.contactDetailBlock {
  @apply w-36px h-36px rounded-8px text-center lh-32px mr-16px;
  border: 1px solid #d8dae0;
  transition: all 0.8s;
}
/* 微信的hover */
.contactDetailBlockVX {
  @apply bg-#25b656 text-white lh-32px;
  transition: all 0.4s;
}
/* 微信二维码 */
.contactVxEWM {
  @apply w-170px h-170px bg-white rounded-10px absolute;
  top: -190px;
  left: -60px;
}
/* bili的hover */
.contactDetailBlockBili {
  @apply bg-#fe488f text-white;
  transition: all 0.4s;
}
.contactDetailBlockGit {
  @apply bg-#292526 text-white;
  transition: all 0.4s;
}
/* 头像边框 */
.avaterStyle {
  @apply w-80px rounded-50%;
  border: 3px solid #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
}

/* 最底下模块数据 个人分享的class */
.personShare-icon {
  @apply w-56px h-56px flex-center rounded-10px text-white;
  font-size: 30px;
}
</style>
