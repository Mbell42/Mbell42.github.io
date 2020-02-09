// Wait until Dom has completed loading
$(document).ready(function() {

    // Testing that logic.js has been successfully linked to index.html.
    console.log("logic.js is linked successfully");
  
    // GLOBAL VARIABLES
  
    // SELECTORS
    // selectors for left side column
    let searchCity = $(".searchCity");
    let cityList = $(".cityList");
  
    let searchButton = $(".searchButton");
    let searchHistory = [];
  
    // selectors for right side column
    let weatherArea = $(".weatherArea");
  
    let forecastArea = $(".cardArea");
  
    // BUILDING FUNCTIONS
  
    // When user clicks search button...
    $(searchButton).click(function(event) {
      event.preventDefault();
      console.log("requesting weather data...");
  
      //GET VALUE WHEN CLICKED
      // VARIABLES for AJAX
      let searchedCity = $(searchCity).val();
      let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&appid=7ee1836ef00e047ed7821a78d125c438"
      // I took out my key for this question
  
      // Push user's search into variable array
      searchHistory.push(searchedCity);
  
      // If the search field is not blank...  -- This if statement may be breaking my code, still testing
      if (searchedCity != "") {
        // Locally store searchHistory -- having issues getting this to work
        localStorage.setItem("searchHistory", searchHistory);
  
        // Request weather data from OpenWeatherMap API
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "jsonp",
          })
          // When weather data response is returned...
          .then(function(response) {
            console.log(response);
            // Display weather data in weatherArea 
            let weatherData = show(response);
            $(weatherArea).html(weatherData);
  
            // Display forecast data in forecastArea
  
            let forecastData = "";
  
  
            // For each item in response...
            for (var i in response.list) {
              if (i > 0 && response.list[i].dt_txt.indexOf("12:00") > -1) { //NOT indexof
                // Create variable to contain forecast data
                let forecastArray = [
                  "<div class = 'col-sm-2 day'>",
                  "<p>",
  
                  response.list[i].dt_txt.split(" ")[0],
                  "</p>",
                  "<img src = 'http://openweathermap.org/img/wn/" + response.list[i].weather[0].icon + "@2x.png'>", //CORRECTED THIS
                  "<p> Temp: ",
  
                  response.list[i].main.temp,
                  " degrees</p>",
                  "<p> Humidity: ",
  
                  response.list[i].main.humidity,
                  "%</p>",
                  "<p> Wind Speed: ",
  
                  response.list[i].wind.speed,//NOT response.list[i].main.wind.speed,
                  " mph</p>",
                  "</div>"
                ];
                // Add forecast Data to forecastArray
                forecastData += forecastArray.join("");
              }
            }
            // Display forecast data in forecastArea
            $(forecastArea).html(forecastData);
            $(searchCity).val("");
          });
      }
      // If the search field is empty...
      else {
        $(weatherArea).text("Search field can't be empty");
        $(forecastArea).text("Search field can't be empty");
      }
    });
    // function for showing the response data for the weather
    function show(response) {
      console.log("Showing Response: ", response);
  
      return response.city.name + "<h3> (" + response.list[0].dt_txt.split(' ')[0] + ") </h3>" +
        "<p class = 'lead'>Temp: " + response.list[0].main.temp + " degrees</p>" +
        "<p class = 'lead'>Humidity: " + response.list[0].main.humidity + " %</p>" +
        "<p class = 'lead'>Wind Speed: " + response.list[0].wind.speed + " mph</p>";
    };
    // Get searh history from local storage and display in cityList
    function showHistory() {
      let searchStorage = localStorage.getItem("searchHistory")
      $(cityList).append("<tr>").append("<td>" + searchStorage + "</td>")
    };
  
    showHistory();
  
    // Close of 'document.ready' function
  });