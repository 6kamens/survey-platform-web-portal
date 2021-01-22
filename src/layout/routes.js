import React, {
  lazy
} from 'react';

const Login = lazy(() => import('../features/Login'));
const Register = lazy(() => import('../features/Register'));
const Main = lazy(() => import('../features/Main'));
const DashBoard = lazy(() => import('../features/DashBoard'));
const NotFound = lazy(() => import('./Error'));


const routes = {
  login: {
    path: '/login',
    exact: '/login',
    name: 'Login',
    component: Login
  },
  register : {
    path: '/register',
    exact: '/register',
    name: 'Register',
    component: Register
  },
  dashboard : {
    path: '/dashboard',
    exact: '/dashboard',
    name: 'Dashboard',
    component: DashBoard
  },
  main: {
    path: '/',
    exact: '/',
    name: 'Main',
    component: Main
  }
};


const guest ={
  routes:[
    routes.login,
    routes.register,
    routes.main
  ],
  redirect:{
    ...routes.login
  }
} ;

const member = {
  routes:[
    routes.dashboard,
    routes.main
  ],
  redirect:{
    ...routes.dashboard 
  }
} 


export default {
  guest,
  member
};