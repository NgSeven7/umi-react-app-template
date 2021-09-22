import { Routes } from '../src/constants/route';

export default [
  {
    path: '/',
    component: '../containers',
    routes: [
      { path: '/', redirect: Routes.Nav },
      {
        path: Routes.Nav,
        component: '../containers/Nav',
      },
    ],
  },
];
