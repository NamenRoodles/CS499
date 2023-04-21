import React from 'react'
import './EventDisplay.css'
import { useState } from 'react'



const EventDisplay = ({event, date, time, description, venue, tags, event_id, add_ev, sub_ev}) => {
const [buttonToggle, setButtonToggle] = useState(false)
//on change of toggle, the list held in main page should change accordingly

const handleIt = (event) => {
  setButtonToggle(!buttonToggle)
  if (buttonToggle === false){
    add_ev(event_id)
  }
  else{
    sub_ev(event_id)
  }
}
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
      <button onClick={handleIt}>{buttonToggle?"Remove from Calendar":"Add to Calendar"}</button>
    </div>
  );
}



export default EventDisplay