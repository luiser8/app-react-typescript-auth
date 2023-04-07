import React, { useContext, useState } from "react";
import { IUserAuth } from "../interfaces/IUserAuth";
import { TypesContext } from "../types/Types.context";
import { authContext } from "../auth/useContext";
import "../../public/css/form.css";
import { postUsersLoginService } from "../http/service/userService";

const Login = () => {
  const { login } = useContext(authContext) as TypesContext;
  const [user, setUser] = useState<IUserAuth>({
    email: "",
    password: "",
    token: "dtryrpgogmgshuewijrimiremroeroekroemfenmfemn",
  });

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    const loginData = await postUsersLoginService(user);
    if (
      user.email === loginData.email &&
      user.password === loginData.password
    ) {
      login({
        email: user.email,
        password: user.password,
        token: loginData.token,
      });
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            required
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(ev) => setUser({ ...user, email: ev.target.value })}
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(ev) => setUser({ ...user, password: ev.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
