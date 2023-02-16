import React from 'react'


const EventDisplay = ({title, date_time, org_name, location, description}) => {
  return (
    <div>
        <h1>
            {title}
        </h1>
        <p>{description}</p>
        <button>join event!</button>
    </div>
  )
}

export default EventDisplay