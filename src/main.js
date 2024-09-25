import { createApp } from "vue";
import App from "./App.vue";
// Related to Router
import { createRouter, createWebHistory } from "vue-router";
import i18n from "./i18n";

// // Import your components
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Team from "@/pages/Teams/Team.vue";
import CourseInfo from "@/components/CourseInfos.vue";
import Repository from "@/pages/Repository.vue"
//Component CourseInfo is the component that call to API

import pinia from "@/Store/Index";
import RegisterForm from "@/components/RegisterForm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/team", component: Team },
  { path: "/courses", component: CourseInfo },
  //It means when the user click on courses go to course page and call CourseInfo Component to process
  //Convention /anypath is small letter in webpage

  {path:"/repository", component: Repository},
  {path:"/register", component: RegisterForm},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(pinia);
app.mount("#app");
