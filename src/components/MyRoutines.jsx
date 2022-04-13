import React, { useEffect, useState } from "react";
// import { DeletePost } from "./index.js";
import { fetchMyRoutines, deleteRoutine, getRoutines } from "../api/Routines";
import { MyRoutineCard } from "./index";




const MyRoutines = ({routines, setRoutines}) => {
  //   console.log(routines)
  const [myRoutines, setMyRoutines] = useState([]);
  // const [routineId, setRoutineId] = useState("");
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
          {myRoutines.map((routine) => {
            return (
              <MyRoutineCard
                routine={routine}
                setRoutines={setRoutines}
                key={routine.id}
                deleteable={true}
                
              />
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
