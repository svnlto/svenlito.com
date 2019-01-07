import Vue from 'vue';
import Router from 'vue-router';

// lazy load components
const Home = () => import('@/views/Home.vue');
const Work = () => import('@/views/Work.vue');
const Contact = () => import('@/views/Contact.vue');
const Thanks = () => import('@/views/Thanks.vue');
const NotFound = () => import('@/views/NotFound.vue');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base:
    process.env.NODE_ENV === 'production'
      ? process.env.URL
      : process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
      meta: {
        title: 'Work'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Contact'
      }
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks,
      meta: {
        title: 'Thanks'
      }
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
      meta: {
        title: 'Not Found'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
