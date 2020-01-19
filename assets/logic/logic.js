//CURRENTLY NOT USED

//VARIABLES
    //text-area
    var passWord = document.getElementById("#password");
    var pwCopy = "";

    //buttons
    var btnGen = document.getElementById("#generate");
    var btnCopy = document.getElementById("#copy");

    //array
    var alphaNumArray = "";



//FUNCTIONS
    //once document is ready, 
    $(document).ready(function() {

        //when user clicks the "Generate a Password" button,
        $(btnGen).on("click", function() {
            alert("I've been clicked!");
          });
    
        });

            //a random password is generated, consisting of 9 upper and lower case alphanumeric characters
                //to create the random password, 9 random upper and lower case alphanumeric charaters are generated
                
                //the 9 random upper and lower case alphanumeric charaters are put into a variable array
                
                //the contents of the array are then appended together into a string
                
                //the appended string is displayed in the text area
                
                //the variable containing the array is then set to null
                
                //return



        //when user clicks the "Copy to Clipboard" button,

            //IF there IS a password currently displayed in the text-area
            
                //the "Copy to Keyboard" button is no longer greyed out, and is enaled

                //ELSE (NO password currently displayed in the text-area)
            
                    //the "Copy to Keyboard" button is greyed out and disabled

            //then the password that is currently displayed in the text-area is stored to a variable containing a string
            
            //that string is copied to the users keyboard
            
            //the variable containing the string  is then set to null
            
            //return



    