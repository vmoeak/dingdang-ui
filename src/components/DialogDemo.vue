<template>
  <Dialog v-model:visible="y" />
  <Button @click="toggle">toggle</Button>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
export default defineComponent({
  name: "DialogDemo",
  components: {
    Dialog,
    Button,
  },
  setup() {
    const y = ref(false);
    const toggle = () => {
      y.value = !y.value;
    };
    return { y, toggle };
  },
});
</script>

<style lang="scss" scoped>
</style>