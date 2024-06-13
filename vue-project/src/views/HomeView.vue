<!--HomeView.vue-->
<template>
  <main class="home-point">
    <cust-header></cust-header>
    <router-view></router-view>
  </main>
  <div class="index-page">
    <div class="catalogs"></div>
    <div class="memos"></div>
    <div class="detail">
      <cust-editor v-model="content">
        <!--{content}-->
        <input placeholder="输入标题" class="memo-title" v-model="title" />
      </cust-editor>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustHeader from "@/components/CustHeader.vue";
import CustEditor from "@/components/CustEditor.vue";
import { ref } from "vue";
const title = ref("");
const content = ref("");
</script>
