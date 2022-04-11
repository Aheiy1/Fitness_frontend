import React, {useEffect, useState} from 'react'

// import { Routines } from './components'
import { Register, Login, Routines } from './components'


// import {fetchActivities} from './api/Activities'
function App() {

  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(token);
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
    <Routines />
    </div>

} 
export default App;