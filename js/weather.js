const API_KEY = "45072189d23fe5f711e1552ad4e8c42c";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data.weather[0]);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

// if ("geolocation" in navigator) {
//   console.log("된다");
// } else {
//   console.log("안된다");
// }
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
// 좌표를 알려주는 코드
