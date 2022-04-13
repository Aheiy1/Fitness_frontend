import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";


// import { Routines } from './components'
import {
  Register,
  Login,
  Routines,
  MyRoutines,
  CreateRoutine,
  LogOut,
  CreateActivity,
  Navbar, 
  Activities
} from "./components";
import { fetchMe } from "../src/api/Users";
import { fetchActivities } from "../src/api/Activities";
import {getRoutines} from '../src/api/Routines'


// import {getRoutines} from './components/Routines.jsx'

// import {fetchActivities} from './api/Activities'
function App() {
  const [token, setToken] = useState("");
  // const [postId, setPostId] = useState(null);
  const [userObj, setUserObj] = useState({});
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);


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

  useEffect(() => {
    const getAllRoutines = async () => {
      const AllRoutines= await getRoutines();
      setRoutines(AllRoutines);
    };
    getAllRoutines();
  });

  useEffect(() => {
    const getAllActivities = async () => {
      const AllActivities = await fetchActivities();
      setActivities(AllActivities);
    };
    getAllActivities();
  }, []);
  // useEffect(() => {
  //   const getMyRoutines = async () => {
  //     const Routines = await fetchMyRoutines();
  //     setMyRoutines(Routines);
  //   };
  //   getMyRoutines();
  // });

  return (
    <div>
      <BrowserRouter>
        <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navbar/>}/> */}
        <Route path="/Login" element={<Login setToken={setToken}/>}/>
        <Route path="/Logout" element={<LogOut/>}/>
        <Route path="/SignUp" element={<Register setToken={setToken}/>}/>
        <Route path="/CreateRoutine" element={<CreateRoutine setToken={setToken} routines={routines}
        setRoutines={setRoutines}/>}/> 
        <Route path="/MyActivities" element={<CreateActivity setToken={setToken} activities={activities}
        setActivities={setActivities}/>}/> 
        <Route path="/MyRoutines" element={<MyRoutines setToken={setToken}  routines={routines} setRoutines={setRoutines} userObj={userObj}/>}/> 
        <Route path="/" element={<Routines routines={routines}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
