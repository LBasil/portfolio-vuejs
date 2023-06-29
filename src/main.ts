import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.bundle.js"; // Importez le fichier JavaScript de Bootstrap en premier
import "ant-design-vue/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css"; // Ensuite, importez le fichier CSS de Bootstrap
import AccueilComponent from "./components/AccueilComponent.vue";
import ProjetsComponent from "./components/ProjetsComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";

const app = createApp(App);

const routes = [
  { path: "/", redirect: "/accueil" },
  { path: "/accueil", component: AccueilComponent },
  { path: "/projets", component: ProjetsComponent },
  { path: "/contact", component: ContactComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router).use(Antd).mount("#app");
