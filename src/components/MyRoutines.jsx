import React, { useEffect, useState } from "react";
// import { DeletePost } from "./index.js";
import { fetchMyRoutines } from "../api/Routines";

const MyRoutines = () => {
  //   console.log(routines)
  const [myRoutines, setMyRoutines] = useState([]);
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
