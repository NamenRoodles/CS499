import React from 'react'
import axios from 'axios'
const SaveCalendar = ({useremail, eventlist}) => {
    const saveCal = async (event) => {
        console.log(`Sent calendar off`)
        //here is the point where we send this off to the backend
        try{
          const response = await axios.post('http://35.209.255.177/aot',{
            email : useremail,
            events : eventlist 
          })
        }catch (error){
          console.error(error)
          }
        }


  return (
    <button onClick={saveCal}>Save Calendar Changes</button>
  )
}

export default SaveCalendar