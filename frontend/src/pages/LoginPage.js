import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function LoginPage() {
  const { LoginUser } = useContext(AuthContext);
  return (
    <div className="login">
      <div className="login-bg"></div>
      <div className="login-form">
        <form onSubmit={(e) => LoginUser(e)}>
          <div>
            <h3>Login account</h3>
            <p></p>
          </div>
          <input type="text" name="username" placeholder="Username" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
