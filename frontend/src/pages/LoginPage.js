import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function LoginPage() {
  const { LoginUser } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={(e) => LoginUser(e)}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
