<template>
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
            <img src="@/static/img/QQ20221226-0.jpg" alt="" w-full h-full />
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
                target="_blank"
                >XLin2048</a
              >
            </div>
          </div>
        </transition>

        <i class="iconfont icon-github-fill"></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// 展示微信的
const showContactVx = ref(false)
// 展示b站的
const showContactBili = ref(false)
// 展示git的
const showContactGit = ref(false)
</script>

<style scoped>
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
</style>
