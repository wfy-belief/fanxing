<script setup lang="ts">
import {ref} from "vue";
import {createDiscreteApi} from "naive-ui";

const split = ref<number>(0.30)
const {message} = createDiscreteApi(["message"])

function login_function() {
  message.info("已成功登陆！")
}
</script>

<template>

  <div class="container">
    <n-split disabled direction="vertical" v-model:size="split">
      <template #2>
        <n-flex justify="center">
          <n-flex vertical>


            --- fan xing login ---
            <n-form
                label-placement="left"
            >
              <n-form-item label="账号">
                <n-input maxlength="10" show-count disabled default-value="admin"/>
              </n-form-item>

              <n-form-item label="密码">
                <n-input
                    type="password"
                    show-password-on="click"
                    show-count
                    placeholder="请输入密码"
                    :maxlength="30"
                />
              </n-form-item>

              <n-button type="info" style="width: 100%" @click="login_function">
                登陆
              </n-button>

            </n-form>
          </n-flex>
        </n-flex>
      </template>
    </n-split>

  </div>


</template>

<style scoped>
/*
 * 设置容器为可视的80% css不会写 先这样写着
 */
.container {
  height: 80vh;
}
</style>