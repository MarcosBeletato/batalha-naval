let location1, location2, location3;
let guess;
let guesses = 0;
let hits = 0;
let isSunk = false;
const resetButton = document.querySelector("#resetButton");
const playButton = document.querySelector("#playButton");

function generateCoordinates() {
    location1 = Math.floor(Math.random() * 7);

    if (location1 == 6) {
        location2 = location1 - 1;
        location3 = location1 - 2;
    } else if (location1 == 5) {
        location2 = location1 + 1;
        location3 = location1 - 1;
    } else {
        location2 = location1 + 1;
        location3 = location1 + 2;
    }
}

function resetGame() {
    location1 = Math.floor(Math.random() * 7);
    guesses = 0;
    hits = 0;
    isSunk = false;

    generateCoordinates();

    resetButton.setAttribute("disabled", true);
    playButton.removeAttribute("disabled");
}

function playGame() {
    generateCoordinates();

    while (!isSunk) {
        guess = prompt("Prepare, aim, fire! (Enter a number from 0-6)");
    
        if (guess < 0 || guess > 6 || guess == null || guess == "") {
            alert("Enter a valid number (0-6)!");
        } else {
            guesses += 1;

            if (guess == location1 || guess == location2 || guess == location3) {
                hits += 1;
                alert(`Hit!\nGuesses: ${guesses}\nHits: ${hits}`);
            } else {
                alert(`Miss!\nGuesses: ${guesses}\nHits: ${hits}`);
            }
        }

        if (hits == 3) {
            alert(`You've sunk the ship!\nNumber of guesses: ${guesses}`);
            isSunk = true;
            resetButton.removeAttribute("disabled");
            playButton.setAttribute("disabled", true);
        }
    }
}

/* 

function playGame() {
    generateCoordinates();

    while (!isSunk) {
        do {
            guess = prompt("Prepare, aim, fire! (Enter a number from 0-6)");
        } while (guess < 0 || guess > 6);
        
        if (guess == location1 || guess == location2 || guess == location3) {
            guesses += 1;
            hits += 1;
            alert(`Hit!\nGuesses: ${guesses}\nHits: ${hits}`);
        } else {
            guesses += 1;
            alert(`Miss!\nGuesses: ${guesses}\nHits: ${hits}`);
        }
    
        if (hits == 3) {
            alert(`You've sunk the ship!\nNumber of guesses: ${guesses}`);
            isSunk = true;
            resetButton.removeAttribute("disabled");
            playButton.setAttribute("disabled", true);
        }
    }
}

*/


