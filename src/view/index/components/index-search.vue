<template>
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
</template>
<script setup lang="ts"></script>

<style scoped>
/* 输入框搜索 */
.iconSearch {
  @apply absolute text-#a4a7b0 text-20px;
  top: 10px;
  left: 430px;
}
</style>
