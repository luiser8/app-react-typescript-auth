import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IUserRegister } from "../../interfaces/IUserRegister";
import { postUsersService } from "../../http/service/userService";
import Alert from "../../components/Alert";

const Register = () => {
  const [errorRegister, setErrorRegister] = useState({
    isError: false,
    msj: "",
  });
  const [userRegister, setUserRegister] = useState<IUserRegister>({
    userName: "",
    password: "",
    profile: { firstName: "", lastName: "", email: "", photo: "" },
  });

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorRegister({ ...errorRegister, isError: false, msj: "" });
    const { data, error } = await postUsersService(userRegister);
    if (data?.message?.includes("User") || error !== "") {
      setErrorRegister({
        ...errorRegister,
        isError: true,
        msj: data.message || "",
      });
    } else {
      clearInputs();
    }
  };

  const clearInputs = () => {
    setUserRegister({
      ...userRegister,
      userName: "",
      password: "",
      profile: { firstName: "", lastName: "", email: "", photo: "" },
    });
  };

  return (
    <div className="register-page">
      {errorRegister.isError ? <Alert isError={errorRegister} /> : <></>}
      <div className="form">
        <form className="login-form" onSubmit={handleRegister}>
          <input
            required
            type="text"
            placeholder="FirstName"
            value={userRegister.profile?.firstName}
            onChange={(ev) =>
              setUserRegister({
                ...userRegister,
                profile: {
                  ...userRegister.profile,
                  firstName: ev.target.value,
                },
              })
            }
          />
          <input
            required
            type="text"
            placeholder="LastName"
            value={userRegister.profile?.lastName}
            onChange={(ev) =>
              setUserRegister({
                ...userRegister,
                profile: {
                  ...userRegister.profile,
                  lastName: ev.target.value,
                },
              })
            }
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={userRegister.profile?.email}
            onChange={(ev) =>
              setUserRegister({
                ...userRegister,
                profile: {
                  ...userRegister.profile,
                  email: ev.target.value,
                },
              })
            }
          />
          <input
            required
            type="text"
            placeholder="UserName"
            value={userRegister.userName}
            onChange={(ev) =>
              setUserRegister({ ...userRegister, userName: ev.target.value })
            }
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={userRegister.password}
            onChange={(ev) =>
              setUserRegister({ ...userRegister, password: ev.target.value })
            }
          />
          <input
            required
            type="file"
            placeholder="Photo"
            value={userRegister.profile?.photo}
            onChange={(ev) =>
              setUserRegister({
                ...userRegister,
                profile: {
                  ...userRegister.profile,
                  photo: ev.target.value,
                },
              })
            }
          />
          <button type="submit">Register</button>
        </form>
        <Link to={"/"}>Login</Link>
      </div>
    </div>
  );
};

export default Register;
