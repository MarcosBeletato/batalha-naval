let guesses = 0;
let hits = 0;
let isSunk = false;
const resetButton = document.querySelector("#resetButton");
const playButton = document.querySelector("#playButton");
let grid = {
   A: [],
   B: [],
   C: [],
   D: [],
   E: [],
   F: [],
   G: [],
}

function generateRandomCharacter() {
    const characters = "ABCDEFG";
    
    return characters[Math.floor(Math.random() * 7)];
}

function generateCoordinates() {
    let character, number;

    for (let i = 0; i < 3; i++) {
        character = generateRandomCharacter();
        number = Math.floor(Math.random() * 5);

        grid[character][number] = 1;
        grid[character][number + 1] = 1;
        grid[character][number + 2] = 1;
    }
}

function resetGame() {
    grid = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
     }
    guesses = 0;
    hits = 0;
    isSunk = false;

    generateCoordinates();

    resetButton.setAttribute("disabled", true);
    playButton.removeAttribute("disabled");
}

function playGame() {
    generateCoordinates();
    let lineCharacter;
    let columnNumber;

    while (!isSunk) {
        lineCharacter = (prompt("Choose a line! (Enter a letter from A-G)")).toUpperCase();
        columnNumber = prompt("Choose a column! (Enter a number from 0-6)");
    
        if (lineCharacter != 'A' && lineCharacter != 'B' && lineCharacter != 'C' && lineCharacter != 'D' && lineCharacter != 'E' && 
            lineCharacter != 'F' && lineCharacter != 'G' && lineCharacter == null && lineCharacter == '') {
            alert("Enter a valid character! (A-G)");
        } else if (columnNumber < 0 || columnNumber > 6 || columnNumber == null || columnNumber == "") { 
            alert("Enter a valid number! (0-6)")
        } else {
            guesses += 1;

            if (grid[lineCharacter][columnNumber] == 1) {
                hits += 1;
                grid[lineCharacter][columnNumber] = 2;
                alert(`Hit!\nGuesses: ${guesses}\nHits: ${hits}`);
            } else if (grid[lineCharacter][columnNumber] == 2) {
                alert(`You've already destroyed that part of the ship!`)
            } else {
                alert(`Miss!\nGuesses: ${guesses}\nHits: ${hits}`);
            }
        }

        if (hits == 3) { // EDITAR PARA 9, TESTAR SE ESTÃO POSICIONADOS 3 NAVIOS DE VERDADE!
            alert(`You've sunk the ship!\nNumber of guesses: ${guesses}`);
            isSunk = true;
            resetButton.removeAttribute("disabled");
            playButton.setAttribute("disabled", true);
        }
    }
}