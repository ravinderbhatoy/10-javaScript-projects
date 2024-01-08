const formEl = document.getElementById('form')
const inputEl = document.getElementById('search')
const backgroundContainer = document.getElementById('background-container')

formEl.addEventListener('submit', (e)=>{
    e.preventDefault()
    const search = inputEl.value
    if(search){
        getWeatherByLocation(search)
    }
    inputEl.value = ''
    backgroundContainer.innerHTML = ''
})


async function getWeatherByLocation(location){
    const APIURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current%2Cdays&key=JYXJ6HFQ23H7NXKERFWWGVF8P&contentType=json`
    const resp = await fetch(APIURL)
    const respData = await resp.json()
    console.log(respData)
    const addresss = respData['resolvedAddress']
    const forcast = respData['days']
    const current  = respData['currentConditions']
    showWeatherData(addresss, current, forcast)
    // console.log(weatherForcast)
    return respData
}

function getWeekday(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Create a Date object from the input string
    const dateObject = new Date(dateString);
  
    // Get the day of the week (0 for Sunday, 1 for Monday, etc.)
    const dayOfWeekIndex = dateObject.getUTCDay();
    return daysOfWeek[dayOfWeekIndex]
}

function showWeatherData(address,currentData, weatherForcast){
    const days = []
    weatherForcast.slice(1,5).forEach(day=>{
        weekDay = getWeekday(day['datetime'])
        days.push(weekDay)
    })
    console.log(days)
    const weather = document.createElement('div')
    const forcast = document.createElement('div')
    weather.classList.add('current-weather')
    forcast.classList.add('weather-forcast')
    weather.innerHTML = `
                <div class="weather-condition">
                <p>${currentData['conditions']}</p>
                <img src=${'img/'+currentData['icon']}.png
                alt="${currentData['icon']}">
                </div>
                <h1>${currentData['temp']}°C</h1>
                <p class="address">${address}</p>
                <p class="description">${weatherForcast[0]['description']}</p>
    `
    forcast.innerHTML =  `
        ${weatherForcast.slice(1, 5).map((day, index)=>
            `<div class="forcast">
                <h3>${days[index]}</h3>
                <div class="weather-condition">
                <p>${day['conditions']}</p>
                <img src=${'img/'+day['icon']}.png
                alt="${day['icon']}">
                </div>
            </div>`
        // console.log(day)
        ).join("")}
    `;
    backgroundContainer.appendChild(weather)
    backgroundContainer.appendChild(forcast)
    // weather.innerHTML = ''
    // forcast.innerHTML = ''
}