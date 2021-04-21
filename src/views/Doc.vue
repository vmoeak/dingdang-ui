<template>
  <div class="layout">
    <topnav class="nav" toggleMenuButtonVisible />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default defineComponent({
  name: "Doc",
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
});
</script>

<style lang="scss" scoped >
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .content {
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  > main {
    padding: 16px;
  }
}
aside {
  width: 180px;
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  padding-top: 100px;
  height: 100%;
  z-index: $aside-index;
  box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  > h2 {
    margin-bottom: 4px;
    margin-top: 16px;
    padding: 0 16px;
    font-weight: 700;
    font-size: 16px;
  }
  > ol {
    > li {
      font-size: 16px;
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: #e5f2fa;
      }
    }
  }
}
</style> 