<template>
  <div class="ui-tabs">
    <div class="ui-tabs-nav" ref="container">
      <div
        class="ui-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
        :class="{ selected: t === selected }"
        :ref="
          (el) => {
            if (t === selected) selectedItems = el;
          }
        "
      >
        {{ t }}
      </div>
      <div class="ui-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="ui-tabs-content">
      <component
        class="ui-tabs-content-item"
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, onMounted, onUpdated } from "vue";
import Tab from "./Tab.vue";
export default defineComponent({
  name: "Tabs",
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, ctx) {
    const selectedItems = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const { width } = selectedItems.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItems.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    };
    onMounted(x);
    onUpdated(x);
    const defaults = ctx.slots.default?.();
    defaults?.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs字标签必须为Tab");
      }
    });
    const titles = defaults?.map((tag) => {
      return tag.props?.title;
    });
    const current = computed(() => {
      return defaults?.find((item) => {
        return item.props?.title === props.selected;
      });
    });
    const select = (title: string) => {
      ctx.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      current,
      select,
      x,
      selectedItems,
      container,
      indicator,
    };
  },
});
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.ui-tabs {
  &-nav {
    display: flex;
    position: relative;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      z-index: 9999;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>