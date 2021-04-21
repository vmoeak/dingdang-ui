<template>
  <div class="topnav">
    <router-link class="logo" to="/">
      <svg class="icon">
        <use xlink:href="#icon-duolaAmeng"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <svg
      v-if="toggleMenuButtonVisible"
      class="toggle-aside"
      @click="toggleMenu"
    >
      <use xlink:href="#icon-meau"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, Ref } from "vue";
export default defineComponent({
  name: "Topnav",
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible!.value = !menuVisible!.value;
    };
    return {
      toggleMenu,
    };
  },
});
</script>
<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  background: #fff;
  display: flex;
  padding: 16px;
  padding-right: 32px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggle-aside {
    display: none;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggle-aside {
      display: inline-block;
    }
  }
}
</style>