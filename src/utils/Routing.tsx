import { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { TypesContext } from "../types/Types.context";
import { authContext } from "../auth/useContext";
import Error from "../components/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import PostsRegister from "../pages/Posts/PostsRegister";

export default function Routing() {
  const { getToken } = useContext(authContext) as TypesContext;

  return useRoutes([
    {
      path: "/",
      element: getToken() !== null ? <Home /> : <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot",
      element: <PostsRegister />,
    },
    {
      path: "/posts/new",
      element: <PostsRegister />,
    },
    {
      path: "/404",
      element: <Error />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
