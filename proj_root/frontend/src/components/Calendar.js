import React, { useRef, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2023-02-08' },
    { title: 'Event 2', date: '2023-02-09' },
    { title: 'Event 3', date: '2023-02-10' },
  ]);

  const handleClick = (arg) => {
    setEvents([
      ...events,
      { title: 'New Event', date: arg.dateStr },
    ]);
  };

  useEffect(() => {
    calendarRef.current.render();
  }, [events]);

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleClick}
      />
    </div>
  );
};

export default Calendar;
