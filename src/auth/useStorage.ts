import { IUserAuth } from "../interfaces/IUserAuth";

const useStorage = () => {
  const getUserIdStorage = (): number | null => {
    return Number(window.localStorage.getItem("userId"));
  };
  const getEmailStorage = (): string | null => {
    return window.localStorage.getItem("email");
  };
  const getLocalStorage = (): string | null => {
    return window.localStorage.getItem("token");
  };

  const setLocalStorage = (
    type: number,
    data: IUserAuth | null,
  ) => {
    if (type === 1) {
      if (data !== null) {
        window.localStorage.setItem("userId", data.userId.toString());
        window.localStorage.setItem("email", data.email);
        window.localStorage.setItem("userName", data.userName);
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("role", data.role);
      }
    } else if (type === 2) {
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("userName");
      window.localStorage.removeItem("role");
    }
  };

  return {
    getUserIdStorage,
    getEmailStorage,
    getLocalStorage,
    setLocalStorage,
  };
};

export default useStorage;