import React , {lazy}  from 'react';

const Login = lazy(() => import('../../Login/Login'));
const Register = lazy(()=> import('../../Register/Register'));
const Main = lazy(()=> import('../../Main/Main'));

const routes = [
  { path: '/main', name: 'Main', component: Main },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
];

export default routes;
