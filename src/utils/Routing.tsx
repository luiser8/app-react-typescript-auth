import { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { TypesContext } from "../types/Types.context";
import { authContext } from "../auth/useContext";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function Routing() {
  const { getToken } = useContext(authContext) as TypesContext;

  return useRoutes([
    {
      path: "/",
      element: getToken() !== null ? <Home /> : <Login />,
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
