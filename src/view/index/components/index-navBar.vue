<template>
  <!-- 横幅模块 -->
  <div>
    <!-- 横幅内容 -->
    <div w-full h-460px bg-white rounded-20px flex relative>
      <transition name="minus-icon">
        <div
          absolute
          w-full
          h-full
          flex
          v-if="scrollButtonSelectedNum % 2 === 0"
        >
          <div
            class="w-60% h-full flex flex-col justify-between pl-20px pt-30px pb-30px rounded-l-20px"
          >
            <div class="text-32px text-#1d1b26 font-500">
              留言墙<br />
              等你来留言
            </div>
            <div class="text-#56545f">
              单聊、群聊<br />
              可发送文字、表情、图片、语音、位置...
            </div>
            <div class="text-#adafb8 text-14px">
              如您对这个应用感兴趣，欢迎下载使用。当然对于需要查看设计稿和下载切图
              的同学，点击下方对应入口查阅。详细视频请访问b站。
            </div>
            <div flex>
              <div
                class="linearButton w-110px h-46px rounded-24px flex-center font-500 text-14px mr-10px"
              >
                去留言 ~
              </div>
              <div
                class="w-140px h-46px rounded-26px flex-center font-500 text-14px text-white bg-#4380FF"
              >
                访问设计稿<i
                  class="iconfont icon-nav_icon_fabuguanli ml-4px"
                ></i>
              </div>
            </div>
          </div>
          <div
            class="w-40% h-full rounded-r-20px bannerImg1 bg-contain ml-20px"
          ></div>
        </div>
      </transition>
      <transition name="minus-icon">
        <div
          absolute
          w-full
          h-full
          flex
          v-if="scrollButtonSelectedNum % 2 !== 0"
        >
          <div
            class="w-60% h-full flex flex-col justify-between pl-20px pt-30px pb-30px rounded-l-20px"
          >
            <div class="text-32px text-#1d1b26 font-500">
              vue+node.js<br />
              0到1实现即时通讯聊天室
            </div>
            <div class="text-#56545f">很多事情值得记录，当然也值得回味。</div>
            <div class="text-#adafb8 text-14px">
              如您对留言板感兴趣，欢迎来贴便签纸。当然对于需要宣看设计稿和下载切图
              的同学，点击下方对应入口查阅。详细视频请访问b站。
            </div>
            <div flex>
              <div
                class="linearButton w-110px h-46px rounded-24px flex-center font-500 text-14px mr-10px"
              >
                去留言 ~
              </div>
              <div
                class="w-140px h-46px rounded-26px flex-center font-500 text-14px text-white bg-#4380FF"
              >
                访问设计稿<i
                  class="iconfont icon-nav_icon_fabuguanli ml-4px"
                  style="font      "
                ></i>
              </div>
            </div>
          </div>
          <div
            class="w-40% h-full rounded-r-20px bannerImg2 bg-contain ml-20px"
          ></div>
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
</template>
<script setup lang="ts">
// 横幅选择按钮
const scrollButtonSelectedNum = ref(0)
// 横幅定时器
let timeInter: any = null
onMounted(() => {
  localStorage.setItem('page', 'index')
  timeInter = setInterval(() => {
    scrollButtonSelectedNum.value++
  }, 5000)
})
onUnmounted(() => {
  clearInterval(timeInter) //销毁
  timeInter = null
})
</script>

<style scoped>
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
/* 横幅图片 */
.bannerImg1 {
  background-image: url('@/static/img/QQ20221118-0.png');
  background-repeat: no-repeat;
}
.bannerImg2 {
  background-image: url('@/static/img/94649749_p0.png');
  background-repeat: no-repeat;
}
/* 最底下模块数据 个人分享的class */
.personShare-icon {
  @apply w-56px h-56px flex-center rounded-10px text-white;
  font-size: 30px;
}
.linearButton {
  background: linear-gradient(90deg, #ebc8fc 1%, #bce9fd 100%);
}
</style>
