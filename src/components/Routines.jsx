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
    
    routines.map((routine, i) => (
      
      <div key={i}>
      <h1>Routines</h1>

      <h3>Routine Title</h3>
      <div> {routine.name}</div>
      <h3>Goal</h3>
      <div>{routine.goal}</div>
      <h3>Creator </h3>
      <div> {routine.creatorName}</div>

      {
      routine.activities.map((activity, i) => {
        return (
          <div key={i}>
            <h1>Activities</h1>

            <h3>Activity Name</h3>
            <div> {activity.name}</div>
            <h3>Description </h3>
            <div> {activity.description}</div>
            <h3>Reps</h3>
            <div> {activity.count}</div>
            <h3>Duration</h3>
            <div> {activity.duration}</div>
          </div>
   
        );
      })}
    </div>
      )
  ));
};

export default Routines;
