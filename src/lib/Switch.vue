<template>
  <button class="ui-switch" @click="toggle" :class="{ 'ui-checked': value }">
    <span></span>
  </button>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Switch",
  props: {
    value: Boolean,
  },
  setup(props, ctx) {
    const toggle = () => {
      ctx.emit("update:value", !props.value);
    };
    return {
      toggle,
    };
  },
});
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.ui-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    display: block;
    height: $h2;
    width: $h2;
    background: white;
    margin-left: 2px;
    margin-right: 2px;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.ui-checked {
    background: #1890ff;
  }
  &.ui-checked > span {
    margin-left: auto;
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
}
</style>