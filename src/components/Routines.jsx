// import { Link } from "react-router-dom";
// import { useEffect } from "react";
const Routine = ({ routines }) => {
  // console.log(routines, "routines")

  console.log(routines)

  return (
    
    routines.map((routine) => (
      
      <div key={`${routines._i} routines`}>
      <h1>Routines</h1>

      <h3>Routine Title</h3>
      <div> {routine.name}</div>
      <h3>Goal</h3>
      <div>{routine.goal}</div>
      <h3>Creator </h3>
      <div> {routine.creatorName}</div>

      {
      routine.activities.map((activities) => {
        return (
          <div key={`${activities._id} activities`}>
            <h1>Activities</h1>

            <h3>Activity Name</h3>
            <div> {activities.name}</div>
            <h3>Description </h3>
            <div> {activities.description}</div>
            <h3>Reps</h3>
            <div> {activities.count}</div>
            <h3>Duration</h3>
            <div> {activities.duration}</div>
          </div>
   
        );
      })}
    </div>
      )
  ));
};
// }).then(response => response.json())
// .then(result => {
//   console.log(result);
// })
// .catch(console.error);

export default Routine;
