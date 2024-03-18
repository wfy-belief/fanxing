<template>
  <!--  <n-message-provider>-->
  <n-space>

    <n-tag type="info"
           size="large" round
           closable
           @close="handleClose"
           @click="handleClick">
      敬请期待！
    </n-tag>

  </n-space>
  <!--  </n-message-provider>-->
</template>

<script setup lang="ts">
import {createDiscreteApi} from "naive-ui";

const {message} = createDiscreteApi(["message"])

function handleClose() {
  message.info('别骂了 真的在赶工了！')
}

function handleClick() {
  message.info('我只是个后端开发 前端写的慢怎么了？')
}

</script>

<style scoped>

</style>