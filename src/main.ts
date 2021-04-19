import { createApp } from "vue";
import App from "./App.vue";
import "./lib/ui.scss";
import "./index.scss";
import "github-markdown-css";
import { router } from "./router";
import "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";

const app = createApp(App);
app.use(router);
app.mount("#app");
