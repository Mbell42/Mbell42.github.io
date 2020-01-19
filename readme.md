# generator-pw-random
Homework #3, Random Password Generator.


Intro:
------------
This is my third homework Assignment for UCSD Extension Coding Bootcamp.

- I will build a random password generator, and upload it to GitHub Pages, that will generate a random password based on user-selected criteria.

	

Instructions:
------------
Instructions are located in the readme.md file in the following location: https://ucsd.bootcampcontent.com/UCSD-Coding-Bootcamp/UCSD-SD-FSF-PT-12-2019-U-C/tree/master/03-JavaScript/02-Homework

Resources used:
------------
- Bootstrap CSS CDN  - https://getbootstrap.com/docs/4.3/getting-started/introduction/.

- index.html - supplied in the homework file, to be used as a starting point.

Reference


Progress:
------------
2020.01.17.1115 - Initial commit.  Setup folder structure, and initialized the readme.  Researched random nuber generation in JavaScript.

2020.01.17.2349 - Created logic and style sheets.  Linked index.html to Bootstrap CSS CDN, and my external style and logic sheets. Added initial comments to index.html for accessibility and to structure my plan. Created initial grid structure, with some remaining col work to complete.  Added Bootstrap initial CSS classes to main, header, and panel elements.  

2020.01.18.0005 - For index.html, I completed the initial grid structure, and completed adding comments for accessibility.  

2020.01.18.0022 - For index.html, I made minor updates to the column layout of the row containing the buttons.  I also fixed a couple bootstrap CSS classes that had the incorrect syntax.

2020.01.18.0045 - For logic.js, I added initial comments to structure my plan and for acessibility.  I then created variables for the text-area, the two buttons, and a variable that will contain an array, assinging them each an initial undefined value.

2020.01.18.1544 - For logic.js, I added more comments to structure plan and for accessibility.  I also added a variable for turning the generated password into a string.

2020.01.18.1558 - For logic.js, I completed adding comments to structure plan and for accessibility.  I also added values to variables that are hooking into HTML elements.

2020.01.18.1906 - For logic.js, I commented out everything, as I was having trouble getting a button to respond to a click, so i migrated the code to the index.html file to cut down  potential issues.  Had trouble getting jquery to work.

2020.01.18.1956 - For index.html, using javaScript I attempted to add an event listener to the 'Generate a Password' button.  I then attempted to create a random alphanumeric generator that will create a random 9 character long password.

2020.01.18.2342 - For index.html, style.css, and logic.js; I reattached the link to external logic sheet and migrated latest javascript code bac over to logic.js.  Updated local variable newPW to be global variable and applied minor fixes to code structure. Added check to beginning of logic.js to ensure that it is inked properly a console log. Added styles to mainPanel and textarea sections of page in style.css.