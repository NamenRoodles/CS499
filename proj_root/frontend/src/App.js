import { useState } from 'react'
import WeekDisplay from './components/WeekDisplay'
import Calendar from './components/Calendar'
import ConflictAlert from './components/ConflictAlert'
import FormInput from './components/FormInput'
import './App.css';
import DayDisplay from './components/DayDisplay'
import Events from './components/Events'

function App() {
  const dateToday = new Date()
  const weekdays = {0:"sunday", 1:"monday", 2:"tuesday", 3:"wednesday", 4:"thursday", 5:"friday", 6:"saturday"}
  const months = {0:"January", 1:"February", 2:"March", 3:"April", 4:"May", 5:"June", 6:"July", 7:"August",
  8:"September", 9:"October", 10:"November", 11:"December"}
  const dateString = `${weekdays[dateToday.getDay()]} ${months[dateToday.getMonth()]} ${dateToday.getDate()}, ${dateToday.getFullYear()}`
  console.log(dateToday)

  return (
    <div className="App">
      
      <header className="App-header">
        <h1> Your Day, Today :3 </h1>
        <DayDisplay curDate= {dateString}/> 
        <Events/>
        <ConflictAlert/>
        <WeekDisplay/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FormInput/>
        Some fun facts about platypusses. They are lay eggs, and in spanish they are called 'ornitorhincos'
        <Calendar/>
      </header>
    </div>
  );
}

export default App;
