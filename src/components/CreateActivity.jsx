import React, { useState } from "react";
import { newActivity } from "../api/Activities";
import { useNavigate } from "react-router-dom";

const CreateActivity = ({ activities, setActivities }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();
  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(localStorage.getItem("token"));
      const result = await newActivity(
        localStorage.getItem("token"),
        name,
        description
      );

      console.log(result, "result");
      if (result) {
        setActivities([result, ...activities]);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
    setName("");
    setDescription("");
    // setPrice("");
    // setWillDeliver(false);
    navigate('/Activities', {replace: true});
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
          className="description"
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <div className="cardBtn">
          <button type="submit">Create Activity</button>
        </div>
      </form>
    </div>
  );
};

export default CreateActivity;
