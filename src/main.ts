import { createApp } from "vue";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import First from "./components/First.vue";
import Second from "./components/Second.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: First },
    { path: "/xxx", component: Second },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
