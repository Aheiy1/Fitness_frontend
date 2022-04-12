

import React, { useEffect, useState } from "react";
// import { DeletePost } from "./index.js";

const MyRoutines = ({ routines }) => {
//   console.log(routines)
  const [myRoutines, setMyRoutines] = useState([]);
  const storedName = localStorage.getItem("username");
  const creator = localStorage.getItem("creatorId")
  console.log(creator)
// console.log(storedName)
  const makeMyRoutines = () => {
    try {
      const filteredResult = routines.filter(
        (routine) => routine.creatorId === creator
        );
        console.log(routines, "line 17")
        console.log(creator, "after line 17")
        console.log('this is it', filteredResult)
        setMyRoutines(filteredResult);
      } catch (error) {
      console.error(error);
    }
  };
//   const pilteredResult = routines.filter(
//     (routine) => routine.creatorName === storedName
//     );
    // console.log( pilteredResult, "newresult", routines)
  useEffect(() => {
    makeMyRoutines();
  }, []);

//   console.log(routines, "after use effect")

    if (creator) {
      return (
        <>
          <h1 className="welcomeText">Welcome {storedName}</h1>
          <h2>{"My Routines:"}</h2>
          <div className="cardField">
            {myRoutines.map((myRoutine) => {
                // console.log(myRoutines.map, "MAppppp")
              return (
                <>
                  <div className="postCard" key={`${myRoutine._id} Profile`}>
                    <div className="title">{myRoutine.name}</div>
                    <div className="author">
                      Creator:
                      <div id="author">{myRoutine.creatorName}</div>
                    </div>
                    <div className="description">
                      Description:
                      <div id="description">{myRoutine.goal}</div>
                    </div>
                   
                  </div>
                </>
              );
            })}
          </div>
        </>
      );
    } else {
      return <h1>Please Login</h1>;
    }
  }




export default MyRoutines