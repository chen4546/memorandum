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
import { ref, computed, watch, nextTick, onMounted } from "vue";
import { indexStore } from "@/stores";
import Cataloge from "./catalogs.vue";
import Menos from "./menos.vue";
const store = indexStore();
const title = ref("");
const content = ref("");
const cur_memoid = computed(() => store.active_memoid);
const updateCtx = () => {
  let cur_memo = store.activeMemos.find(
    (row) => row.memo_id == cur_memoid.value
  );
  if (cur_memo) {
    //debugger;
    //避免数据修改页面不更新
    nextTick(() => {
      title.value = cur_memo.title;
      content.value = cur_memo.content;
    });
  }
};
watch(cur_memoid, (val) => {
  if (val) {
    updateCtx();
  } else {
    title.value = content.value = "";
  }
});
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
