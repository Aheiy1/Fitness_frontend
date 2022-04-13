import React, { useState } from "react";
import { newRoutine } from "../api/Routines";

const CreateRoutine = ({ routines, setRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(localStorage.getItem("token"));
      const result = await newRoutine(
        localStorage.getItem("token"),
        name,
        goal
      );

      if (result.name) {
        setRoutines([...routines, result]);
        console.log(routines, "setroutines");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
    setName("");
    setGoal("");
    // setPrice("");
    // setWillDeliver(false);
    // navigate('/');
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
