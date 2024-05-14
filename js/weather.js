const API_KEY = "fcd08155de6231c5bc558f52fc1d921e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url) // Get 요청
        .then(response => response.json())
        .then(data => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                console.log(data);
                city.innerText = data.name;
                weather.innerText = data.weather[0].main;
            });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// User의 위치를 알 수 있음
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 각각 성공, 실패