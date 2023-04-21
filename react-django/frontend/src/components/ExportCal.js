import React from 'react'
import axios from 'axios'
const ExportCal = ({useremail}) => {
    const exportCalendar = async (event) => {
      try{
        const response = await axios.post("http://35.209.255.177/gtc/", 
        {email: useremail},
        {responseType: 'blob'})

        const tempUrl = window.URL.createObjectURL(new Blob([response.data]))
        const tempLink = document.createElement('a');
        tempLink.href = tempUrl
        tempLink.setAttribute('download', 'my-cal.ics')
        document.body.append(tempLink)
        tempLink.click()
        document.body.removeChild(tempLink)
        
      }catch (error){
        console.error(error)
      }
    }
    


  return (
    <button onClick={exportCalendar}> Export your calendar</button>

    )
}

export default ExportCal