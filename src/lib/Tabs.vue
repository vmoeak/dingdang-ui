<template>
  <div>
    Tabs组件
    <div v-for="(title, index) in titles" :key="index">{{ title }}</div>
    <component
      v-for="(component, index) in defaults"
      :is="component"
      :key="index"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Tab from "./Tab.vue";
export default defineComponent({
  name: "Tabs",
  setup(props, ctx) {
    const defaults = ctx.slots.default?.();
    defaults?.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs字标签必须为Tab");
      }
    });
    const titles = defaults?.map((tag) => {
      return tag.props?.title;
    });
    return {
      defaults,
      titles,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>