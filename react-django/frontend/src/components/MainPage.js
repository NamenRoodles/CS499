import React from 'react'

import { useState, useLayoutEffect, useEffect } from 'react'
import WeekDisplay from './WeekDisplay'
import Calendar from './Calendar'
//import './App.css';
import EventDisplay from './EventDisplay'
import axios from 'axios'
import Logout from './Logout'
import ServerSubmit from './ServerSubmit'


const SignedIn = ({userLoggedIn, UserID}) => {
    
  
    const giveMeEvents = async (first_try) => {
        try{
          const response = await axios.get(first_try)
          const listOfEvents = response.data
          console.log("eventlog called")
          const eventlist = listOfEvents.map((item) => {
            return (
              <EventDisplay event={item.event} date={item.date} time={item.time} description={item.description} venue={item.venue} tags={item.venue}/>
            )
          })
          console.log ("hi")
          updateCurEvents(eventlist)
        }catch(error){
          console.log('oops')
          const emptyEvent = () => <EventDisplay event={'No Events'} description = {'¯\\_(ツ)_/¯'}/>
          updateCurEvents(emptyEvent)
        }
      }
      
      // states///////////////////////////////////////
      //const [goHere, setGoHere] = useState(defaultURL)
      //<h3>Server to check <ServerSubmit/></h3>
    
      const [curEvents, updateCurEvents] = useState(() => <EventDisplay title={'No Events'} description = {'¯\\_(ツ)_/¯'}/>)
    
      // end the states//////////////////////////////
      useEffect( ()=> {
        giveMeEvents("http://127.0.0.1:8000/events/")
      }, [])
      const todayDate = new Date()
      return (
        <div className= 'App'>
          <header className= 'App-header'>Colorado Springs Computer Science Calendar Scheduler</header>
          <Logout/>
          <h2>Welcome! Logged in as: {userLoggedIn.email}</h2>
          <Calendar/>
          
          <h2>Events for today:</h2>
          <div className='eventSection'>
            {curEvents}
          </div>
    
        </div>
    
      )
}

export default SignedIn