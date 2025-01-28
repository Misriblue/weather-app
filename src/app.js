function submitHandler(event){
event.preventDefault()
let city = document.querySelector("h1");
let searchInput = document.querySelector("#search");
city.innerHTML=searchInput.value
let apikey = "a92f789ca0a20eb4f3bt9147ao262fde";
let query = searchInput.value;
let apiurl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apikey}`;
axios.get(apiurl).then(wheatherDetail);

}

function wheatherDetail(response){
  console.log(response.data)
 let temperature = document.querySelector("#TempratureValue");  
 temperature.innerHTML =Math.round(response.data.temperature.current)
 let cityElement=document.querySelector("h1");
 cityElement.innerHTML=response.data.city
 let humidity = document.querySelector("#humidityvalue");
 humidity.innerHTML = response.data.humidity;

 let windspeed = document.querySelector("#windspeed");
 windspeed.innerHTML = response.data.wind.speed;
} 

function loadDefaultCity() {
  let defaultCity = "Addis Ababa";
  let searchInput = document.querySelector("#search");
  searchInput.value = defaultCity;

  let apikey = "a92f789ca0a20eb4f3bt9147ao262fde";
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apikey}`;
  axios.get(apiurl).then(weatherDetail);
}

let form = document.querySelector("#form");
form.addEventListener("submit", submitHandler);

document.addEventListener("DOMContentLoaded", loadDefaultCity);