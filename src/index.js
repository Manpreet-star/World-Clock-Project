function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = document.querySelector("#london-date");
    let londonTimeElement = document.querySelector("#london-time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("dddd Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = document.querySelector("#los-angeles-date");
    let losAngelesTimeElement = document.querySelector("#los-angeles-time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("dddd Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = document.querySelector("#tokyo-date");
    let tokyoTimeElement = document.querySelector("#tokyo-time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("dddd Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
       <div class="city">
       <div><h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )}<small>${cityTime.format("A")}</small></div>
      </div>
      <br />
      <a href="/"> All Cities </a>;
      `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
