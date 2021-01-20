import React , {lazy}  from 'react';

const Login = lazy(() => import('../../features/Login'));
const Register = lazy(()=> import('../../features/Register'));
const Main = lazy(()=> import('../../features/Main'));
const DashBoard = lazy(()=> import('../../features/DashBoard'));
const NotFound = lazy(()=> import('./Error'));

const routes = [
  { path: '/login', exact:'/login', name: 'Login', component: Login },
  { path: '/register', exact:'/register', name: 'Register', component: Register },
  { path: '/dashboard', exact:'/dashboard', name: 'Dashboard', component: DashBoard },
  {path:'/notfound' , name:'Not found' , component: NotFound},
  { path: '/', exact:'/' , name: 'Main', component: Main },
];

export default routes;
