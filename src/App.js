import React, {useEffect, useState} from 'react'
// import { Activities } from './components'
// import { Routines } from './components'
import { Register } from './components'


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


  return <div><Register setToken = {setToken}/></div>

} 
export default App;