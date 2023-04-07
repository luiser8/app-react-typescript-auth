const useStorage = () => {
    const getEmailStorage = () => {
      const value: string | null = window.localStorage.getItem("email");

      return value;
    };
    const getLocalStorage = () => {
      return window.localStorage.getItem("token");
    };

    const setLocalStorage = (
      type: number,
      data: { email: string; token: string } | null
    ) => {
      if (type === 1) {
        if (data !== null) {
          window.localStorage.setItem("email", data.email);
          window.localStorage.setItem("token", data.token);
        }
      } else if (type === 2) {
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("token");
      }
    };

    return {
      getEmailStorage,
      getLocalStorage,
      setLocalStorage,
    };
  };

  export default useStorage;