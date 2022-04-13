

export const newRoutine = async (
    token,
    name,
    goal,
    isPublic
  ) => {
    console.log(token, "new routine")
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
       name: name, 
       goal: goal,
       isPublic: true
        
      }),
    });
    const data = await response.json();
    console.error(data, "data");
  
    return data;
  };





  export const fetchMyRoutines = async (token,username) => {
    console.log(token, "from fetch")
    console.log(username,"from fetch")
    try {
      const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result, "from fetch my routines")
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  export const getRoutines = async () => {
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error)
  }
  
  
  
  }
  
  export const deleteRoutine = async (token, routineId) => {
    try{
    const response = await fetch(
        `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "DELETE",
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
      return data
  }catch (error){
    console.error(error);
  }
}