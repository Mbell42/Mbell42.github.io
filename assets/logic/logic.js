//check to see if external style sheet is linked correctly
    console.log("logic.js is linked");
//CURRENTLY NOT USED

//VARIABLES
      //text-area
    //   var buttonArea = document.querySelector(".buttons");
      var passwordDisplay = document.getElementById("#passwordDisplay");
      var pwCopy = "";

      //password variable
      var newPW = "";

      //buttons
      var btnGen = document.getElementById("#generate");
      var btnCopy = document.getElementById("#copy");

      //array
    //   var alphaNumArray = "";

      

//FUNCTIONS
  //once document is ready, 
    // unable to get jquery to work - $(document).ready(function() {

        

        //when user clicks the "Generate a Password" button,
        btnGen.onclick = generatePassword(newPW);

            // unable to get jquery to work -  $(btnGen).on("click", function() {
            // unable to get jquery to work -      alert("I've been clicked!");
            // unable to get jquery to work -    });
          
            // unable to get jquery to work -  }); 
              
            //the generate password button changes color from red to green, and from value inactive to active
            if (element.matches(btnGen)) {
            var genState = element.getAttribute("value");
            console.log(genState);

            if (genState === "inactive") {
              generatePassword();
              element.setAttribute("value","active");
              console.log(genState);
            };
          };
        
          //a random password is generated, consisting of 9 upper and lower case alphanumeric characters
            //to create the random password, 9 random upper and lower case alphanumeric charaters are generated
              //I researched methods of this on stackOverflow.  This random password generator function is based and repurposed from a solution at "https://stackoverflow.com/questions/1497481/javascript-password-generator"              
              function generatePassword() {
                var length = 9;
                var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                
                //9 random upper and lower case alphanumeric charaters are generated and put into variable "newPW"
                //the contents of newPW are then appended together into a string
                for (var i = 0, l = charset.length; i < length; ++i) {
                  newPW += charset.charAt(Math.floor(Math.random() * l));
                
                //the appended string is displayed in the text area
                passwordDisplay.innerHTML(newPW);               
                };
                //return - end of function
                return;
              };
   

        // //when user clicks the "Copy to Clipboard" button,
        // if (element.matches(btnGen)) {
        //     var copyState = element.getAttribute("value");
        //     console.log(copyState);
        //     //IF there IS a password currently displayed in the text-area
        //     if (passwordDisplay !== "") {
        //     //the "Copy to Keyboard" button is no longer greyed out, and is enaled
        //     var copyState = element.setAttribute("disabled", "enabled");
        //     element.setAttribute("value","active");
        //     console.log(copyState);
        //       //ELSE (NO password currently displayed in the text-area)
        //       //the "Copy to Keyboard" button is still greyed out and disabled
        //       else {
        //         return;
        //       };
        //     };
        //   };

        //    //   that string is copied to the users keyboard
            
        //    // the variable containing the string is then set to null
            
        //   // return  