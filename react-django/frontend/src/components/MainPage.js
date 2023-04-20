import React from 'react'

import { useState, useLayoutEffect, useEffect } from 'react'
import WeekDisplay from './WeekDisplay'
import Calendar from './Calendar'
//import './App.css';
import EventDisplay from './EventDisplay'
import axios from 'axios'
import Logout from './Logout'


const SignedIn = ({userLoggedIn, UserID}) => {
    
  
    const giveMeEvents = async (first_try) => {
        try{
          const response = await axios.get(first_try)
          const listOfEvents = response.data
          console.log("eventlog called")
          console.log(`This is the list of events: ${listOfEvents}`)
          const eventlist = listOfEvents.map((item) => {
            console.log(`Heres from Main Page: This is what item.tags looks like...${item.tags}`)
            return (
              <EventDisplay event={item.event} date={item.date} time={item.time} description={item.description} venue={item.venue} tags={item.tags}/>
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
        giveMeEvents("http://35.209.255.177/events/")
      }, [])
      const todayDate = new Date()
      return (
        <div className= 'App'>
          <header className= 'App-header'>Find Your Fun Today!</header>
          <Logout/>
          <h2>Welcome! Logged in as: {userLoggedIn.email}</h2>
          <div>
          <Calendar/>
          </div>
          <div className={"event-header"}>
          <h2>Events for today:</h2>

          </div>
          <div className='eventSection'>
            {curEvents}
          </div>
    
        </div>
    
      )
}

export default SignedIn