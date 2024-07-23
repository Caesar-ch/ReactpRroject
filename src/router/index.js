import { Navigate } from "react-router-dom";
import Home from "../views/home/Home.jsx";
import React from "react";

// 懒加载,分包组件写法
const Menu = React.lazy(() => import("../views/Menu"));
const DashBoard = React.lazy(() => import("../views/dashboard/DashBoard"));
const Community = React.lazy(() => import("../views/community/Community"));

const Login = React.lazy(() => import("../views/login/Login"));

const routes = [
  { path: '/home', element: <Home/> },
  { path: '/menu', element: <Menu/> },
  { path: '/menu', element: <Menu/> },
  { path: '/dashboard', element: <DashBoard/> },
  { path: '/community', element: <Community/> },
  { path: '/login', element: <Login/>},
  { path: '/', element: <Navigate to='/home'></Navigate> },
]

export default routes;