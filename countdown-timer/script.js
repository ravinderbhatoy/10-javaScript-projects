const currentYear = new Date().getFullYear()
const newYear = "1 Jan " + (currentYear + 1);
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const countDown = () =>{
    
    const formatTime = (time) =>{
        return time < 10 ? `0${time}` : time;
    }
    const newYearDate = new Date(newYear)
    const currentDate = new Date()
    
    const totalSeconds = Math.floor((newYearDate - currentDate)/1000)
    const day = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60
    // console.log(day, hours, minutes, seconds)

    daysEl.innerText = formatTime(day)
    hoursEl.innerText = formatTime(hours)
    minsEl.innerText = formatTime(minutes)
    secondsEl.innerText = formatTime(seconds)


}

setInterval(countDown, 1000)