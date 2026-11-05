const result = document.querySelector('.result');
const score = document.querySelector('#human-score');
const computerScore = document.querySelector('#computer-score');

let humanScore = 0;
let compScore = 0;

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
};

const playHuman = (playerChoice) => {

    playTheGame(playerChoice, playComputer());

}

const playComputer = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const playTheGame = (human, computer) => {

    console.log(`Human: ${human}, Computer: ${computer}`);

    if (human === computer) {
        document.querySelector('.result').textContent = "Empate!";

    } else if ((human === GAME_OPTIONS.ROCK && computer === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && computer === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && computer === GAME_OPTIONS.PAPER)
    ) {
        humanScore++;
        score.textContent = humanScore;
        document.querySelector('.result').textContent = "Você ganhou!";
    } else {
        compScore++;
        computerScore.textContent = compScore;
        document.querySelector('.result').textContent = "Você perdeu!";
    }

}