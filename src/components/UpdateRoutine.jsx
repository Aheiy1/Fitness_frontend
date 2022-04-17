import React, { useState } from "react";

const UpdateRoutine = ({
  routineId,
  setRoutineId,
  myRoutines,
  setMyRoutines,
}) => {
  const [name, setName] = useState([]);
  const [goal, setGoal] = useState([]);
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("name", name);
    console.log("description", goal);
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
        }),
      }
    );

    const data = await response.json();

    if (data && data.name) {
      const newRoutines = myRoutines.map((routine) => {
        if (routine.id === routineId) {
          console.log(data);
          return data;
        } else {
          return routine;
        }
      });

      setMyRoutines(newRoutines);

      setRoutineId(null);
    }
  };

  return (
    <>
      <h3>Update my Routine</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default UpdateRoutine;
