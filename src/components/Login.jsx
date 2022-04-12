import React, { useState } from "react";
import { fetchLoginResults } from "../api/Users";
// import { useHistory } from "react-router-dom";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   let history = useHistory();

  const userSubmit = async (e) => {
    e.preventDefault();
    console.log(username, "Username")
    console.log(password, "password")

    try {
      const result = await fetchLoginResults(username, password);
      console.log(result.token, "result from login")
      if (result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", username);
        setToken(result.token);
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setUsername("");
      setPassword("");
    //   history.push("/");
    }
  };

  return (
    <div>
      <form id="userQuery" onSubmit={userSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
