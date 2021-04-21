import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./markdown/SwitchDemo.md";
import ButtonDemo from "./components/ButtonDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import intro from "./markdown/intro.md";
import getStart from "./markdown/getStart.md";
import install from "./markdown/install.md";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        { path: "intro", component: intro },
        { path: "get-started", component: getStart },
        { path: "install", component: install },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
