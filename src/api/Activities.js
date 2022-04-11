
export const fetchActivities = async () => {
    // const token = localStorage.getItem("token");
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
  
    const data= await response.json();
    console.log(response, "data activity");
    // return data;
    return data;
  };