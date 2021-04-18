<template>
  <Switch v-model:value="bool" />
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
    const bool = ref(false);
    return {
      bool,
    };
  },
});
</script>