import React, { useState } from "react";
import { registerUser } from "../api/Users";
// import { useHistory } from "react-router-dom";

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   let history = useHistory();
  return (
    <div>
      <form
        className="signupbar"
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await registerUser(username, password);
          console.log(result);
        //   localStorage.setItem("token", result.data.token);
        //   setIsLoggedIn(true);
        //   history.push("/profile");
        }}
      >
        <input
          className="signinput"
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="signinput"
          value={password}
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
