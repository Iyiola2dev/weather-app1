const apiKey = "5c06cb9218ba88da303ecd1f1695d5a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inPut = document.getElementById("input")
const btn = document.getElementById("btn")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   const data = await response.json();

   console.log(data);

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '&#8451';
   document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
   

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "./images/clouds.png"
  }else if(data.weather[0].main == "Clear"){
     weatherIcon.src = "./images/clear.png"
  }else if(data.weather[0].main == "Rain"){
     weatherIcon.src = "./images/rain.png"
  }else if(data.weather[0].main == "Drizzle"){
     weatherIcon.src = "./images/drizzle.png"
  }else if(data.weather[0].main == "Mist"){
     weatherIcon.src = "./images/mist.png"
  }
}

btn.addEventListener("click", ()=>{
    checkWeather(inPut.value);
})

checkWeather();