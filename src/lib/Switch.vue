<template>
  <button @click="onClick"><span :class="{ transition: x }"></span></button>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Switch",
  setup() {
    const x = ref(false);
    const onClick = () => {
      x.value = !x.value;
    };
    return {
      x,
      onClick,
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
  // position: absolute;
  // top: 2px;
  // left: 2px;
  display: block;
  height: $h2;
  width: $h2;
  background: white;
  margin-left: 2px;
  margin-right: 2px;
  border-radius: $h2 / 2;
  transition: margin-left 1s;
}
.transition {
  margin-left: auto;
}
</style>