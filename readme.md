Homework #4, web-APIs_Code-Quiz

Intro:
------------
This is my fourth homework Assignment for UCSD Extension Coding Bootcamp.

- I will build a code quiz, and upload it to GitHub Pages.

	

Instructions:
------------
Instructions are located in the readme.md file in the following location: 
https://ucsd.bootcampcontent.com/UCSD-Coding-Bootcamp/UCSD-SD-FSF-PT-12-2019-U-C/tree/master/04-Web-APIs/02-Homework

Resources used:
------------
- Bootstrap CSS CDN  - https://getbootstrap.com/docs/4.3/getting-started/introduction/.
- jQuery CDN - supplied from school.

Reference:
------------
- 04-web-apis-homework-demo.gif - supplied in the homework file, to be used as a reference.




Progress:
------------
2020.01.23.0205 - Initial commit.  Setup folder structure, and initialized the readme.  Added assetList.txt to assets folder to design quiz/game.  Added logic.js to logic folder, and within added a console.log check to it that it links correctly toindex.html.  Added style.css to styles folder.  I then added basic HTML to index.html, including the meta and links in the head to: bootstrap css mobile viewport sizing, bootstrap css CDN, my external style sheet, jQuery CDN, and my external logic sheet.

2020.01.23.0247 - Updated and corrected information in README.md, in the following sections: Intro, Instructions, Resources Used, and Reference.

2020.01.23.1230 - Updated AssetList.txt, and created .jpg, and moved the two files into a new folder within 'assets' named 'design', and moved the reference .gif into a new folder named 'reference'.

2020.01.23.1238 - Corrected readme.me to include correct name of 'codeQuiz-layout-flowChart.jpg'.

2020.01.24.1505 - Updated plan in asset list, flow-chart, and comments in index.html.  Added comments for each row and column in index.html.  Added html elements that will be seen initially according to the template I created in the flow-chart.  Added id's to the divs that will undergo content changes throughout the quiz.

2020.01.24.1531 - Made one change in assetList to update which row contains the answers list.  Updated the html in index.html to match this design.  Added initial content to be displayed into their elements, and added bootstrap css classes for initial elements.

2020.01.24.1543 - Validated HTML and learned that each div can only contain one value for the attribute type 'id'.  I then updated index.hmtl, removing the element specific id's, and leaving the region-specific id, and changing the previous element specific values to classes.  Upon re-validation, no errors were found.

2020.01.24.1615 - Reviewed plan, and updated class and id names to reflect coming needs. Re-validated HTML, no errors were found.

2020.01.24.1945 - Updated classes and ids used in assetList to be more semantic, updated index.html to reflect this change. Added classes for each screen in 'main' element, and updated assetList. Added comments to logic.js to form plan for adding code.  Declaring Global variables.

2020.01.24.2120 - For logic.js, Completed adding global variables.  Added placeholder onclick events.  Added placeholder functions for the onclick events.  For assetList, I made minor formatting changes.

2020.01.24.2145 - For assetList, I added placeholder questions and answers, including which answer will be correct for each question.  For index.html, I made a grammar change in '#description-text'.  For logic.js, I fixed syntax errors in placeholder events and functions, and successfully validated the javascript using Esprima.org.

2020.01.24.2152 - For logic.js, I corrected for syntax errors involving capitalization.

2020.01.24.2349 - For logic.js, I added pseudocode and console.logs for each function.  I aso added placeholder variables and placeholder functions for background (non-visible) processes.  I then drew an 'eventLogic-flowChart' for click events with pencil/paper, and added a photo of it to the design folder.

2020.01.25.0818 - For logic.js, I added placeholder functions for generating screens with console.logs and pseudocode.

2020.01.25.1723 - For logic.js, I removed several unused variables, and in both assetList.txt and index.html, I removed several unused column-'container' classes. I corrected the syntax for several jquery statements in logic.js.