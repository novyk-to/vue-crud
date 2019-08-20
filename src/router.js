import VueRouter from 'vue-router';
import View from './components/View';
import Add from './components/Add';
import Edit from './components/Edit';


const routes = [
  { name: 'view', path: '/', component: View },
  { name: 'add', path: '/add', component: Add },
  { name: 'edit', path: '/edit/:index', component: Edit, props: true },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

export default router;
