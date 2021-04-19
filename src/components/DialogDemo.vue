<template>
  <h1>Dialog 示例</h1>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
</template>

<script lang='ts'>
import { defineComponent, ref, h } from "vue";
import Demo from "./Demo.vue";
import DialogDemo1 from "./DialogDemo1.vue";
import DialogDemo2 from "./DialogDemo2.vue";
export default defineComponent({
  name: "DialogDemo",
  components: {
    Demo,
  },
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>