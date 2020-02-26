const images = ['images/Rock.png', 'images/Paper.png', 'images/Scissors.png'];

//pseudocode:
// 1. Empty global variables for player and computer choice to be changed later XX
// 2. Event Listener for player choice XX
//    A. Change playerChoice variable to the clicked choice XX
// 3. Randomize computer choice XX
//    A. Change computerChoice variable to the random choice XX
// 4. compare choices and find result 
// 5. declare result on screen
// 6. add result tally to tally section of HTML
// 7. reset game on new player choice

var playerChoice = ''
var computerChoice = ''
var winner = ''
const computerChoices = ['Rock', 'Paper', 'Scissors']

const playerChoices = document.querySelector('[player-choices]');

//console.log(playerChoice); gives an empty string instead of the corresponding clicked choice.

playerChoices.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
        if (e.target.id === 'rock') {
            playerChoice = 'Rock'
        } else if (e.target.id === 'paper') {
            playerChoice = 'Paper'
        } else {
          playerChoice = 'Scissors'
        }

        randomComputerChoice()
        console.log(playerChoice);
        console.log(computerChoice);
        winnerLogic(playerChoice, randomComputerChoice)
        console.log(winner);
    }
})

var randomComputerChoice = () => {
    computerChoice = computerChoices[Math.floor(Math.random() * 3)];
}

const winnerLogic = (playerChoice, randomComputerChoice) => {
    if (playerChoice === randomComputerChoice) {
        winner = 'Tie Game'
    } else if ((playerChoice === 'Rock' && randomComputerChoice === 'Scissors') || (playerChoice === 'Scissors' && randomComputerChoice === 'Paper') || (playerChoice === 'Paper' && randomComputerChoice === 'Rock')) {
        winner = 'Player Wins'
    } else {
        winner = 'Computer Wins'
    }
    // console.log(winner);
}