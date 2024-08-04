let cityinput = document.getElementById("cityinput");
let searchbtn = document.getElementById("searchbtn");
let cityname = document.getElementById("cityname");
let countryname = document.getElementById("countryname");
let temp = document.getElementById("temp");
let localtime = document.getElementById("localtime");
let container = document.getElementById("container");

apikey = "7105d78471aa467faf794726243006";
//http://api.weatherapi.com/v1/current.json?key=7105d78471aa467faf794726243006&q=London&aqi=yes

async function getdata(apikey, cityinput) {
  let promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityinput}&aqi=yes`
  );
  return await promise.json();
}

searchbtn.addEventListener("click", async () => {
  container.style.display="block"
  let input = cityinput.value;
  console.log(input);
  let result = await getdata(apikey, input);
  console.log(result);
  cityname.innerText = `${result.location.name} ,${result.location.region}`;
  countryname.innerText = result.location.country;
  temp.innerText = result.current.temp_c;
  localtime.innerText = result.current.last_updated;
});
