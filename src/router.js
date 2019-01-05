import Vue from 'vue';
import Router from 'vue-router';

// lazy load components
const Home = () => import('@/views/Home.vue');
const Work = () => import('@/views/Work.vue');
const Contact = () => import('@/views/Contact.vue');
const Thanks = () => import('@/views/Thanks.vue');
const NotFound = () => import('@/views/NotFound.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base:
    process.env.NODE_ENV === 'production'
      ? process.env.URL
      : process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
});
