import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/event/EventList.vue'
import EventDetails from '../views/event/EventDetails.vue'
import EventRegister from '../views/event/EventRegister.vue'
import EventEdit from '../views/event/EventEdit.vue'
import EventLayout from '../views/event/Layout.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit
      }
    ]
  },
  {
    // path: '/event:id',
    path: '/event:afterEvent(.*)', //matches everything after event
    redirect: to => {
      return { path: '/events/' + to.params.afterEvent }
      // return { name: 'EventDetails', params: { id: to.params.id } }
    },
    // children: [
    //   { path: 'register', redirect: () => ({ name: 'EventRegister' }) },
    //   {
    //     path: 'edit',
    //     redirect: to => ({ name: 'EventEdit', params: { id: to.params.id } })
    //   }
    // ]
  },

  {
    path: '/about-us',
    name: 'About',
    component: About
    // alias: '/about'
  },
  {
    path: '/about',
    redirect: { name: About }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
