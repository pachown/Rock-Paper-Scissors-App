var playerChoice = ''
var computerChoice = ''
var winner = ''

const playerChoices = document.querySelector('[player-choices]');

playerChoices.addEventListener('click', e => {
    document.getElementById('rock').style.backgroundColor = 'white';
    document.getElementById('paper').style.backgroundColor = 'white';
    document.getElementById('scissors').style.backgroundColor = 'white';
    if (e.target.tagName.toLowerCase() === 'input') {
        if (e.target.id === 'rock') {
            playerChoice = 'Rock'
            document.getElementById('rock').style.backgroundColor = 'red';
        } else if (e.target.id === 'paper') {
            playerChoice = 'Paper'
            document.getElementById('paper').style.backgroundColor = 'red';
        } else {
          playerChoice = 'Scissors'
          document.getElementById('scissors').style.backgroundColor = 'red';
        }

        randomChoice()
        winnerLogic(playerChoice, computerChoice)
    }
})


const computerChoices = ['Rock', 'Paper', 'Scissors']

var randomChoice = () => {
    computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    computerColor = function() {
        document.getElementById('computerrock').style.backgroundColor = 'white';
        document.getElementById('computerpaper').style.backgroundColor = 'white';
        document.getElementById('computerscissors').style.backgroundColor = 'white';

        if (computerChoice == 'Rock') {
            document.getElementById('computerrock').style.backgroundColor = 'red';
        } else if (computerChoice =='Paper') {
            document.getElementById('computerpaper').style.backgroundColor = 'red';
        } else {
            document.getElementById('computerscissors').style.backgroundColor = 'red';
        }
    }  
    computerColor() 
}

winnerLogic = function(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        winner = tieCatchPhrases[Math.floor(Math.random() * tieCatchPhrases.length)];
        draws++;
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        winner = rockBeatsScissors[Math.floor(Math.random() * rockBeatsScissors.length)];
        victories++;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        winner = scissorsBeatsPaper[Math.floor(Math.random() * scissorsBeatsPaper.length)];
        victories++;
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        winner = paperBeatsRock[Math.floor(Math.random() * paperBeatsRock.length)];
        victories++;
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        winner = paperBeatsRockLoss[Math.floor(Math.random() * paperBeatsRockLoss.length)];
        defeats++;
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        winner = scissorsBeatsPaperLoss[Math.floor(Math.random() * scissorsBeatsPaperLoss.length)];
        defeats++;
    } else {
        winner = rockBeatsScissorsLoss[Math.floor(Math.random() * rockBeatsScissorsLoss.length)];
        defeats++;
    }

    document.getElementById('results-container').innerHTML = winner;
    document.getElementById('playerChoiceBox').innerHTML = playerChoice;
    document.getElementById('computerChoiceBox').innerHTML = computerChoice;
    document.getElementById('victories').innerHTML = victories;
    document.getElementById('defeats').innerHTML = defeats;
    document.getElementById('draws').innerHTML = draws;
}

const tieCatchPhrases = ['Cats Game', 'Ties Are Meant For The Office', 'Another Tie!?!', 'Boring Tie', 'At Least You Didn\'t Lose!', 'Just A Tie']
const rockBeatsScissors = ['You Crushed The AI', 'Always Beating The Odds', 'I Wonder If You Could Win ANOTHER Game?', 'Edward Scissorhands Has Nightmares About Your Rock', 'Crushing That Weak Scissor Player!']
const scissorsBeatsPaper = ['You Crushed The AI', 'Always Beating The Odds', 'I Wonder If You Could Win ANOTHER Game?', 'He Was Made Of Paper?! Oh The Humanity!', 'You Are A Chef, Slicing And Dicing', 'Chop It Up To Good Luck', 'Cut That Nonsense']
const paperBeatsRock = ['You Crushed The AI', 'Always Beating The Odds', 'I Wonder If You Could Win ANOTHER Game?', 'That Rock Might Never See Again', 'Rocky Cant Pull Punches On Your Piece Of Paper', 'It\'s A Cover Up, Detective!']
const rockBeatsScissorsLoss = ['You Are Taking The Loss Like A Champion', 'That AI Will Pay!', 'Can\'t Will Them All', 'Your Scissors Got Smashed!', 'Stuck Between A Rock And A Hard Place', 'Crushing Defeat']
const scissorsBeatsPaperLoss = ['You Are Taking The Loss Like A Champion', 'That AI Will Pay!', 'Can\'t Will Them All', 'They Cut You In Half. Magic Trick Gone Wrong', 'Your Got Scissored', 'Cut Up And Crying Like Onions']
const paperBeatsRockLoss = ['You Are Taking The Loss Like A Champion', 'That AI Will Pay!', 'Can\'t Will Them All', 'You were Covered In Defeat', 'It Was Horrible, No One Could See you', 'How Do You See With That Thing On?']

var victories = 0
var defeats = 0
var draws = 0