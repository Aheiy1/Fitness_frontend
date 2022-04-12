import React, { useEffect, useState } from "react";

// import { Routines } from './components'
import {
  Register,
  Login,
  Routines,
  MyRoutines,
  CreateRoutine,
  LogOut,
} from "./components";
import { fetchMe } from "../src/api/Users";

// import {getRoutines} from './components/Routines.jsx'

// import {fetchActivities} from './api/Activities'
function App() {
  const [token, setToken] = useState("");
  // const [postId, setPostId] = useState(null);
  const [userObj, setUserObj] = useState({});
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    async function getUser() {
      const data = await fetchMe(storedToken);
      setUserObj(data.data);
    }
    if (storedToken) {
      setToken(storedToken);
      getUser();
    }
  }, [token]);

  const getRoutines = async () => {
    const fetchRoutines = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await fetchRoutines.json();
    console.log(response);
    setRoutines(response);
  };
  useEffect(() => {
    getRoutines();
  }, []);

  // useEffect(() => {

  //   getRoutines();
  // }, []);

  // useEffect(() => {
  //   const getAllPosts = async () => {
  //     const allPosts = await fetchPosts();
  //     setPosts(allPosts.reverse());
  //   };
  //   getAllPosts();

  // }, []);

  return (
    <div>
      <Login setToken={setToken} />
      <LogOut />
      <Register setToken={setToken} />
      <CreateRoutine
        setToken={setToken}
        routines={routines}
        setRoutines={setRoutines}
      />
      {/* <Activities /> */}
      <MyRoutines
        routines={routines}
        setRoutines={setRoutines}
        userObj={userObj}
      />
      <Routines routines={routines} />
    </div>
  );
}
export default App;
