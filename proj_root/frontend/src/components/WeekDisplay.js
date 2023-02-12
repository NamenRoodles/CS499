import {useState} from 'react'
import DateButton from './DateButton'

const WeekDisplay = () => {
  return (
    <div>
        <h2>Your week:</h2>
        <div className = 'buttonSection'>
            <DateButton timeTag='Monday'/>
            <DateButton timeTag='Tuesday'/>
            <DateButton timeTag='Wednesday'/>
            <DateButton timeTag='Thursday'/>
            <DateButton timeTag='Friday'/>
            <DateButton timeTag='Saturday'/>
            <DateButton timeTag='Sunday'/>
        </div>
    </div>
  )
}

export default WeekDisplay