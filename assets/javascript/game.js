$(document).ready(function() {

    // declare  variables and set wins and losses
    var mNumber;
    var sCounter;
    var cValue = [];
    var wins = 0;
    var losses = 0;
          
    // grandaddy function
    function playGame() {

        // initial values for variables
        cValue =[0,0,0,0];
        mNumber = 0;
        sCounter = 0;

        // write wins and losses onto page
        document.querySelector(".winsCounter").innerHTML = wins;
        document.querySelector(".lossesCounter").innerHTML = losses;

        // function playAgain is called at the end of a game. will reset variables
        function playAgain() {
            sCounter = 0;
            document.querySelector(".sCounter").innerHTML = sCounter;
            mNumberGenerator();
            document.querySelector(".mNumber").innerHTML = mNumber;
            cValueGenerator();            
        }        

        // function mNumberGenerator generates a random number between 19 and 120 as a target for the player
        function mNumberGenerator() {
            for (var i = 1; i <= 10; i++) {
                mNumber = Math.floor(Math.random() * 120) + 1;                     
                if (mNumber >= 19) {
                    i = 11;
                }
            } 
        }
        // calls the function to generate Mnumber and displays that value on screen
        mNumberGenerator();        
        document.querySelector(".mNumber").innerHTML = mNumber;

        // function cValueGenerator generates random values between 1 and 12 for each "crystal" 
        function cValueGenerator() {
            for (var j = 0; j <= 3; j++) {
                cValue[j] = Math.floor(Math.random() * 12) + 1;
            }
        }
        // calls the function to generate "crystal" values
        cValueGenerator();
        
        // checks to see if the user has won or lost the game with the most current click
        // increments the wins or losses variables and updates the screen display of those variables
        // alerts the win or loss and then calls the playAgain function
        function gameLogic() {
            document.querySelector(".sCounter").innerHTML = sCounter;
            if (sCounter === mNumber) {
                wins++;                
                document.querySelector(".winsCounter").innerHTML = wins;
                sCounter = 0;
                alert("Congratulations, you won!");
                playAgain();
            } 
                else if (sCounter > mNumber) {
                losses++;                
                document.querySelector(".lossesCounter").innerHTML = losses;
                playerTotal = 0;
                alert("Sorry, you lost.");
                playAgain();
            }
        }
        
        // makes initial display of player running total (as 0) 
        document.querySelector(".sCounter").innerHTML = sCounter;

        // on click event updates player's running total and calls the gameLogic function
        $("body").on("click", ".crystal1", function() {                       
            sCounter = sCounter + cValue[0];            
            gameLogic();
        }).on("click", ".crystal2", function() {            
            sCounter = sCounter + cValue[1];            
            gameLogic();
        }).on("click", ".crystal3", function() {             
            sCounter = sCounter + cValue[2];            
            gameLogic();
        }).on("click", ".crystal4", function() { 
            sCounter = sCounter + cValue[3];            
            gameLogic();
        });        

    }
    // initializes first game
     playGame();

});

  
  
