<template>
  <div class="login">
    <el-form class="login-form">
      <h2 class="title">{{ is_login ? "登录" : "注册" }}</h2>
      <el-from-item v-if="!is_login">
        <el-input
          placeholder="username"
          size="large"
          v-model="form.user_name"
        />
      </el-from-item>
      <el-form-item>
        <el-input placeholder="手机号" size="large" v-model="form.phone" />
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="密码"
          size="large"
          show-password
          v-model="form.password"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          size="large"
          @click="submitForm"
        >
          {{ is_login ? "提交" : "注册" }}
        </el-button>
        <div class="text-row">
          <span class="text-warp" @click="is_login = !is_login">
            <sapn>{{
              is_login ? "没有账号？去注册" : "已有账号？去登陆"
            }}</sapn>
          </span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="less">
.login {
  margin: 20vh auto;
  .login-form {
    width: 360px;
    background: #fff;
    padding: 30px 50px 10px 50px;
    border-radius: 7px;
    margin: 20px auto;
    box-shadow: var(--el-box-shadow);
    .title {
      text-align: center;
      margin-bottom: 18px;
    }
    .login-btn {
    }
    .text-row {
    }
  }
}
</style>
<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref } from "vue";
const loading = ref(true);
const is_login = ref(false);
const form = ref({
  phone: "",
  user_name: "",
  password: "",
});
const submitForm = async () => {
  let { value: user } = form;
  if (!user.phone || !user.password) {
    return ElMessage({
      type: "warning",
      message: "手机号和密码不能为空",
    });
  }
  if (user.phone.length != 11 || isNaN(Number(user.phone))) {
    return ElMessage({
      type: "warning",
      message: "请输入正确的手机号",
    });
  }
  if (!is_login.value && !user.user_name) {
    return ElMessage({
      type: "warning",
      message: "请输入用户名",
    });
  }
};
</script>
