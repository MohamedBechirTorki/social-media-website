import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function LoginPage() {
  const { LoginUser } = useContext(AuthContext);
  return (
    <div className="login">
      <div>
        <img src="images/login-bg.avif" />
      </div>
      <form onSubmit={(e) => LoginUser(e)} className="login-form">
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
