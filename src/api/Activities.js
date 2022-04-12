
export const fetchActivities = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    const data= await response.json();
    
    // return data;
    return data;
  };


  export const newActivity = async (
    token,
    name,
    description
  ) => {
    console.log(token, "new routine")
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
       name: name, 
       description: description
        
      }),
    });
    const data = await response.json();
    console.log(data, "data");
  
    return data;
  };