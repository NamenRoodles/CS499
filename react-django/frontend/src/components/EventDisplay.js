import React from 'react'


const EventDisplay = ({event, date, time, description, venue, tags}) => {
  return (
    <div className='event'>
        <h1>
            Event: {event}
        </h1>
        <h2 style={{fontSize: '27px'}}>When: {date} {time} Where: {venue}</h2>

        <p>{description}</p>
        <button className='btn'>Join!</button>
    </div>
  )
}

export default EventDisplay