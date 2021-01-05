import React , {lazy}  from 'react';

const Login = lazy(() => import('../../features/Login/Login'));
const Register = lazy(()=> import('../../features/Login/Register'));
const Main = lazy(()=> import('../../features/Main/Main'));
const Pricing = lazy(()=> import('../../features/Pricing/Pricing'));
const Product = lazy(()=> import('../../features/Product/Product'));
const NotFound = lazy(()=> import('../Layout/Error/NotFound'));

const routes = [
  { path: '/login', exact:'/login', name: 'Login', component: Login },
  { path: '/register', exact:'/register', name: 'Register', component: Register },
  { path: '/pricing',exact:'/pricing' , name: 'Pricing', component: Pricing },
  { path: '/product',exact:'/product' , name: 'Product', component: Product },
  {path:'/notfound' , name:'Not found' , component: NotFound},
  { path: '/', exact:'/' , name: 'Main', component: Main },
];

export default routes;
