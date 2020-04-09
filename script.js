var currentCity = document.querySelector("#currentCity");
var currentTemp = document.querySelector("#currentTemp");
var currentHumidity = document.querySelector("#currentHumidity");
var currentWind = document.querySelector("#currentWind");
var currentUV = document.querySelector("#currentUV");
var searchBtn = document.querySelector("#searchBtn");
var searchItem = document.querySelector("#searchItem");
var cityList1 = document.querySelector("#cityList1");
var cityList2 = document.querySelector("#cityList2");
var cityList3 = document.querySelector("#cityList3");
var cityList4 = document.querySelector("#cityList4");
var cityList5 = document.querySelector("#cityList5");
var cityList6 = document.querySelector("#cityList6");
var cityList7 = document.querySelector("#cityList7");
var cityList8 = document.querySelector("#cityList8");
var dayOneEl = document.querySelector("#dayOne");
var dayTwoEl = document.querySelector("#dayTwo");
var dayThreeEl = document.querySelector("#dayThree");
var dayFourEl = document.querySelector("#dayFour");
var dayFiveEl = document.querySelector("#dayFive");
var dayOnemaxEl = document.querySelector("#day1max");
var dayTwomaxEl = document.querySelector("#day2max");
var dayThreemaxEl = document.querySelector("#day3max");
var dayFourmaxEl = document.querySelector("#day4max");
var dayFivemaxEl = document.querySelector("#day5max");
var dayOneminEl = document.querySelector("#day1min");
var dayTwominEl = document.querySelector("#day2min");
var dayThreeminEl = document.querySelector("#day3min");
var dayFourminEl = document.querySelector("#day4min");
var dayFiveminEl = document.querySelector("#day5min");

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var city = $("#searchItem").val();
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a89a05b4a0df6c1694d5f08466c85383"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var City = response.name;
        console.log(City);
        var Kelvin = (response.main.temp);
        var Farenheit = Math.round(((Kelvin - 273.15) * 9/5 + 32)*100)/100;
        var Humidity = (response.main.humidity);
        var Wind = (response.wind.speed);
        currentTemp.textContent = "Temperature: " + Farenheit + "°";
        currentCity.textContent = City + " " + "(" + currentDate + ")";
        currentHumidity.textContent = "Humidity: " + Humidity + "%";
        currentWind.textContent = "Wind Speed: " + Wind + " MPH";
        updateList(City);
    })
    var queryURL2 = 'http://api.openweathermap.org/data/2.5/forecast?q='+ city + '&appid=79bb7dc0e8f07f6ebe01166410e6e392'
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        var maxtemps = [];
        var mintemps = [];
        console.log(response);
        for(var j = 0; j < 5; j++){
            var maxtemp = -10000;
            var mintemp = 10000
            for(var i = (0 + (j * 8)); i < (8 + (j * 8)); i++){
                newmaxtemp = response.list[i].main.temp_max
                newmintemp = response.list[i].main.temp_min
                if(newmaxtemp > maxtemp){
                    maxtemp = newmaxtemp;
                }
                if(newmintemp < mintemp){
                    mintemp = newmintemp;
                }
                console.log("max temp day1= " + maxtemp);
                console.log("min temp day1= " + mintemp);
            }
            var maxF = Math.round(((maxtemp - 273.15) * 9/5 + 32)*100)/100;
            var minF = Math.round(((mintemp - 273.15) * 9/5 + 32)*100)/100;
            maxtemps.push(maxF);
            mintemps.push(minF);
            console.log("max temp total= " + maxtemps);
            console.log("min temp total= " + mintemps);
        }
        dayOnemaxEl.textContent = "Max Temp: " + maxtemps[0] + "°";
        dayTwomaxEl.textContent = "Max Temp: " + maxtemps[1] + "°";
        dayThreemaxEl.textContent = "Max Temp: " + maxtemps[2] + "°";
        dayFourmaxEl.textContent = "Max Temp: " + maxtemps[3] + "°";
        dayFivemaxEl.textContent = "Max Temp: " + maxtemps[4] + "°";
        dayOneminEl.textContent = "Min Temp: " + mintemps[0] + "°";
        dayTwominEl.textContent = "Min Temp: " + mintemps[1] + "°";
        dayThreeminEl.textContent = "Min Temp: " + mintemps[2] + "°";
        dayFourminEl.textContent = "Min Temp: " + mintemps[3] + "°";
        dayFiveminEl.textContent = "Min Temp: " + mintemps[4] + "°";
    })
})

$(".cityCard").on("click", function(event){
    event.preventDefault();
    console.log(event);
    var city = event.target.innerText;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a89a05b4a0df6c1694d5f08466c85383"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var City = response.name;
        console.log(City);
        var Kelvin = (response.main.temp);
        var Farenheit = Math.round(((Kelvin - 273.15) * 9/5 + 32)*100)/100;
        var Humidity = (response.main.humidity);
        var Wind = (response.wind.speed);
        currentTemp.textContent = "Temperature: " + Farenheit + "°";
        currentCity.textContent = City + " " + "(" + currentDate + ")";
        currentHumidity.textContent = "Humidity: " + Humidity + "%";
        currentWind.textContent = "Wind Speed: " + Wind + " MPH";
    })
    var queryURL2 = 'http://api.openweathermap.org/data/2.5/forecast?q='+ city + '&appid=79bb7dc0e8f07f6ebe01166410e6e392'
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        var maxtemps = [];
        var mintemps = [];
        console.log(response);
        for(var j = 0; j < 5; j++){
            var maxtemp = -10000;
            var mintemp = 10000
            for(var i = (0 + (j * 8)); i < (8 + (j * 8)); i++){
                newmaxtemp = response.list[i].main.temp_max
                newmintemp = response.list[i].main.temp_min
                if(newmaxtemp > maxtemp){
                    maxtemp = newmaxtemp;
                }
                if(newmintemp < mintemp){
                    mintemp = newmintemp;
                }
                console.log("max temp day1= " + maxtemp);
                console.log("min temp day1= " + mintemp);
            }
            var maxF = Math.round(((maxtemp - 273.15) * 9/5 + 32)*100)/100;
            var minF = Math.round(((mintemp - 273.15) * 9/5 + 32)*100)/100;
            maxtemps.push(maxF);
            mintemps.push(minF);
            console.log("max temp total= " + maxtemps);
            console.log("min temp total= " + mintemps);
        }
        dayOnemaxEl.textContent = "Max Temp: " + maxtemps[0] + "°";
        dayTwomaxEl.textContent = "Max Temp: " + maxtemps[1] + "°";
        dayThreemaxEl.textContent = "Max Temp: " + maxtemps[2] + "°";
        dayFourmaxEl.textContent = "Max Temp: " + maxtemps[3] + "°";
        dayFivemaxEl.textContent = "Max Temp: " + maxtemps[4] + "°";
        dayOneminEl.textContent = "Min Temp: " + mintemps[0] + "°";
        dayTwominEl.textContent = "Min Temp: " + mintemps[1] + "°";
        dayThreeminEl.textContent = "Min Temp: " + mintemps[2] + "°";
        dayFourminEl.textContent = "Min Temp: " + mintemps[3] + "°";
        dayFiveminEl.textContent = "Min Temp: " + mintemps[4] + "°";
    })
})




function updateList(City){
cityList8.textContent = cityList7.textContent;
cityList7.textContent = cityList6.textContent;
cityList6.textContent = cityList5.textContent;
cityList5.textContent = cityList4.textContent;
cityList4.textContent = cityList3.textContent;
cityList3.textContent = cityList2.textContent;
cityList2.textContent = cityList1.textContent;
cityList1.textContent = City
}


function todaysDate(){
    var today = moment().format("MM/DD/YY");
    var second = moment().add(1, 'day');
    var third = moment().add(2, 'day');
    var fourth = moment().add(3, 'day');
    var fifth = moment().add(4, 'day');
    var sixth = moment().add(5, 'day');
    var secondDay = second.format("MM/DD/YY");
    var thirdDay = third.format("MM/DD/YY");
    var fourthDay = fourth.format("MM/DD/YY");
    var fifthDay = fifth.format("MM/DD/YY");
    var sixthDay = sixth.format("MM/DD/YY");
    currentDate = today;
    dayOneEl.textContent = secondDay;
    dayTwoEl.textContent = thirdDay;
    dayThreeEl.textContent = fourthDay;
    dayFourEl.textContent = fifthDay;
    dayFiveEl.textContent = sixthDay;

}
todaysDate();

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    console.log(position);
    var lat = Math.round(position.coords.latitude * 10)/10;
    var lon = Math.round(position.coords.longitude * 10)/10;
    console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);
    weatherDisplay(lat, lon);
  }
getLocation();

function weatherDisplay(lat, lon) {
    var queryURL = 'http://api.openweathermap.org/data/2.5/find?lat='+ lat + '&lon=' +  lon + '&appid=79bb7dc0e8f07f6ebe01166410e6e392'
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var City = response.list[0].name;
        var Kelvin = (response.list[0].main.temp);
        var Farenheit = Math.round(((Kelvin - 273.15) * 9/5 + 32)*100)/100;
        var Humidity = (response.list[0].main.humidity);
        var Wind = (response.list[0].wind.speed);
        currentTemp.textContent = "Temperature: " + Farenheit + "°";
        currentCity.textContent = City + ", WA " + "(" + currentDate + ")";
        currentHumidity.textContent = "Humidity: " + Humidity + "%";
        currentWind.textContent = "Wind Speed: " + Wind + " MPH";
    })
    var queryURL2 = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=79bb7dc0e8f07f6ebe01166410e6e392'
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        var maxtemps = [];
        var mintemps = [];
        console.log(response);
        for(var j = 0; j < 5; j++){
            var maxtemp = -10000;
            var mintemp = 10000
            for(var i = (0 + (j * 8)); i < (8 + (j * 8)); i++){
                newmaxtemp = response.list[i].main.temp_max
                newmintemp = response.list[i].main.temp_min
                if(newmaxtemp > maxtemp){
                    maxtemp = newmaxtemp;
                }
                if(newmintemp < mintemp){
                    mintemp = newmintemp;
                }
                console.log("max temp day1= " + maxtemp);
                console.log("min temp day1= " + mintemp);
            }
            var maxF = Math.round(((maxtemp - 273.15) * 9/5 + 32)*100)/100;
            var minF = Math.round(((mintemp - 273.15) * 9/5 + 32)*100)/100;
            maxtemps.push(maxF);
            mintemps.push(minF);
            console.log("max temp total= " + maxtemps);
            console.log("min temp total= " + mintemps);
        }
        dayOnemaxEl.textContent = "Max Temp: " + maxtemps[0] + "°";
        dayTwomaxEl.textContent = "Max Temp: " + maxtemps[1] + "°";
        dayThreemaxEl.textContent = "Max Temp: " + maxtemps[2] + "°";
        dayFourmaxEl.textContent = "Max Temp: " + maxtemps[3] + "°";
        dayFivemaxEl.textContent = "Max Temp: " + maxtemps[4] + "°";
        dayOneminEl.textContent = "Min Temp: " + mintemps[0] + "°";
        dayTwominEl.textContent = "Min Temp: " + mintemps[1] + "°";
        dayThreeminEl.textContent = "Min Temp: " + mintemps[2] + "°";
        dayFourminEl.textContent = "Min Temp: " + mintemps[3] + "°";
        dayFiveminEl.textContent = "Min Temp: " + mintemps[4] + "°";
    })






}
