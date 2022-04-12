

import React, { useEffect, useState } from "react";
// import { DeletePost } from "./index.js";

const MyRoutines = ({ routines }) => {
  console.log(routines)
  const [myRoutines, setMyRoutines] = useState([]);
  const storedName = localStorage.getItem("username");
console.log(storedName)
  const makeMyRoutines = async () => {
    try {
      const filteredResult = routines.filter(
        (routine) => routine.creatorName === storedName
        );
        console.log('this is it', filteredResult)
        setMyRoutines(filteredResult);
      } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    makeMyRoutines();
  }, []);

  function userTernary() {
    if (storedName) {
      return (
        <>
          <h1 className="welcomeText">Welcome {storedName}</h1>
          <h2>"My Routines:"</h2>
          <div className="cardField">
            {myRoutines.map((myRoutine) => {
              return (
                <>
                  <div className="postCard" key={`${myRoutine._id} Profile`}>
                    <div className="title">{myRoutine.name}</div>
                    <div className="author">
                      Owner:
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

  return userTernary();

}
export default MyRoutines