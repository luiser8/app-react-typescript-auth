import React, { createContext, useState } from "react";
import useStorage from "./useStorage";
import { TypesContext } from "../types/Types.context";
import { IUserAuth } from "../interfaces/IUserAuth";

export const authContext = createContext<TypesContext | null>(null);

const userDataInitial: IUserAuth = {
  email: "",
  token: "",
};

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const { getEmailStorage, getLocalStorage, setLocalStorage } = useStorage();
  const [dataUser, setDataUser] = useState<IUserAuth>(userDataInitial);

  const getEmail = () => {
    return getEmailStorage() as string;
  };
  const getToken = () => {
    return getLocalStorage() as string;
  };
  const login = (userAuth: IUserAuth) => {
    setLocalStorage(1, userAuth);
    setDataUser(userAuth);
  };
  const logout = () => {
    setLocalStorage(2, null);
    setDataUser(userDataInitial);
  };

  return (
    <authContext.Provider
      value={{
        setDataUser,
        getToken,
        getEmail,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
