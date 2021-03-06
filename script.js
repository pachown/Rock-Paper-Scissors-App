
const tieCatchPhrases = ['Cats Game', 'Ties Are Meant For The Office', 'Another Tie!?!', 'Boring Tie', 'At Least You Didn\'t Lose!', 'Just A Tie']
const rockBeatsScissors = ['You Crushed The AI', 'Always Beating The Odds', 'I Wonder If You Could Win ANOTHER Game?', 'Edward Scissorhands Has Nightmares About Your Rock', 'Crushing That Weak Scissor Player!']
const scissorsBeatsPaper = ['You Crushed The AI', 'Always Beating The Odds', 'I Wonder If You Could Win ANOTHER Game?', 'He Was Made Of Paper?! Oh The Humanity!', 'You Are A Chef, Slicing And Dicing', 'Chop It Up To Good Luck', 'Cut That Nonsense']
const paperBeatsRock = ['You Crushed The AI', 'Always Beating The Odds', 'I Wonder If You Could Win ANOTHER Game?', 'That Rock Might Never See Again', 'Rocky Cant Pull Punches On Your Piece Of Paper', 'It\'s A Cover Up, Detective!']
const rockBeatsScissorsLoss = ['You Are Taking The Loss Like A Champion', 'That AI Will Pay!', 'Can\'t Win Them All', 'Your Scissors Got Smashed!', 'Stuck Between A Rock And A Hard Place', 'Crushing Defeat']
const scissorsBeatsPaperLoss = ['You Are Taking The Loss Like A Champion', 'That AI Will Pay!', 'Can\'t Win Them All', 'They Cut You In Half. Magic Trick Gone Wrong', 'Your Got Scissored', 'Cut Up And Crying Like Onions']
const paperBeatsRockLoss = ['You Are Taking The Loss Like A Champion', 'That AI Will Pay!', 'Can\'t Win Them All', 'You were Covered In Defeat', 'It Was Horrible, No One Could See you', 'How Do You See With That Thing On?']

let victories = 0;
let defeats = 0;
let draws = 0;

const playerChoices = document.querySelector('[player-choices]');

playerChoices.addEventListener('click', e => {
    document.getElementById('rock').style.backgroundColor = 'rgb(180, 179, 179)';
    document.getElementById('paper').style.backgroundColor = 'rgb(180, 179, 179)';
    document.getElementById('scissors').style.backgroundColor = 'rgb(180, 179, 179)';

    let playerChoice = '';
    if (e.target.tagName.toLowerCase() === 'input') {
        document.getElementById('victories').innerHTML = victories;
        document.getElementById('defeats').innerHTML = defeats;
        document.getElementById('draws').innerHTML = draws;

        if (e.target.id === 'rock') {
            playerChoice = 'Rock';
            document.getElementById('rock').style.backgroundColor = 'red';
        } else if (e.target.id === 'paper') {
            playerChoice = 'Paper';
            document.getElementById('paper').style.backgroundColor = 'red';
        } else {
            playerChoice = 'Scissors';
            document.getElementById('scissors').style.backgroundColor = 'red';
        }
        document.getElementById('playerChoiceBox').innerHTML = playerChoice;
        let computerChoice = randomChoice();
        document.getElementById('computerChoiceBox').innerHTML = computerChoice;
        let resultsDisplayText = winnerLogic(playerChoice, computerChoice);
        document.getElementById('results-container').innerHTML = resultsDisplayText;
    }
})

var randomChoice = () => {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];

    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    
        document.getElementById('computerrock').style.backgroundColor = 'rgb(180, 179, 179)';
        document.getElementById('computerpaper').style.backgroundColor = 'rgb(180, 179, 179)';
        document.getElementById('computerscissors').style.backgroundColor = 'rgb(180, 179, 179)';

        if (computerChoice == 'Rock') {
            document.getElementById('computerrock').style.backgroundColor = 'red';
        } else if (computerChoice =='Paper') {
            document.getElementById('computerpaper').style.backgroundColor = 'red';
        } else {
            document.getElementById('computerscissors').style.backgroundColor = 'red';
        }

    return computerChoice;
}

winnerLogic = function(playerChoice, computerChoice) {
    let resultsDisplayText = ''

    if (playerChoice === computerChoice) {
        draws++;
        return tieCatchPhrases[Math.floor(Math.random() * tieCatchPhrases.length)];
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        victories++;
        return rockBeatsScissors[Math.floor(Math.random() * rockBeatsScissors.length)];
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        victories++;
        return scissorsBeatsPaper[Math.floor(Math.random() * scissorsBeatsPaper.length)];
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        victories++;
        return paperBeatsRock[Math.floor(Math.random() * paperBeatsRock.length)];
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        defeats++;
        return paperBeatsRockLoss[Math.floor(Math.random() * paperBeatsRockLoss.length)];
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        defeats++;
        return scissorsBeatsPaperLoss[Math.floor(Math.random() * scissorsBeatsPaperLoss.length)];
    } else {
        defeats++;
        return rockBeatsScissorsLoss[Math.floor(Math.random() * rockBeatsScissorsLoss.length)];
    }
}