<template>
  <div>
    <topnav />
    <div class="banner">
      <h1>UI</h1>
      <h2>一个vue3 UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Topnav from "../components/Topnav.vue";
export default defineComponent({
  name: "Home",
  components: {
    Topnav,
  },
});
</script>
<style lang="scss" scoped>
</style> 