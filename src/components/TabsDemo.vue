<template>
  <div>
    <Tabs>
      <Tab title="first">内容1</Tab>
      <Tab title="second">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default defineComponent({
  name: "TabsDemo",
  components: {
    Tab,
    Tabs,
  },
});
</script>

<style lang="scss" scoped>
</style>