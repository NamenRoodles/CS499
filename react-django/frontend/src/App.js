import { useState, useLayoutEffect, useEffect } from 'react'
import WeekDisplay from './components/WeekDisplay'
import Calendar from './components/Calendar'
import ConflictAlert from './components/ConflictAlert'
import FormInput from './components/FormInput'
import './App.css';
import DayDisplay from './components/DayDisplay'
import EventDisplay from './components/EventDisplay'
import axios from 'axios'

//import Events from './components/Events'


function App() {
  const giveMeEvents = async () => {
    try{
      const response = await axios.get('http://127.0.0.1:8000/EventStuff/?format=json')
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
      //console.log('its infinite')
    }catch(error){
      console.log('oops')
      const emptyEvent = () => <EventDisplay title={'No Events'} description = {'¯\\_(ツ)_/¯'}/>
      updateCurEvents(emptyEvent)
    }
  }
  
  // states///////////////////////////////////////

  const [curEvents, updateCurEvents] = useState(() => <EventDisplay title={'No Events'} description = {'¯\\_(ツ)_/¯'}/>)

  // end the states//////////////////////////////

  useEffect( ()=> {
    giveMeEvents()
  }, [])
  const todayDate = new Date()

  return (
    <div className= 'App'>
      <header className= 'App-header'>Colorado Springs Computer Science Calendar Scheduler</header>
      <h2>Welcome!</h2>
      <Calendar/>
      <h2>Events for today:</h2>
      <div className='eventSection'>
        {curEvents}
      </div>

    </div>

  )

}

export default App;
