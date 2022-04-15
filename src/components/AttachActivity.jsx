import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import  newActivity from '../api/Activities';

const AttachActivity = () => {
    const [count, setCount] = useState(Number)
    const [duration, setDuration] = useState(Number)
    const [activityId, setActivityId] = useState([])
    const [newActivity, setNewActivity] = useState([]);
    

    const activitySubmit = async ()=>{
        try {
            const result = await newActivity(
                localStorage.getItem("token"),
                count,
                duration,
                activityId
            );
        if (result){

        }

        
        } catch (error) {
            throw error;
        }
    setCount(Number);
    setDuration(Number);
    }

    return (
        <div>
          <form className="postCard" onSubmit={activitySubmit}>
            <input
              className="count"
              type="text"
              placeholder="count"
              value={count}
              onChange={(event) => setCount(event.target.value)}
            ></input>
            <input
              className="duration"
              type="text"
              placeholder="duration"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
            ></input>
            <input
              className="activity"
              type="text"
              placeholder="activity"
              value={newActivity}
              onChange={(event) => setNewActivity(event.target.value)}
            ></input>
            <div className="cardBtn">
              <button type="submit">Add Activity</button>
            </div>
          </form>
        </div>
      );
    };


export default AttachActivity;