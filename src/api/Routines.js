

export const newRoutine = async (
    token,
    name,
    goal
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
       goal: goal
        
      }),
    });
    const data = await response.json();
    console.log(data, "data");
  
    return data;
  };