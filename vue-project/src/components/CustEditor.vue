<template>
  <div class="customcomp-editor">
    <toolbar :editor="editorRef" />
    <!--插槽-->
    <slot />
    <editor
      node="simple"
      v-model="valueHtml"
      @onCreated="(ref) => (editorRef = ref)"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
const valueHtml = ref("<p> hello </p>");
const editorRef = shallowRef();
</script>
<style lang="less">
@import "@wangeditor/editor/dist/css/style.css";
.customcomp-editor {
  width: 100%;
}
</style>
