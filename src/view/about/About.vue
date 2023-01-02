<template>
  <div
    flex-1
    flex
    flex-col
    class="transition-3s"
    min-h-1260px
    :class="leftBannerStatus ? 'pl-256px' : 'pl-110px'"
  >
    <!-- 内容 -->
    <!-- 上半部分 -->
    <div class="w-full h-600px bg-#171c29 flex-center-col">
      <div relative>
        <img src="@/static/img/QQ20221226-1.jpg" class="w-300px rounded-50%" />
        <div
          class="text-white absolute op-60 text-28px font-500 top-250px left-230px signFont"
        >
          XLin
        </div>
      </div>
      <div class="signFont text-white text-center text-20px mt-40px">
        <div mb-10px>你不需要一开始就很厉害</div>
        <div>但是你需要开始才能变得厉害</div>
      </div>
    </div>
    <!-- 下半部分 -->
    <div class="flex bg-#161619 flex-1 justify-center">
      <div
        class="w-900px bg-#1f2227 h-480px p-20px mt-60px rounded-20px text-white"
      >
        <!-- 标题 -->
        <div text-24px absolute>私信 / 反馈</div>
        <div flex flex-col h-full justify-between>
          <div>
            <!-- 联系方式 -->
            <div mt-60px mb-20px>
              <div mb-10px>联系方式</div>
              <input
                type="text"
                placeholder="QQ/微信/邮箱"
                class="w-280px h-48px bg-#29292d rounded-10px b-0 pl-12px text-12px"
              />
            </div>
            <!-- 私信内容 -->
            <div relative>
              <div mb-10px>私信内容</div>
              <!-- 需要给 textarea 加上自适应高度 -->
              <textarea
                class="w-full min-h-80px bg-#29292e b-0 rounded-10px pl-8px pt-6px"
                maxlength="350"
                ref="textareaRef"
                v-model="textAreaContent"
                :rows="rows"
                placeholder="请输入.."
              ></textarea>
              <div absolute top-0 right-10px op-20>
                字数
                <span>{{ textAreaContent.length }} / 350</span>
              </div>
            </div>
          </div>
          <div
            class="w-200px h-60px bg-#4380FF flex-center rounded-30px pointer"
          >
            发送
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
// 路由
import { useRouter } from 'vue-router'
const router = useRouter()

const leftBanner = leftBannerStore()
const { leftBannerStatus } = storeToRefs(leftBanner)
// textarea 自适应 高度
const textareaRef = ref(null)
const rows = ref(1)
const textAreaContent = ref('')

// 刷新时，记下 technology 页
onMounted(() => {
  localStorage.setItem('page', 'about')
  nextTick(adjustTextareaSize)
})
watch(
  () => textAreaContent.value,
  () => {
    nextTick(adjustTextareaSize)
  }
)
// textArea 自适应高度
const adjustTextareaSize = () => {
  let textarea = textareaRef.value

  textarea.style.height = 'auto'
  const height = textarea.scrollHeight

  if (height) {
    // 改变textarea高度达到自适应
    textarea.style.height = height + 'px'
  }
}
</script>

<style scoped>
/* 输入框搜索 */
.iconSearch {
  @apply absolute text-#a4a7b0 text-20px;
  top: 10px;
  left: 430px;
}
/* 返回主页按钮 */
.backToMainButton {
  @apply w-150px h-50px rounded-30px flex flex-center text-white;
  background: linear-gradient(90deg, #dec1ff 2%, #ff8bcb 100%);
}
</style>
