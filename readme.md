HW # 06_weather-dashboard
This is the sixth homework project.  I will be making a weather app using API requests that will dynamically update HTML and CSS.

Intro:
------------
This is my sixth homework Assignment for UCSD Extension Coding Bootcamp.

- I will build a weather-dashboard app using API requests that will dynamically update HTML and CSS.


Instructions:
------------
Instructions are located in the readme.md file in the following location: 
https://ucsd.bootcampcontent.com/UCSD-Coding-Bootcamp/UCSD-SD-FSF-PT-12-2019-U-C/blob/master/06-Server-Side-APIs/02-Homework/README.md


Resources used:
------------
- Bootstrap CSS CDN - https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
- fontawesome       - https://use.fontawesome.com/releases/v5.8.1/css/all.css
- google apis       - https://fonts.googleapis.com/css?family=Open+Sans&display=swap
- jQuery CDN        - https://code.jquery.com/jquery-3.4.1.min.js
- moment.js library              - https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js



Reference:
------------
- 06-server-side-apis-homework-demo



Progress:
------------
2020.02.08.1005 - Initial Commit.  Initialized readme.me, and set up folder structure.  Created index.html, style.css, and logic.js.

2020.02.08.2117 - For index.html, Bootstrap grid has been created, Placeholder data has been added.  For style.css, I updated the background colors of the various regions I will be working with with placeholder colors, formatted headers, and formatted element heights.

2020.02.08.2141 - For index.html, Bootstrap grid has been updated.  For style.css, I updated the background colors of the various regions I will be working with with updated  placeholder colors.  FOr logic.js, I began pseudocoding.

2020.02.08.2335 - For logic.js, I have completed pseudocoding, and have built the onClick function for the search function.  This function will show the weather data and forecast data, as well as push recent searches to an array.

2020.02.08.2354 - For logic.js, I have updated my pseudocoding, and have built the showHistory function to run after the page loads.  This function will show the recent searches the user has made using local storage.  Current issues:  I broke something with my javascript regarding the ajax call and the local storage, and am unable to fix it yet.  I will continue tinkering with the homework to see what I did wrong.

2020.02.09.1533 - After seeking help on Stack Overflow regarding my code, specifically my ajax call, I updated logic.js and fixed the ajax call and the functions in my 'if !=' statement.  The forecast section and the recent searches list now work corectly.