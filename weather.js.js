let key ="4af578404b66d7017a2e2e7de5bf9f71";
let city = document.getElementById('city');
let desc = document.getElementById('desc');
let windspeed = document.getElementById('windspeed');
let hum = document.getElementById('hum');
let temp = document.getElementById('temp');
function fetchData() {
	let cityname = document.getElementById('cityname').value;
	let api =`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;
	// body...

fetch(api)
.then(response=>response.json())
.then(data=>{
	city.innerHTML = data.name;
	desc.innerHTML = data.weather[0].description;
	
	windspeed.innerHTML= data.wind.speed;
	hum.innerHTML=data.main.humidity;
	temp.innerHTML=data.main.temp-273;

})

}