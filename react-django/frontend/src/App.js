import { useState, useLayoutEffect, useEffect } from 'react'
import WeekDisplay from './components/WeekDisplay'
import Calendar from './components/Calendar'
import './App.css';
import EventDisplay from './components/EventDisplay'
import axios from 'axios'
import ServerSubmit from './components/ServerSubmit';

//import Events from './components/Events'


function App() {
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
  const [goHere, setGoHere] = useState(defaultURL)

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
      <h3>Server to check <ServerSubmit/></h3>
      <h2>Events for today:</h2>
      <div className='eventSection'>
        {curEvents}
      </div>

    </div>

  )

}

export default App;
