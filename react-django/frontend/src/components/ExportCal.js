import React from 'react'
import axios from 'axios'
const ExportCal = ({useremail}) => {

  const downloadFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  };

const handleGetCalendar = async () => {
  try {
    const response = await axios.get('http://35.209.255.177/gtc/');
    const calendarFileContent = response.data;

    downloadFile(calendarFileContent, 'calendar.ics', 'text/calendar')

  } catch (error) {
    console.error(error)

  }
};
    // const exportCalendar = async (event) => {
    //   try{
    //     const response = await axios.post("http://35.209.255.177/gtc/", 
    //     {email: useremail},
    //     {responseType: 'blob'})

    //     const tempUrl = window.URL.createObjectURL(new Blob([response.data]))
    //     const tempLink = document.createElement('a');
    //     tempLink.href = tempUrl
    //     tempLink.setAttribute('download', 'my-cal.ics')
    //     document.body.append(tempLink)
    //     tempLink.click()
    //     document.body.removeChild(tempLink)
        
    //   }catch (error){
    //     console.error(error)
    //   }
    // }
    


  return (
    <button onClick={handleGetCalendar}> Export your calendar</button>

    )
}

export default ExportCal