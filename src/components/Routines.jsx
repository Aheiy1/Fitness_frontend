import { useState, useEffect } from "react";


const Routine = () => {
    const [routines, setRoutines] = useState([]);


const getRoutines = async () => {
    const fetchRoutines = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines',
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await fetchRoutines.json();
    console.log(response);
    setRoutines(response);
  };
  useEffect(() => {
    
    getRoutines();
  }, []);

  
  return (
    <div>
    <>
      <h1>Routines</h1>
      {routines ? routines.map((routine, i) => {
          console.log("routines: ", routines);
        return (
          <div key={i}>
            <h3>{routine.name}</h3>
            <div>{routine.description}</div>
            <div>{routine.goal}</div>
            <div>{routine.creatorId}</div>
          </div>
        );
      }): null} 
    </>
  </div>
);
};



// }).then(response => response.json())
// .then(result => {
  //   console.log(result);
  // })
  // .catch(console.error);

  export default Routine;