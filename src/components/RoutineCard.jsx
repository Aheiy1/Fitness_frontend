// import React, { useState } from "react";

// const RoutineCard = ({ routine, deleteable}) => {
//   const [form, setForm] = useState({ name: "", goal: "'" });
//   return (
//     <div className="card" key={`${routine._i} routines`}>
//       <h1>Routines</h1>

//       <div className="title">
//         Routine Title
//         <div id="routine"> {routine.name}</div>
//       </div>
//       <div className="goal ">
//         Goal
//         <div id="goal">{routine.goal}</div>
//       </div>
//       <div>
//         Creator
//         <div id="creator"> {routine.creatorName}</div>
//       </div>
//       {deleteable ? <button >Delete Me</button> : null}
//       {routine.activities.map((activities) => {
//         return (
//           <div className="card" key={`${activities._id} activities`}>
//             <h1>Activities</h1>

//             <div className="title">
//               Activity Name
//               <div id="name"> {activities.name}</div>
//             </div>
//             <div className="description">
//               Description
//               <div id="description"> {activities.description}</div>
//             </div>
//             <div className="reps">
//               Reps
//               <div id="reps"> {activities.count}</div>
//             </div>
//             <div className="duration">
//               Duration
//               <div id="duration"> {activities.duration}</div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default RoutineCard;
