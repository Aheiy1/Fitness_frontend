import React from 'react';
import { deleteRoutine, getRoutines } from '../api/Routines';


const MyRoutineCard = ({routine, setRoutines, deleteable}) => {
   
    const handleDelete = async (e) => {
		try {
			await deleteRoutine(localStorage.getItem("token"), routine.id);

			const routines = await getRoutines();
			setRoutines(routines);
		} catch (error) {
			console.error(error);
		}
	};

    return (
        <div className="card" key={`${routine._i} routines`}>
          <h1>Routines</h1>
    
          <div className="title">
            Routine Title
            <div id="routine"> {routine.name}</div>
          </div>
          <div className="goal ">
            Goal
            <div id="goal">{routine.goal}</div>
          </div>
          <div>
            Creator
            <div id="creator"> {routine.creatorName}</div>
          </div>
          {deleteable ? <button onClick={handleDelete}>Delete Me</button> : null}
          {routine.activities.map((activities) => {
            return (
              <div className="card" key={`${activities._id} activities`}>
                <h1>Activities</h1>
    
                <div className="title">
                  Activity Name
                  <div id="name"> {activities.name}</div>
                </div>
                <div className="description">
                  Description
                  <div id="description"> {activities.description}</div>
                </div>
                <div className="reps">
                  Reps
                  <div id="reps"> {activities.count}</div>
                </div>
                <div className="duration">
                  Duration
                  <div id="duration"> {activities.duration}</div>
                </div>
              </div>
            );
          })}
        </div>
      );
    };

export default MyRoutineCard;