<template>
  <router-view />
</template>

<script lang="ts" setup>
import { ref, provide } from "vue";
import { router } from "./router";

const width = document.documentElement.clientWidth;
const menuVisible = ref(width <= 500 ? false : true);
provide("menuVisible", menuVisible);
router.afterEach(() => {
  if (width <= 500) {
    menuVisible.value = false;
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>