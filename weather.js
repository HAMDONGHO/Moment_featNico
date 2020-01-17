const weather = document.querySelector(".js-weather");

const API_KEY = "f50c336926a6ce756fbd5762536b20fa";
const Cords = 'cords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} C ${place}`;
    });
}

function saveCords(cordsObj) {
    localStorage.setItem(Cords, JSON.stringify(cordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const cordsObj = {
        latitude,
        longitude,
    };
    saveCords(cordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('cant access geo location!')
}

function askForCords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCords(){
    const loadCords = localStorage.getItem(Cords);
    if(loadCords === null) {
        askForCords();
    } else {
        const parsedCords = JSON.parse(loadCords);
        getWeather(parsedCords.latitude, parsedCords.longitude);
    }
}

function init(){
    loadCords();

}

init();