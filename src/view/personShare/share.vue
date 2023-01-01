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

      <!-- 详细内容 -->
      <div>
        <!-- 选择页面 -->
        <div flex text-14px mb-20px>
          <div
            v-for="item in detailSelectData"
            :key="item.id"
            class="detailUnselected pointer transition-3s"
            :class="{ detailSelected: detailSelectedBlock === item.id }"
            @click="detailSelected(item.id)"
          >
            {{ item.value }}
          </div>
        </div>
        <!-- 详细内容 -->
        <div flex>
          <!-- 文章 -->
          <div flex-1 mr-30px flex-col flex>
            <div
              class="pointer h-200px p-20px bg-white rounded-10px mb-16px flex"
              v-for="item in articleList"
              :key="item.id"
            >
              <!-- 左侧图片 -->
              <div
                w-210px
                h-full
                bg-cover
                rounded-10px
                :style="{
                  backgroundImage:
                    'url(' + getImgFile.getAssetsFile(item.coverSrc) + ')',
                }"
              ></div>
              <div pl-30px flex flex-col justify-between flex-1>
                <!-- 上方内容 -->
                <div>
                  <!-- 标题 -->
                  <div class="text-18px text-#3e3c48 font-600">
                    {{ item.title }}
                  </div>
                  <!-- 副标题 -->
                  <div class="text-14px text-#3B3948 pt-12px">
                    {{ item.slogan }}
                  </div>
                </div>
                <!-- 底部 -->
                <div
                  class="flex justify-between items-center text-10px text-#9195a1"
                >
                  <!-- 左侧 -->
                  <div flex items-center>
                    <div class="text-#3b3948 mr-10px">{{ item.class }}</div>
                    <div>{{ item.date }}</div>
                  </div>
                  <!-- 右侧 -->
                  <div flex items-center>
                    <div mr-10px>
                      <i class="iconfont icon-icon1"></i>
                      {{ item.good }}
                    </div>
                    <div>
                      <i class="iconfont icon-icon"></i>
                      {{ item.view }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 右侧 摄影 和 随记 -->
          <div>
            <!-- 摄影 -->
            <div
              class="w-390px h-530px p-30px bg-white rounded-10px text-#3b3948 font-700 text-18px"
            >
              <div>摄影</div>
              <!-- 内容 -->
              <div v-if="!cameraList" text-center mt-160px>
                <div>还没有内容～</div>
                <div>已到底部</div>
              </div>
            </div>
            <!-- 随记 -->
            <div
              class="w-390px h-530px p-30px bg-white rounded-10px text-#3b3948 font-700 text-18px mt-30px overflow-scroll scrollHidden"
            >
              <div>随记</div>
              <!-- 如果没有内容，则出现的东西 -->
              <div v-if="!noteList" text-center mt-160px>
                <div>还没有内容～</div>
                <div>已到底部</div>
              </div>
              <!-- 内容 -->
              <div flex mt-20px v-for="item in noteList" :key="item.id">
                <!-- 左侧 日期 -->
                <div
                  class="text-#9195A1 flex flex-col font-500 flex-1 text-14px mr-10px mt-4px"
                >
                  <span>{{ item.year }}</span>
                  <span mt-6px>0{{ item.month }} 月</span>
                  <span text-right mt-6px text-24px font-600
                    >{{ item.day }}
                  </span>
                </div>
                <!-- 右侧 内容 -->
                <div w-284px>
                  <div class="text-24px mb-20px text-#1d1b26 font-400">
                    {{ item.title }}
                  </div>
                  <div
                    class="text-#3b3948 text-14px font-400 lh-22px"
                    style="letter-spacing: 2px"
                  >
                    {{ item.content }}
                  </div>
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
// 引入静态资源
import getImgFile from '@/util/getStaticFile'
// 从pinia获取左侧状态栏的状态
import { storeToRefs } from 'pinia'
import leftBannerStore from '@/store/leftBannerOpen'
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
const detailSelectedBlock = ref(0)
const detailSelected = (item: number) => {
  detailSelectedBlock.value = item
}

// 文章列表
const articleList = reactive([
  {
    id: 0,
    coverSrc: 'QQ20221226-1.jpg',
    title: '西北大环线第七天',
    slogan: '祁连——阿柔大寺——门源菜花——西宁',
    class: '所见',
    date: '2021-10-31',
    good: 77,
    view: 1155,
  },
  {
    id: 1,
    coverSrc: 'QQ20221226-1.jpg',
    title: '西北大环线第七天',
    slogan: '祁连——阿柔大寺——门源菜花——西宁',
    class: '所见',
    date: '2021-10-31',
    good: 77,
    view: 1155,
  },
  {
    id: 2,
    coverSrc: 'QQ20221226-1.jpg',
    title: '西北大环线第七天',
    slogan: '祁连——阿柔大寺——门源菜花——西宁',
    class: '所见',
    date: '2021-10-31',
    good: 77,
    view: 1155,
  },
])
// 摄影 列表
const cameraList = ref()
// 随记 列表
const noteList = reactive([
  {
    id: 0,
    title: '我是一个看书很慢的人',
    content:
      '我是一个看书很慢的人，以至于到现在都没有完整的看完过几本课外书，暂且称为课外书，无论是小说、文学或是其他类。其实每年的语文课本除了必读文章，其余的也都没有看完。书是人类智慧的结晶，它是上等的精神食粮。可放在我面前怎么却成了那么难啃的粗粮？我是一个读书很慢的人，我没有完整的度过一本名著。我想去读，让自己变得不那么无知，可我是一个读书很慢的人。在信息大爆炸的时代，书本远是在被动接受的图像时代的最后选项。我应该坚守延迟满足的阵地，收起手来，去啃着粗糙的精神食粮。买到书本越是多，越是觉得自己无知，那一本本书却怎么都是在接落下的灰尘。',
    year: 2022,
    month: 8,
    day: 8,
  },
  {
    id: 1,
    title: '周末结束的晚上',
    content:
      '在电脑呼呼的散热中等待，它的性能或将支持不了的下一步的动作。天气炎热，闷的人心也是。不想出门，心情略有些烦躁压抑。吹着的风扇也是由于时间岁月的痕迹变得呼呼响还没有什么风力。一切都显得老旧，连我自己也是。我决定从明天起，走出房间，去拥抱太阳，拥抱风，拥抱空气，拥抱嘈杂的车水马龙的街道。即使是汗流浃背，即使是气力疲惫。要我深深的吸气呼气。吸树荫下有阳光味道的空气。吸草地上有绿草的味道。全身的舒展开来。去拥抱它，去感受它，去感恩它，去赞美看到美丽的它。',
    year: 2022,
    month: 7,
    day: 31,
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
/* 选择页面未选中 */
.detailUnselected {
  @apply text-#3b3948 mr-40px;
}
.detailSelected {
  @apply text-#1F1D2B font-600;
}
</style>
