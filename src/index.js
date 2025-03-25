function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector("#london-date");
  let londonTimeElement = document.querySelector("#london-time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("dddd Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let losAngelesElement = document.querySelector("#losAngeles");
  let losAngelesDateElement = document.querySelector("#los-angeles-date");
  let losAngelesTimeElement = document.querySelector("#los-angeles-time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let japanElement = document.querySelector("#japan");
  let japanDateElement = document.querySelector("#japan-date");
  let japanTimeElement = document.querySelector("#japan-time");
  let japanTime = moment().tz("Japan");
  japanDateElement.inner = japanTime.format("dddd Do YYYY");
  japanTimeElement.innerHTML = japanTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
