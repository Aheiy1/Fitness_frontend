import React, {useEffect, useState} from 'react'

// import { Routines } from './components'
import { Register, Login, Routines, MyRoutines } from './components'
import {fetchMe} from '../src/api/Users'
// import {fetchActivities} from './api/Activities'
function App() {

  const [token, setToken] = useState("");
  // const [postId, setPostId] = useState(null);
  const [userObj, setUserObj] = useState({});
  const [routines, setRoutines] = useState([]);

 
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    async function getUser() {
      const data = await fetchMe(storedToken);
      setUserObj(data.data);
    }
    if (storedToken) {
      setToken(storedToken);
      getUser();
    }
  }, [token]);


  // useEffect(() => {
  //   const getAllPosts = async () => {
  //     const allPosts = await fetchPosts();
  //     setPosts(allPosts.reverse());
  //   };
  //   getAllPosts();
    
  // }, []);


  return <div>
    <Login setToken={setToken} />
    <Register setToken = {setToken}/>
    {/* <Activities /> */}
    <MyRoutines routines={routines} setRoutines={setRoutines} userObj = {userObj}/>
    <Routines />
    </div>

} 
export default App;