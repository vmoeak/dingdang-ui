<template>
  <Switch v-model:value="y" />
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import Switch from "../lib/Switch.vue";
export default defineComponent({
  name: "SwitchDemo",
  components: {
    Switch,
  },
  setup() {
    const y = ref(false);
    return {
      y,
    };
  },
});
</script>