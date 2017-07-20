		var user;
		var comp;
		var math;
		var wins = 0;
		var losses = 0;
		var guessesLeft = 10;
		var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var compAnswer = document.getElementById("comp-text");
		var userGuess = document.getElementById("user-text");
		var winsText = document.getElementById("wins-text");
		var lossesText = document.getElementById("losses-text");
		var guessesText = document.getElementById("guesses-text");
		var userArray = [];
		
		

		// set function that sets math to a random number 0 - 25
		function getLetter() {
			math = Math.floor(Math.random() * 25);
		}
		// sets a function to start the game over 
		function startOver() {
			guessesLeft = 10;
			getLetter();
			userArray = [];
		}

		// calling the function for the computer to pick its letter
		getLetter();

		// listens for user key press
		document.onkeyup = function(push) {
		
			// set variable use to whatever key the user pressed	
			var user = push.key;
			userArray.push(" " + user);
			// userGuess.textContent = push.key;


			// turn the random math number into a letter from alphabet and set that letter to the variable comp
			comp = alphabet[math];
					
					
		
		// if the value of user equals the value of comp, alert "winner" and advance wins by 1
			if (user === comp) {
				wins++;
				alert("winner");
				startOver();			
			}
		// if user does not equal comp, decrease the number of guesses left by 1
			else if (user !== comp) {
				guessesLeft--;
			}
		
		// if the number of guesses equals zero, advance losses by 1 and alert "you lost"
			if (guessesLeft === 0) {
				losses++;
				alert("You lost");
				startOver();
			}
					
				// console.log("Wins:" + wins);
				// console.log("Losses:" +losses);
				// console.log("Comp Answer:" + comp);
				// console.log("Guesses Left:" + guessesLeft);
				// console.log("User Input:" + user);
				// console.log("--------")
	
	guessesText.textContent = guessesLeft;
	lossesText.textContent = losses;
	winsText.textContent = wins;
	userGuess.textContent = userArray;
};

		