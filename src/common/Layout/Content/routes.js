import React , {lazy}  from 'react';

const Login = lazy(() => import('../../../features/Login/Login'));
const Register = lazy(()=> import('../../../features/Register/Register'));
const Main = lazy(()=> import('../../../features/Main/Main'));
const Pricing = lazy(()=> import('../../../features/Pricing/Pricing'));
const Product = lazy(()=> import('../../../features/Product/Product'));

const routes = [
  { path: '/main', name: 'Main', component: Main },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/pricing', name: 'Pricing', component: Pricing },
  { path: '/product', name: 'Product', component: Product },
];

export default routes;
