import React from 'react'
import './EventDisplay.css'



const EventDisplay = ({event, date, time, description, venue, tags}) => {
console.log(`This is the tags array: ${tags}`)

if(typeof tags === "undefined") {
  tags = [""]
}

  return (
    <div className="event-pane">
      <h2>{event}</h2>
      <div className="event-details">
        <p className="event-date">{date}</p>
        <p className="event-time">{time}</p>
        <p className="event-description">{description}</p>
        <p className="event-venue">{venue}</p>
        <div className="event-tags">
          {
          tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))
          }
        </div>
      </div>
      <button>Add to Calendar</button>
    </div>
  );
}



export default EventDisplay