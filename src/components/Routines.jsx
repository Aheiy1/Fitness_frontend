import { useState, useEffect } from "react";
import {URL} from './api/index'

const Routine = () => {
    const [fetchroutine, setFetchRoutine] = useState([]);


const getRoutines = async () => {
    const fetchRoutines = await fetch(
      `${URL}routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await fetchroutine.json();
    console.log(response);
    setFetchRoutine(response);
  };
  useEffect(() => {
    getRoutines();
  }, []);

}


}).then(response => response.json())
.then(result => {
  console.log(result);
})
.catch(console.error);