let location1, location2, location3;
let guess;
let guesses = 0;
let hits = 0;
let isSunk = false;
const resetButton = document.querySelector("#resetButton");

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

playGame();

function resetGame() {
    location1 = Math.floor(Math.random() * 7);
    guesses = 0;
    hits = 0;
    isSunk = false;

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

    resetButton.setAttribute("disabled", true);

    playGame();
}

function playGame() {
    while (!isSunk) {
        do {
            guess = prompt("Preparar, mirar, disparar! (Digite um valor entre 0-6)");
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
            alert(`You've sunken the ship!\nNumber of guesses: ${guesses}`);
            isSunk = true;
            resetButton.removeAttribute("disabled");
        }
    }
}
