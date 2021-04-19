<template>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="y"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <div>hi</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang='ts'>
import { defineComponent, ref, h } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
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
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      y,
      toggle,
      f1,
      f2,
      showDialog,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>