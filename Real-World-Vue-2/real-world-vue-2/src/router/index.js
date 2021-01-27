import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "@/views/EventList.vue";
import EventCreate from "@/views/EventCreate.vue";
import EventShow from "@/views/EventShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/event-list",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event-show/:id",
    name: "event-show",
    component: EventShow,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
