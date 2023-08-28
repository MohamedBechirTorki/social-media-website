import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function LoginPage() {
  const { LoginUser } = useContext(AuthContext);
  return (
    <div className="login">
      <div className="login-bg"></div>
      <div className="login-form">
        <form onSubmit={(e) => LoginUser(e)}>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
