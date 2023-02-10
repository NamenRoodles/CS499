//sets up boxes as objects to manipulate
const boxes = document.querySelectorAll(".box")
//list of hours in a day
const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm",
"6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am"]

const avail_hours = {0:true, 1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true, 10:true,
11:true, 12:true, 13:true, 14:true, 15:true, 16:true, 17:true, 18:true, 19:true, 20:true, 21:true, 22:true, 23:true }

//the html page must also show what day of the week it is.. sidenote but whatever
const weekdays = {0:"sunday", 1:"monday", 2:"tuesday", 3:"wednesday", 4:"thursday", 5:"friday", 6:"saturday"}
const months = {0:"January", 1:"February", 2:"March", 3:"April", 4:"May", 5:"June", 6:"July", 7:"August",
8:"September", 9:"October", 10:"November", 11:"December"}
let date = new Date()
const weekday = weekdays[date.getDay()]
const mm = months[date.getMonth()]
const dd = date.getDate()
const yyyy = date.getFullYear()
const dateDiv = document.getElementById("date")
dateDiv.innerText = `${weekday} ${mm} ${dd}, ${yyyy}`
//below will be a function that adds info of schedule onto a calendar


//this loop populates the boxes and gives them their name and event listener

//making a class specifically for the blocks on the screen, will include what time label it is associated with
//timeUnit is either days or hours, depending on which calendar
class timeBlock{
    static AVAILCOLOR = "#dda0dd"
    static NONAVAILCOLOR = "#ee82ee"
    constructor(timeUnit, timeLabel, divElement){
        
        this.timeLabel = timeLabel
        this.divElement = divElement
        this.timeUnit = timeUnit
        this.avail = true
        this.divElement.innerText = hours[timeLabel]
        this.divElement.addEventListener("click", this.blockClick)
    }

    blockClick(){
        if (this.avail === true){
            this.avail = false
            console.log(this.divElement.attributes)
            //this.divElement.color = timeBlock.NOTAVAILCOLOR
        }else{
            this.avail = true
            console.log(this.divElement.attributes)

            //this.divElement.color = timeBlock.AVAILCOLOR
        }
    }

}

let counter = 0
const blockList = []
boxes.forEach(box => {
    tb = new timeBlock("hours", counter, box)
    blockList.push(tb)

    counter++
})