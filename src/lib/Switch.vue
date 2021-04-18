<template>
  <button @click="toggle"><span :class="{ checked }"></span></button>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Switch",
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return {
      checked,
      toggle,
    };
  },
});
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: blue;
  border-radius: $h/2;
  position: relative;
}
span {
  display: block;
  height: $h2;
  width: $h2;
  background: white;
  margin-left: 2px;
  margin-right: 2px;
  border-radius: $h2 / 2;
  transition: margin-left 1s;
}
span.checked {
  margin-left: auto;
}
</style>