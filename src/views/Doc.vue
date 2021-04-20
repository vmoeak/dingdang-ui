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
.router-link-active {
  text-decoration: underline;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: $aside-index;
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
  background: lightblue;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: white;
      }
    }
  }
}
</style> 