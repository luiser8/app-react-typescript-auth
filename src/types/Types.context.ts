import { IUserAuth } from "../interfaces/IUserAuth";

export type TypesContext = {
  setDataUser: (userAuth: IUserAuth) => void;
  getToken: () => string;
  getEmail: () => string;
  login: (userAuth: IUserAuth) => void;
  logout: () => void;
};
