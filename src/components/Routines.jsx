import { Link } from "react-router-dom";
const Routine = ({routines}) => {
    

// console.log(routines, "routines")


  
  return (
    <div>
    <>
      <h1>Routines</h1>
      {localStorage.getItem("token") ? (
        <Link to="CreateRoutine">
          <button type="button">Create Routine</button>
        </Link>
      ) : null}
      {routines ? routines.map((routine, i) => {
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