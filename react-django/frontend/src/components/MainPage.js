import React from 'react'
import { useState, useLayoutEffect, useEffect } from 'react'
import WeekDisplay from './WeekDisplay'
import Calendar from './Calendar'
//import './App.css';
import EventDisplay from './EventDisplay'
import axios from 'axios'
import Logout from './Logout'
import ExportCal from './ExportCal'
import SaveCalendar from './SaveCalendar'


const SignedIn = ({userLoggedIn, UserID}) => {
    const [userEvents, setUserEvents] = useState([])

    const addUserEvent = (ev_id)=>{

      const tempUserEvents = [...userEvents]
      tempUserEvents.push(ev_id)
      setUserEvents(tempUserEvents)
    }

    const removeUserEvent = (ev_id)=>{
      
      const tempUserEvents = userEvents.filter((i)=> i !== ev_id)
      setUserEvents(tempUserEvents)
    }
  
    const giveMeEvents = async (first_try) => {
        try{
          const response = await axios.get(first_try)
          const listOfEvents = response.data
          const eventlist = listOfEvents.map((item) => {
            return (
              <EventDisplay event={item.event} date={item.date} time={item.time} 
              description={item.description} venue={item.venue} tags={item.tags} event_id={item.event_id} add_ev={addUserEvent} sub_ev={removeUserEvent} usrEvents={userEvents}/>
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
      }, [JSON.stringify(userEvents)])
      const todayDate = new Date()
      return (
        <div className= 'App'>
          <header className= 'App-header'>Find Your Fun Today!</header>
          <div className='navbar'>
            <Logout/>
            <ExportCal useremail={userLoggedIn.email}/>
            <SaveCalendar useremail={userLoggedIn.email} eventlist={userEvents}/>
          </div>
          <h2>Welcome! Logged in as: {userLoggedIn.email}</h2>
          <div className="calendar">
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