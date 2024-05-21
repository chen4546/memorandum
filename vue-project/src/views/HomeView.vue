<!--HomeView.vue-->
<template>
  <main class="home-point">
    <cust-header></cust-header>
    <router-view></router-view>
  </main>
</template>
<script setup lang="ts">
import CustHeader from "@/components/CustHeader.vue";
</script>
