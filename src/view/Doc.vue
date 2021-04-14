<template>
  <div>
    <topnav />
    <div class="content">
      <aside>边栏</aside>
      <main>主内容</main>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import Topnav from "../components/Topnav.vue";
export default defineComponent({
  name: "Doc",
  components: {
    Topnav,
  },
});
</script>