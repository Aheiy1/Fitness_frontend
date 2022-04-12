import React, { useState } from "react";
import { registerUser } from "../api/Users";

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userSubmit = async (e) => {
    e.preventDefault();
    // console.log(username, "username")
    // console.log(password, "password")

    try {
      const result = await registerUser(username, password);
      if (result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", username);
        setToken(result.token);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <form id="newUser" onSubmit={userSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
