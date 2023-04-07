import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TypesContext } from "../types/Types.context";
import { authContext } from "../auth/useContext";
import NavBar from "./NavBar";
import Routing from "../utils/Routing";

const Layout = () => {
  const navigate = useNavigate();
  const { getToken, getEmail, logout } = useContext(
    authContext,
  ) as TypesContext;

  const logoutSession = (): void => {
    logout();
    navigate("/");
  };

  return (
    <div>
      {getToken() != null ? (
        <NavBar email={getEmail()} logout={logoutSession} />
      ) : (
        <></>
      )}
      <Routing />
    </div>
  );
};

export default Layout;
