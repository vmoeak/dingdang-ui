<template>
  <div class="home">
    <topnav class="nav" />
    <div class="banner">
      <h1>Vue UI 框架</h1>
      <p class="actions">
        <a href="https://github.com/vmoeak/dingdang-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码简洁易懂</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Topnav from "../components/Topnav.vue";
export default defineComponent({
  name: "Home",
  components: {
    Topnav,
  },
});
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.nav {
  background: #b7d8df;
}
.features {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  padding: 180px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #b7d8df;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style> 