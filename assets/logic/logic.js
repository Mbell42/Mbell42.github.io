//check to see if external style sheet is linked correctly
console.log("logic.js is linked");

//NOTES
//I had planned to try and refactor my code for generating question pages, but I was unable to make the 
// first one work yet, and so am focusing on trying to make the first screen transition work.

//I ran into issues with making new elements using jquery, am still trying to figure out how to make the
//unordered list for the answers on the first question screen.

//I think the empty() method may not be the right one for this project's needs, but I have been unable to
//figure out how else to empty the sections that werent just text.


//Wait until HTML has finished loading
$(document).ready(function() {

    //DECLARE GLOBAL VARIABLES
        //Variables used for multiple screens
        // var rw1 = $("#rw1");
        // var rw2 = $("#rw2");
        // var rw3 = $("#rw3");
        // var rw4 = $("#rw4");
        // var rw5 = $("#rw5");

        var topLeft = $("#top-left");
        var topRight = $("#top-right");
        var centralTop = $("#central-top");
        var centralUpper = $("#central-upper");
        var centralLower = $("#central-lower");
        var centralBottom = $("#central-bottom");

        // var empty = $("#empty");

        var viewHS = $(".viewHS-container");
        var highScoreButton = $("#highScore-btn");
        
        var timeLeft = $(".timeLeft-container");
        var countdown = $("#countdown");
        var countdownNumber = parseInt($("#countdown").text());
        
        //Variables used for Main screen
        // var screenMain = $(".screen-Main");
    
        var title = $("#title");
        var descriptionText = $("#description-text");
        var startQuizButton = $("#startQuiz-btn");

        //Variables used for Questions screen
        // var screenQuestion01 = $(".screen-question-01");
        // var screenQuestion02 = $(".screen-question-02");
        // var screenQuestion03 = $(".screen-question-03");
        // var screenQuestion04 = $(".screen-question-04");
        // var screenQuestion05 = $(".screen-question-05");
        // var screenQuestion06 = $(".screen-question-06");
        // var screenQuestion07 = $(".screen-question-07");
        // var screenQuestion08 = $(".screen-question-08");
        // var screenQuestion09 = $(".screen-question-09");
        // var screenQuestion10 = $(".screen-question-10");
        
        var question = $("#question");

        var answerSet01 = ["answer01","answer02","answer03","answer04",]
        var answerSet02 = ["answer01","answer02","answer03","answer04",]
        var answerSet03 = ["answer01","answer02","answer03","answer04",]
        var answerSet04 = ["answer01","answer02","answer03","answer04",]
        var answerSet05 = ["answer01","answer02","answer03","answer04",]
        var answerSet06 = ["answer01","answer02","answer03","answer04",]
        var answerSet07 = ["answer01","answer02","answer03","answer04",]
        var answerSet08 = ["answer01","answer02","answer03","answer04",]
        var answerSet09 = ["answer01","answer02","answer03","answer04",]
        var answerSet10 = ["answer01","answer02","answer03","answer04",]
        
        var answerList = $("<ul>");
        var answers = $("#answers");
        
        var callout = $("#callout");

        //Variables used for GameOver screen
        // var screenGameOver = $(".screen-gameOver");
;
        var allDone = $("#allDone");

        var highScoreGO = $("#GO-yourHighScore");

        var initForm = $("#initForm");
        var submitButton = $("#submit-btn");

        //Variables used for HighScores screen
        // var screenHighScores = $(".screen-highScores");

        var highScoreHS = $("#HS-yourHighScore");
        var topScores = $("#topScores");

        var goBackButton = $("#goBack-btn");
        var clearHSButton = $("#clearHS-btn");

        //Variables used in the background
        var currentScore = 0;
        var initStore = "";


    //EVENTS
        //used on multiple screens 
        $(highScoreButton).on("click", viewHighScore);

        // standby, may not be needed with function call in startQuiz function 
        //    $(startQuizButton).on("click", countDownTimer);

        //used only on Main Screen
        $(startQuizButton).on("click", startQuiz);

        //used only on Question Screens
        $(answers).on("click", answerQuestion);

        //used only on GameOver Screen
        $(submitButton).on("click", submitForm);

        //used only on HighScores Screen
        $(goBackButton).on("click", goBack);

        $(clearHSButton).on("click", clearHS);


    //FUNCTIONS
        //used on Multiple Screens, visible to user
        function outOfTime() {
            //print start of function to console
            console.log("out of time protocols activating...");
            //remove screen-*current* content
            //generate screen-gameOver content
            console.log("out of time protocols active, moving to screen-gameOver...");
            generategameOver();
        };       
        function countDownTimer() {
            //print start of function to console
            console.log("timer is activating...");
            //set 'countdown' to 75
            console.log("75 seconds left...");
            countdownNumber = 75;
            //begin iterating countdown down by 1 per second

            //if 'countdown' reaches '0', then
            console.log("out of time..."); 
            if (countdownNumber = 0) {
                outOfTime();
            }
        };    
        function viewHighScore() {
            //print start of function to console
            console.log("view HighScores button clicked; moving to screen-highScores...");
            //remove screen-*current* content
            //generate screen-highScores content
            generatehighScores();
        };

        //used only on Main Screen
        function startQuiz() {
            //print start of function to console
            console.log("startQuiz button clicked; moving to screen-question-01...");
            //begin the countDownTimer
            countDownTimer();
            //set currentScore to zero
            scoreReset();
            //remove screen-main content
            //generate screen-question-01 content
            generateQuestion01();
        };

        //used only on Question Screens
        function displayCorrectCallout() {
            //print start of function to console
            console.log("correct! displaying callout...");
            $(callout).text("Correct!");
        };
        function displayIncorrectCallout() {
            //print start of function to console
            console.log("incorrect! displaying callout...");
            $(callout).text("Incorrect!");
        };
        function answerQuestion() {
            //print start of function to console
            console.log("an answer has been chosen; validating...");
            //determine if answer chosen is correct
            //if answer is determined correct, print correct callout, otherwise print incorrect callout
            //if correct callout is printed, add to value in currentScore
            var chosenAnswer = $(event);
            if (chosenAnswer = "correct") {
                displayCorrectCallout();
                scoreCounter();
            }
            else {
                displayIncorrectCallout();
            }
            
            //remove screen-question-*current* content
            //generate screen-question-*next* content

        };     

        //used only on GameOver Screen
        function displayScoreGO() {
            //print start of function to console
            console.log("GO - Your score is 's'");
            //get score total from currentScore
            //print score total to 'highScoreGO'
            $(highScoreGo).text("");
        };
        function submitForm() {
            //print start of function to console
            console.log("the submitForm button has been clicked; validating...");
            //validate that form contains two or three initials (or that it is not blank)
            //store information submitted in form to 'initStore' locally
            console.log("the submitForm button has been validated; moving to screen-highScores...");
            //remove screen-gameOver content
            //generate screen-highScores content
            generatehighScores();
        };
        //used only on HighScores Screen
        function displayScoreHS() {
            //print start of function to console
            console.log("HS - Your score is 's'");
            //get score total from 'currentScore'
            //print score total to 'highScoreHS'
        };
        function displayTopScoresHS() {
            //print start of function to console
            console.log("finding top 3 scores...");
            //get top 3 scores from local storage
            console.log("loading top 3 scores...");
            //print top 3 scores to 'topScores'
            console.log("displaying top 3 scores...");
        };
        function loadHighScores() {
            //print start of function to console
            console.log("loading top scores...");
            //print your high score to 'highScoreHS'
            displayScoreHS();
            //below function print top 3 scores to 'topScores'
            console.log("there will be three top scores...");
            displayTopScoresHS();
        };       
        function goBack() {
            //print start of function to console
            console.log("goBack button clicked; moving to screen-main...");
            
            //remove 'screen-highScores' content
            //generate 'screen-main' content
            generateMain();
        };        
        function clearHS() {
            //print start of function to console
            console.log("clearHS button clicked; removing highScores...");
            //remove 'scoresContainer' content
            //clear local storage
            console.log("clearing local storage...");
        };

        //functions that run in the Background; can be over multiple screens
        function scoreCounter() {
            //print start of function to console
            console.log("adding to scoreTotal...");
            //if an answer receives the 'correct' callout, increment 'currentScore' by one
            //print current 'scoreTotal' to console
            console.log("current score = " + currentScore);
        };
        function scoreReset() {
            //print start of function to console
            console.log("resetting score...");
            currentScore = 0;
        };
        function setTimer() {
            //set 'countdown' to 75
            console.log("countdown is being reset...");
            countdownNumber = 75;
        };

        //functions for generating screens
        function generateMain() {
            //print start of function to console
            console.log("generating main screen...");
            //set rw1
                //set top-left
                    //make viewHS button
                //set top-right
                    //make timer
                    $(countdown).text("Time: " + countDownNumber);
                    setTimer();
            //set rw2
                //set central-top
                    //make title
                    $(title).empty();
                    $(title).text("Code Quiz");
            //set rw3
                //set central-upper
                    //make description-text
                    $(descriptionText).text("Click the Start button to re-take the ten-question code quiz!");
            //set rw4
                //set central-lower
                    //make startQuiz-btn
            //set rw5
                //set central-bottom
                    //ensure section is empty
                    $(centralBottom).empty();
        };
        function generateQuestion01() {
            //print start of function to console
            console.log("generating question screen 01...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top                
                    //make question01
                    $(title).empty();
                    $(title).text("question 01");

            //set rw3
                //set central-upper
                    //make answersList01 with 4 possible answers
                    $(descriptionText).empty();
                    centralUpper.appendchild(answerList)
                    
                    for (var i = 0; i < answerSet01.length; i++) {
                        var answer = answerSet01[i];
                        var li = $("<li>");
                        li.textContent = answer;
                        answerList.appendChild(li);
                    }
            //set rw4
                //set central-lower
                    //ensure section is empty
                    $(centralLower).empty();
            //set rw5
                //set central-bottom
                    //make callout blank
                    $(callout).text("");
        };        
        function generateQuestion02() {
            //print start of function to console
            console.log("generating question screen 01...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top
                    //make question02
                    $(title).text("question 02");
            //set rw3
                //set central-upper
                    //make answersList02 with 4 possible answers
            //set rw4
                //set central-lower
                    //ensure section is empty
            //set rw5
                //set central-bottom
                    //make callout
                    $(callout).text("");
        };
        function generateQuestion03() {
            //print start of function to console
            console.log("generating question screen 01...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top
                    //make question03
                    $(title).text("question 03");
            //set rw3
                //set central-upper
                    //make answersList03 with 4 possible answers
            //set rw4
                //set central-lower
                    //ensure section is empty
            //set rw5
                //set central-bottom
                    //make callout
                    $(callout).text("");
        };
        function generateQuestion04() {
            //print start of function to console
            console.log("generating question screen 01...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top
                    //make question04
                    $(title).text("question 04");
            //set rw3
                //set central-upper
                    //make answersList04 with 4 possible answers
            //set rw4
                //set central-lower
                    //ensure section is empty
            //set rw5
                //set central-bottom
                    //make callout
                    $(callout).text("");
        };
        function generateQuestion05() {
            //print start of function to console
            console.log("generating question screen 01...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top
                    //make question05
                    $(title).text("question 05");
            //set rw3
                //set central-upper
                    //make answersList05 with 4 possible answers
            //set rw4
                //set central-lower
                    //ensure section is empty
            //set rw5
                //set central-bottom
                    //make callout
                    $(callout).text("");
        };
        function generateQuestion06() {
            //print start of function to console
            console.log("generating question screen 01...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top
                    //make question06
                    $(title).text("question 06");
            //set rw3
                //set central-upper
                    //make answersList06 with 4 possible answers
            //set rw4
                //set central-lower
                    //ensure section is empty
            //set rw5
                //set central-bottom
                    //make callout
                    $(callout).text("");
        };
        function generateQuestion07() {
            //print start of function to console
            console.log("generating question screen 01...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top
                    //make question07
                    $(title).text("question 07");
            //set rw3
                //set central-upper
                    //make answersList07 with 4 possible answers
            //set rw4
                //set central-lower
                    //ensure section is empty
            //set rw5
                //set central-bottom
                    //make callout
                    $(callout).text("");
        };
        function generateQuestion08() {
            //print start of function to console
            console.log("generating question screen 01...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top
                    //make question08
                    $(title).text("question 08");
            //set rw3
                //set central-upper
                    //make answersList08 with 4 possible answers
            //set rw4
                //set central-lower
                    //ensure section is empty
            //set rw5
                //set central-bottom
                    //make callout
                    $(callout).text("");
        };
        function generateQuestion09() {
            //print start of function to console
            console.log("generating question screen 01...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top
                    //make question09
                    $(title).text("question 09");
            //set rw3
                //set central-upper
                    //make answersList09 with 4 possible answers
            //set rw4
                //set central-lower
                    //ensure section is empty
            //set rw5
                //set central-bottom
                    //make callout
                    $(callout).text("");
        };
        function generateQuestion10() {
            //print start of function to console
            console.log("generating question screen 01...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top
                    //make question10
                    $(title).text("question 10");
            //set rw3
                //set central-upper
                    //make answersList10 with 4 possible answers
            //set rw4
                //set central-lower
                    //ensure section is empty
            //set rw5
                //set central-bottom
                    //make callout
                    $(callout).text("");
        };
        function generategameOver() {
            //print start of function to console
            console.log("generating gameOver screen...");
            //set rw1
                //nothing needs to change
            //set rw2
                //set central-top
                    //make allDone
                    $(title).text("All Done!");
            //set rw3
                //set central-upper
                    //make make highScoreGO
                    displayScoreGO();
            //set rw4
                //set central-lower
                    //make initForm
                    $(centralLower).empty();
            //set rw5
                //set central-bottom
                    //make submitButton
                    $(centralBottom).empty();
        };
        function generatehighScores() {
            //print start of function to console
            console.log("generating highsScores screen...");
            //set rw1
                //ensure section is empty
                $(topLeft).empty();
                $(topRight).empty();
            //set rw2
                //set central-top
                    //make highScoreHS
                    $(title).text("yourHighScore");
            //set rw3
                //set central-upper
                $(centralUpper).empty();
                    //make scores                    
                    loadHighScores();
            //set rw4
                //set central-lower
                $(centralLower).empty();
                    //make goBack button
                    //make clearHS
            //set rw5
                //set central-bottom
                    //ensure section is empty
                    $(centralLower).empty();
        };

        //functions for removing screens (standby - might not be needed)

    //DEFAULT (actions to run as soon as page finishes loading html)
    setTimer();
});