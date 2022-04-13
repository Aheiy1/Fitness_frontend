// import { Link } from "react-router-dom";
// import { useEffect } from "react";
import React, { useEffect, useState } from "react";

import { getRoutines } from "../api/Routines";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const getAllRoutines = async () => {
      const AllRoutines = await getRoutines();
      setRoutines(AllRoutines);
    };
    getAllRoutines();
  });
  
  return (
    <div>
      <>
        <h1>Routines</h1>
        {routines ? routines.map((routine, i) => {
        //   console.log("activity: ", activity);
          return (
            <div key={i}>
              <h3>{routine.name}</h3>
              <div>{routine.goal}</div>
              <div>{routine.creatorname}</div>
            </div>
          );
        }): null} 
      </>
    </div>
  );
};

export default Routines;
