import React from "react";
import { Link } from "react-router-dom";

import { LogOut } from "./index.js";

const Navbar = () => {
  return (
    <nav class="nav-bar">
      <div class="lnk">
        <Link class="link" to="/">
          Home
        </Link>
        <Link class="link" to="/MyRoutines">
          My Routines
        </Link>
        <Link class="link" to="/MyActivities">
          My Activities
        </Link>
        <Link class="link" to="/CreateRoutine">
          Create Routine
        </Link>
      </div>
      <h1>Fitness Tracker</h1>
      {!localStorage.getItem("token") ? (
        <div class="btn">
          <Link class="log" to="/Login">
            <button type="button">Login</button>
          </Link>
          <Link class="log" to="/SignUp">
            <button type="button">SignUp</button>
          </Link>
        </div>
      ) : (

        <div class="btn">
          <Link class="log" to="/LogOut">
            <LogOut />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;