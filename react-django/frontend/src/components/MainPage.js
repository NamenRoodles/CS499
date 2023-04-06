import React from 'react'

import { useState, useLayoutEffect, useEffect } from 'react'
import WeekDisplay from './WeekDisplay'
import Calendar from './Calendar'
//import './App.css';
import EventDisplay from './EventDisplay'
import axios from 'axios'
import Logout from './Logout'
import ServerSubmit from './ServerSubmit'


const SignedIn = ({userLoggedIn}) => {
  
    const giveMeEvents = async (first_try) => {
        try{
          const response = await axios.get(first_try)
          const listOfEvents = response.data
          console.log("eventlog called")
          const eventlist = listOfEvents.map((item) => {
            return (
              <EventDisplay title={item.title}
               description = {item.description} date_time ={item.date_time} org_name = {item.org_name}
               location = {item.location}/>
            )
          })
          console.log ("hi")
          updateCurEvents(eventlist)
        }catch(error){
          console.log('oops')
          const emptyEvent = () => <EventDisplay title={'No Events'} description = {'¯\\_(ツ)_/¯'}/>
          updateCurEvents(emptyEvent)
        }
      }
      
      // states///////////////////////////////////////
      //const [goHere, setGoHere] = useState(defaultURL)
      //<h3>Server to check <ServerSubmit/></h3>
    
      const [curEvents, updateCurEvents] = useState(() => <EventDisplay title={'No Events'} description = {'¯\\_(ツ)_/¯'}/>)
    
      // end the states//////////////////////////////
      useEffect( ()=> {
        giveMeEvents()
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