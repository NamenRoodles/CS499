import React from 'react'


const EventDisplay = ({title, date_time, org_name, location, description}) => {
  return (
    <div className='event'>
        <h1>
            Event: {title}
        </h1>
        <h2 style={{fontSize: '27px'}}>When: {date_time}</h2>
        <p>{description}</p>
        <button className='btn'>Join!</button>
    </div>
  )
}

export default EventDisplay