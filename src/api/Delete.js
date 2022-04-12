import react from "react";


// DELETE /api/routines/:routineId (**)
export const deletePost = async (token, postId) => {
    const response = await fetch(
        'http://fitnesstrac-kr.herokuapp.com/api/routines/6',
      {
        method: "DELETE",
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
  };

//   sample response
//      {
//     "success": true,
//     "id": 6,
//     "creatorId": 2,
//     "isPublic": true,
//     "name": "Long Cardio Day",
//     "goal": "To get your heart pumping!"
// }

// DELETE /api/routine_activities/:routineActivityId (**)
export const deletePost2 = async (token, postId) => {
    const response = await fetch(
        'http://fitnesstrac-kr.herokuapp.com/api/routine_activities/11',
      {
        method: "DELETE",
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
  };

//   sample response
//      {
//     "success": true,
//     "id": 11,
//     "routineId": 6,
//     "activityId": 7,
//     "duration": 25,
//     "count": 1
// }
