<template>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="y"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  ></Dialog>
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
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return {
      y,
      toggle,
      f1,
      f2,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>