import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import IndexPage from "../views/IndexPage.vue";
import FormWizard from "../views/FormWizard.vue";
import AgeErrorPage from "../views/AgeErrorPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "indexPage",
    component: IndexPage,
  },
  {
    path: "/step/:stepid",
    name: "formWizard",
    component: FormWizard,
  },
  {
    path: "/age/error",
    name: "ageErrorPage",
    component: AgeErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export { routes };
export default router;
