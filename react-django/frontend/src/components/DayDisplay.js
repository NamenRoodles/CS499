//short cut for this is rafc

import DateButton from "./DateButton"

const DayDisplay = ({ curDate }) => {
  return (
    <div>
        <h2>Today is: {curDate}</h2>
        

        <div className = 'buttonSection'>
            <DateButton timeTag='6am'/>
            <DateButton timeTag='7am'/>
            <DateButton timeTag='8am'/>
            <DateButton timeTag='9am'/>
            <DateButton timeTag='10am'/>
            <DateButton timeTag='11am'/>
            <DateButton timeTag='12pm'/>
            <DateButton timeTag='1pm'/>
            <DateButton timeTag='2pm'/>
            <DateButton timeTag='3pm'/>
            <DateButton timeTag='4pm'/>
            <DateButton timeTag='5pm'/>
        </div>
        <div className = 'buttonSection'>
            <DateButton timeTag='6pm'/>
            <DateButton timeTag='7pm'/>
            <DateButton timeTag='8pm'/>
            <DateButton timeTag='9pm'/>
            <DateButton timeTag='10pm'/>
            <DateButton timeTag='11pm'/>
            <DateButton timeTag='12am'/>
            <DateButton timeTag='1am'/>
            <DateButton timeTag='2am'/>
            <DateButton timeTag='3am'/>
            <DateButton timeTag='4am'/>
            <DateButton timeTag='5am'/>
        </div>
    </div>
    
  )
}

export default DayDisplay
