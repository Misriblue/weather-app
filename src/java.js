

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", searchCity);

function searchCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("h1");
  let searchInput = document.querySelector("#search");
  cityName.innerHTML = capitalizeFirstLetter(searchInput.value);
  searchapi(searchInput.value);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function searchapi(city) {
  let key = "a92f789ca0a20eb4f3bt9147ao262fde";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  axios.get(url).then(weatherdata);
}

function weatherdata(response) {
  let tempratureValue = document.querySelector("#TempratureValue");
  tempratureValue.innerHTML = Math.round(response.data.temperature.current);
  let cityName = document.querySelector("h1");
  cityName.innerHTML=response.data.city
  let aircondition = document.querySelector("#weathercondition");
  aircondition.innerHTML=response.data.condition.description
  let humidity = document.querySelector("#humidityvalue");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let windspeed = document.querySelector("#windspeed");
  windspeed.innerHTML = `${response.data.wind.speed}km/hr`;
  
  let date=new Date(response.data.time*1000)
  dateFormat(date);

  let weatherimoji = document.querySelector("#imoji");
  weatherimoji.innerHTML = `<img src="${response.data.condition.icon_url}" />`;
  console.log(response.data)
  getForcast(response.data.city);
}
function dateFormat(date){
    let timeElement = document.querySelector("#currentTime");
    let min=date.getMinutes()
    if (min<10){
        min=`0${min}`
    }
    let hr=date.getHours()
    let weekdays=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"]
    let days=weekdays[date.getDay()]
    timeElement.innerHTML = `${days}day:${hr}:${min}`;
    
}

searchapi("addis ababa");
function getForcast(city){
  let key="a92f789ca0a20eb4f3bt9147ao262fde"
  let APIurl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`
  axios.get(APIurl).then(forcastDisplay);
  
}

function forcastDisplay(response){
  console.log(response.data)
    let days = [ "Tue", "Wed", "Thu", "Fri", "Sat"];
    let forcastHTML=""
    days.forEach(function(day){
        forcastHTML=forcastHTML+ `<div>
          <div class="forcastday">${day}</div>
          <div class="icon">🌞</div>
          <div class="tempratures"><strong>15°c</strong>2°c</div>
          </div>`

    })
    let forcastElement = document.querySelector(".forcast");
    forcastElement.innerHTML=forcastHTML;
    

}



          