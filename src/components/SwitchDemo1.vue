<demo>1</demo>
<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
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