import React, { useState } from "react";
import UpdateActivity from "./UpdateActivity";

const SingleActivity = ({
  i,
  activity,
  activities,
  setActivities,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [activityId, setActivityId] = useState([]);
  return (
    <div key={i}>
      <h3>{activity.name}</h3>
      <div>{activity.description}</div>

      <button
        type="button"
        className="addedbtn"
        onClick={() => {
            setActivityId(activity.id)
          setShowForm(!showForm);
        }}
      >
        Edit
      </button>
      {showForm  ? (
        <UpdateActivity
          activityId={activityId}
          setActivityId={setActivityId}
          activities={activities}
          setActivities={setActivities}
        />
      ) : null}
    </div>
  );
};

export default SingleActivity;
