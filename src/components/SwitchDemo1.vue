<demo>常规用法</demo>
<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import { Switch } from "../lib/index";
import { defineComponent, ref } from "vue";
export default defineComponent({
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