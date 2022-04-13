import React, { useEffect, useState } from "react";
import { fetchMyRoutines, deleteRoutine} from "../api/Routines";

const MyRoutines = () => {
  const [myRoutines, setMyRoutines] = useState([]);

  const [token, setmytoken] = useState("");
  const [storedName, setStoredName] = useState("");

  useEffect(() => {
    setmytoken(localStorage.getItem("token"));
    setStoredName(localStorage.getItem("username"));
  }, []);
  useEffect(() => {
    if (storedName) {
      async function getMyRoutines() {
        const routines = await fetchMyRoutines(token, storedName);

        setMyRoutines(routines);
      }
      getMyRoutines();
    }
  }, [token]);

  if (storedName) {
    return (
      <>
        <h1 className="welcomeText">Welcome {storedName}</h1>
        <h2>{"My Routines:"}</h2>
        <div className="routine">
          {myRoutines.map((routine) => {
            return (
              <>
                <div className="postCard" key={`${routine._id} myroutine`}>
                  Title:
                  <div className="titie">{routine.name}</div>
                  <div className="author">
                    Creator:
                    <div id="author">{routine.creatorId}</div>
                  </div>
                  <div className="goal">
                    Goal:
                    <div id="goal">{routine.goal}</div>
                  </div>
                  <button
                    onClick={async () => {
                      const routineId = routine.id;
                      await deleteRoutine(token, routineId);
                   
                    }}
                  >
                    Delete Routine
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
