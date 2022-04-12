
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