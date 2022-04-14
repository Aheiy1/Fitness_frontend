
import React, {useState} from 'react';

const UpdateRoutine = ({routines, setRoutines, routineId, setRoutineId, myRoutines, setMyRoutines}) => {
    
    const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("name", name);
    console.log("description", description);
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name : name,
          description: description
        }),
      }
    );

    const data = await response.json();
  
    if (data && data.name) {
        console.log(myRoutines)
      const newRoutines = myRoutines.map((routine) => {
        if (routine.id === routineId) {
            console.log(data)
          return data;
        } else {
          return routine;
        }
      });
      console.log(newRoutines)
      setMyRoutines([...myRoutines, newRoutines])
      console.log(myRoutines)
      setName("");
      setDescription("");
      setRoutineId(null);
    }
  };
    
    
    
    return (
        <>
          <h3>Update my Routine</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </>
      );
};

export default UpdateRoutine;