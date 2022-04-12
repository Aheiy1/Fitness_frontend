import React, { useState } from "react";
import { newRoutine } from "../api/Routines";
// import { useNavigate } from "react-router-dom";

const CreateRoutine = ({ routines, setRoutines, }) => {
  const [name, setName] = useState([]);
  const [goal, setGoal] = useState([]);
  // let navigate = useNavigate();
  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(localStorage.getItem("token"));
      const result = await newRoutine(
        localStorage.getItem("token"),
        name,
        goal
      );

      // console.log(result, "result");
      if (result.name) {
        
        setRoutines([result, ...routines]);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
    setName("");
    setGoal("");
    // setPrice("");
    // setWillDeliver(false);
    // navigate('/', {replace: true});
  };
  return (
    <div>
      <form className="postCard" onSubmit={userSubmit}>
        <input
          className="name"
          type="text"
          placeholder="title"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <input
          className="goal"
          type="text"
          placeholder="goal"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
        ></input>
        <div className="cardBtn">
          <button type="submit">Create Routine</button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoutine;
