<template>
  <div class="index-pang">
    <div class="catalogs">
      <!--文件夹区域-->
      <cataloge></cataloge>
    </div>
  </div>
  <div class="memos">
    <!--备忘录区域-->
    <menos></menos>
  </div>
  <div class="detail">
    <!--编辑器区域-->
  </div>
</template>
<script setup lang="ts">
import { indexStore } from "@/stores";
import Cataloge from "./catalogs.vue";
import Menos from "./menos.vue";
const store = indexStore();
</script>
<style lang="less">
.index-page {
  display: flex;
  align-items: stretch;
  height: calc(100vh-55px);
  .catalogs {
    width: 20%;
    background: #f9f9f9;
  }
  .memos {
    width: 25%;
  }
  .detail {
    flex: 1;
  }
}
</style>
