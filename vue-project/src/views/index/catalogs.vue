<template>
  <div class="catalogs-comp">
    <div class="handel">
      <el-button round @click="toCreate">新建文件夹</el-button>
    </div>
    <div class="Catas-list">
      <div
        v-for="item in store.catalogs"
        :key="item.cata_id"
        :class="
          store.active_cataid == item.cata_id ? 'cata-item active' : 'cata=item'
        "
        @click="store.setCataId(item.cata_id)"
      >
        <el-icon :size="17">
          <FolderOpened v-if="store.active_cataid == item.cata_id" />
          <FolderRemove v-else />
        </el-icon>
        <span class="text">{item.cata_name}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { indexStore } from "@/stores";
import { FolderRemove, FolderOpened } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";
const store = indexStore();
const toCreate = () => {
  ElMessageBox.prompt("输入文件夹名称", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    inputPlaceholder: "不超过10个字",
  }).then((res) => {
    console.log(res);
    if (res.value) {
      store.createCata({
        user_id: 4204,
        cata_name: res.value,
      });
    }
  });
};
</script>
