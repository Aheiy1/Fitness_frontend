import React, {useState} from 'react';

const UpdateActivity = (
    { activities,
        setActivities,
        activityId,
        setActivityId }) => {

const [ name, setName] = useState([]);
const [ description, setDescription ] = useState([]);
const token = localStorage.getItem("token")
const handleSubmit = async (e) =>{
    e.preventDefault()

    console.log("name", name)
    console.log("description", description)
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify({
           name,
            description
        })
    });
    
    const data = await response.json()
    console.log(data)
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
        <h3>Update an Activity</h3>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}>
            </input>
            <input type="text"
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}>
            </input>
            <button type='submit' className='btn'>Submit</button>
        </form>

    </>
};


export default UpdateActivity;