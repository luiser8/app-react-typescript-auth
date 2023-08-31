import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IForgot } from "../../interfaces/IUserAuth";

const Forgot = () => {
  const [errorForgot, setErrorForgot] = useState({
    isError: false,
    msj: "",
  });
  const [userForgot, setUserForgot] = useState<IForgot>({
    email: "",
    code: "",
  });

  return (
    <div className="forgot-page">
      <div className="form">
        <form className="forgot-form">
          <input
            required
            type="email"
            placeholder="Email"
            value={userForgot.email}
            onChange={(ev) =>
              setUserForgot({ ...userForgot, email: ev.target.value })
            }
          />
          <button type="submit">Receive code</button>
        </form>
        <Link to={"/"}>Return login</Link>
      </div>
    </div>
  );
};

export default Forgot;
