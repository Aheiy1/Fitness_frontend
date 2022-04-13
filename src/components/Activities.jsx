import React, { useEffect }  from "react";

import { fetchActivities } from "../api/Activities";

const Activities = ({activities, setActivities}) => {
  // const [ activities, setActivities ] = useState([]);


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
            </div>
          );
        }): null} 
      </>
    </div>
  );
};

export default Activities;
