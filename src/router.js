import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ExamRequestListingView from "./views/ExamRequestListingView.vue";
import ExamListingView from "./views/ExamListingView.vue";
import CashierView from "./views/CashierView.vue";
import ReceptionistView from "./views/ReceptionistView.vue";
import PatientRegistrationComponent from "@/components/PatientRegistrationComponent.vue";
import ResultRenderingComponent from "@/components/ResultRenderingComponent.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { path: "/", component: Home },
    {
      path: "/:laboratoryname/biologist/:username",
      component: ExamRequestListingView
    },
    {
      path: "/:laboratoryname/labtech/:username",
      component: ExamRequestListingView,
    },
    {
      path: "/:laboratoryname/labtech/:username/exams",
      component: ExamListingView
    },
    { path: "/:laboratoryname/cashier/:username", component: CashierView },
    {
      path: "/:laboratoryname/receptionist/:username",
      component: ReceptionistView,
      children: [
        {
          path: "registration",
          component: PatientRegistrationComponent
        },
        {
          path: "results",
          component: ResultRenderingComponent
        }
      ]
    }
  ]
});
