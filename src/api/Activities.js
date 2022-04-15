export const fetchActivities = async () => {
  const response = await fetch(
    "http://fitnesstrac-kr.herokuapp.com/api/activities",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  // return data;
  return data;
};

export const newActivity = async (token, routineId, activivityId, count, duration) => {
  console.log(token, "new routine");
  const response = await fetch(
    `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}activities`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        activivityId: activivityId,
        count: count,
        duration: duration
      }),
    }
  );
  const data = await response.json();
  console.log(data, "data");

  return data;
};