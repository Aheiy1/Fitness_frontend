import React, { useEffect, useState } from "react";
// import { DeletePost } from "./index.js";
import { fetchMyRoutines, deleteRoutine, getRoutines } from "../api/Routines";

const MyRoutines = ({setRoutines}) => {
  const [myRoutines, setMyRoutines] = useState([]);

  const [token, setmytoken] = useState("");
  const [storedName, setStoredName] = useState("");

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
        setMyRoutines(routines);
      }
      getMyRoutines();
    }
  }, [token]);

  const handleDelete = async (e) => {
    try {
      await deleteRoutine(e.target.id);

      const routines = await getRoutines();
      setRoutines(routines);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   deleteRoutine();
  // }, []);

  if (storedName) {
    return (
      <>
        <h1 className="welcomeText">Welcome {storedName}</h1>
        <h2>{"My Routines:"}</h2>
        <div className="routine">
          {myRoutines.map((myRoutine) => {
            return (
              <>
                <div className="postCard" key={`${myRoutine._id} myroutine`}>
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
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={(event) => handleDelete(event)}
                  >
                    Delete
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
