import React, {useState} from 'react';

const UpdateActivity = (
    { activities,
        setActivities,
        activityId,
        setActivityId }) => {

const [ name, setName ] = useState([]);
const [ description, setDescription ] = useState([]);

const handleSubmit = async (e) =>{
    e.preventDefault()
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}`, {
        method: "Patch",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            description
        })
    });
    
    const data = await response.json()
        if(data && data.name){
            const newActivity = activities.map(activity => {
                if(activity.id === activityId){
                    return data; 
                }else{
                    return activity;
                }
            });
            setActivities(newActivity)
            setName('')
            setDescription('')
            setActivityId(null)
        }
}

    return <>
        <h3>Update an Acitivity</h3>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Name'
            value={name}
            onchange={(e) => setName(e.target.value)}>
            </input>
            <input type="text"
            placeholder='Description'
            value={description}
            onchange={(e) => setDescription(e.target.value)}>
            </input>
            <button type='submit' className='btn'>Submit</button>
        </form>

    </>
};


export default UpdateActivity;