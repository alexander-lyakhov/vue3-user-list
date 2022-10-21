import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "@/styles/reset.css";
import "@/styles/global.scss";

createApp(App).use(store).mount("#app");
