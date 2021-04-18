<template>
  <div>
    <Tabs v-model:selected="y">
      <Tab title="first">内容1</Tab>
      <Tab title="second">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default defineComponent({
  name: "TabsDemo",
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const y = ref("first");
    return {
      y,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>