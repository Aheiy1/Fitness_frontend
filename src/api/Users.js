// You can choose to import all your functions, and re-export them here

export const registerUser = async (username, password) => {
    const response = await fetch(
      'http://fitnesstrac-kr.herokuapp.com/api/users/register',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      }
    );
    const data = await response.json();
    return data;
  };

  export const fetchMe = async (token) => {
    const response = await fetch(
      'http://fitnesstrac-kr.herokuapp.com/api/users/me',
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  };