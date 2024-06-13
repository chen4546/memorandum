<template>
  <div class="customcomp-editor">
    <toolbar :editor="editorRef" />
    <!--插槽-->
    <slot />
    <editor
      mode="simple"
      class="edito-content"
      :dafaultConfig="props.modelValue"
      onChange="onChange"
      @onCreated="(ref) => (editorRef = ref)"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
const valueHtml = ref("<p> hello </p>");
const editorRef = shallowRef();
const props = defineProps<{
  modelValue: string;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", html: string): void;
  (e: "Change", html: string): void;
}>();
const onChange = (editor) => {
  emits("update:modelValue", editor.getHtml());
  //let tool bar=DomEditor.getToolbar(editor);
};
</script>
<style lang="less">
@import "@wangeditor/editor/dist/css/style.css";
.customcomp-editor {
  width: 100%;
}
</style>
