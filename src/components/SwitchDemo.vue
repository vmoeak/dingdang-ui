<template>
  <Switch :value="y" @update:value="y = $event" />
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