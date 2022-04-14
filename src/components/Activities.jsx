import React, {useEffect, useState} from "react";

import { fetchActivities } from '../api/Activities'
import UpdateActivity from "./UpdateActivity";


const Activities = ({activityId, setActivityId}) => {
  const [ activities, setActivities ] = useState([]);

  useEffect(() => {
    const getAllActivities = async () => {
      const AllActivities = await fetchActivities();
      setActivities(AllActivities);
    };
    getAllActivities();
  });

  
  return (
    <div>
      <>
        <h1>Activities</h1>
        {activities ? activities.map((activity, i) => {
          return (
            <div key={i}>
              <h3>{activity.name}</h3>
              <div>{activity.description}</div>
            
              <button 
              type="button"
              className="addedbtn"
              onClick={() => {<UpdateActivity activityId={activityId} setActivityId={setActivityId} activities={activities} setActivities={setActivities} />}} >
                 Edit

               </button>

            </div>
          );
        }): null} 
      </>
    </div>
  );
};

export default Activities;
