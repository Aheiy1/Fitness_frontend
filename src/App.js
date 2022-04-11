import React, {useEffect, useState} from 'react'
import { Activities } from './components'
import { Routines } from './components'
import { Register } from './components'
import { fetchMe } from './api/Users'

// import {fetchActivities} from './api/Activities'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState({});
  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    async function getMe() {
      const data = await fetchMe(localStorageToken);
      setUserObj(data.data);
    }
    if (localStorageToken) {
      setIsLoggedIn(true);
      getMe();
    }




  }, []);
  return <div><Register /></div>

} 
export default App;