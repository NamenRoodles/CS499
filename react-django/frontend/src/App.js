import { useState, useLayoutEffect, useEffect } from 'react'
import {Route, Routes, Navigate, useNavigate} from "react-router-dom"
import WeekDisplay from './components/WeekDisplay'
import Calendar from './components/Calendar'
import './App.css';
import EventDisplay from './components/EventDisplay'
import axios from 'axios'
import MainPage from './components/MainPage'
import SignInPage from './components/SignInPage';

import {auth} from './fire-config'

import { onAuthStateChanged } from 'firebase/auth';

function App() {


  //signinpage needs register or login information, thinking about passing in setState as props
  //const [auth, setAuth] = useState(FireAuth)
  const [isLoggedIn, setIsLoggedIn] =  useState(false)
  const [curUser, setCurUser] = useState({})


  const navigate = useNavigate()

  const navUpdate = (someUser) =>{
    if (someUser){
      navigate("/mainpage")

    } else {
      navigate("/welcome")
    }
  }



  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(auth)
      setCurUser(currentUser)
      navUpdate(currentUser)
    })
  }, [])
  //const [curEvents, updateCurEvents] = useState(() => <EventDisplay title={'No Events'} description = {'¯\\_(ツ)_/¯'}/>)



  return (
    <Routes>
      <Route path="/" element= {<Navigate to='/welcome'/>}/>
      <Route path="/welcome" element={<SignInPage/>}/>
      <Route path="/mainpage" element= {<MainPage userLoggedIn={curUser}/>}/>

    </Routes>

  )

}

export default App;
