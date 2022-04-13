

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
    console.log(data, "data");
  
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
      console.log(error);
    }
  }