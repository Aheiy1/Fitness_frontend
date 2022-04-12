import { useState, useEffect } from "react";


const Routine = ({routines}) => {
    




  
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