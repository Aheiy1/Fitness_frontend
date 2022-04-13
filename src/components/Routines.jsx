// import { Link } from "react-router-dom";
// import { useEffect } from "react";
import React, { useEffect, useState} from "react";
import { RoutineCard } from "./index";
import{MyRoutineCard} from "./index";
import { getRoutines } from "../api/Routines";


const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const getAllRoutines = async () => {
      const AllRoutines= await getRoutines();
      setRoutines(AllRoutines);
    };
    getAllRoutines();
  });
  return routines.map((routine) => {
    return (<div>
      <RoutineCard routine={routine} key={routine.id} deleteable={false} />
      <MyRoutineCard routine={routine} key={routine.id} deleteable={true} />

      </div>
    );
  });
};

export default Routines;
