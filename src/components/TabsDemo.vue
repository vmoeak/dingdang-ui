<template>
  <h1>Tabs 示例</h1>
  <Demo :component="TabsDemo1" />
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import Demo from "./Demo.vue";
import TabsDemo1 from "./TabsDemo1.vue";
export default defineComponent({
  name: "TabsDemo",
  components: {
    Demo,
  },
  setup() {
    return {
      TabsDemo1,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>