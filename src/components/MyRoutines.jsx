import React, { useEffect, useState } from "react";
// import { DeletePost } from "./index.js";
import { fetchMyRoutines } from "../api/Routines";

const MyRoutines = (routines, routineId) => {
  //   console.log(routines)
  const [myRoutines, setMyRoutines] = useState([])
  const [routineId, setRoutineId] = useState("");
  const [token, setmytoken] = useState("");
  const [storedName, setStoredName] = useState("");
  // console.log(myToken);
  // const storedName = localStorage.getItem("username");
  //const token = localStorage.getItem("token");
  useEffect(() => {
    setmytoken(localStorage.getItem("token"));
    setStoredName(localStorage.getItem("username"));
  }, []);
  useEffect(() => {
    if (storedName) {
      console.log(storedName, "stored name");
      async function getMyRoutines() {
        const routines = await fetchMyRoutines(token, storedName);
        console.log(routines, "from my routines");
        setMyRoutines(routines, ...myRoutines);
      }
      getMyRoutines();
      // console.log(myRoutines, "Line 18!!!");
      // setMyRoutines(myRoutines);
    }
  }, [token]);

  const deleteMyRoutine = async () => {
    try {
      const filteredResult = routines.filter(
        (routine) => routine.id !== `${routineId}`
      );
      console.log('watching', filteredResult)
      setMyRoutines(filteredResult, ...routines);

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    deleteMyRoutine();
  }, []);


  const deleteRoutine = async (token, routineId) => {
    console.log(routineId)
    try {
      const response = await fetch(
        `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
        {
          method: "DELETE",
          headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(response)
      return data
    } catch (error) {
      console.error(error);
    }
  }

  console.log(myRoutines, "After use effect");

  if (storedName) {
    return (
      <>
        <h1 className="welcomeText">Welcome {storedName}</h1>
        <h2>{"My Routines:"}</h2>
        <div className="routine">
          {myRoutines.map((myRoutine) => {
            return (
              <>
                <div className="postCard" key={`${myRoutine._id} routine`}>
                  Title:
                  <div className="name">{myRoutine.name}</div>
                  <div className="creator">
                    Creator:
                    <div id="author">{myRoutine.creatorId}</div>
                  </div>
                  <div className="goal">
                    Goal:
                    <div id="goal">{myRoutine.goal}</div>
                  </div>
                  <button onClick={() => deleteRoutine(routineId)}>
                    Delete Post
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  } else {
    return <h1>Please Login</h1>;
  }
};

export default MyRoutines;
