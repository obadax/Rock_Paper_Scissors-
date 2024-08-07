


const getComputerChoice = () => {
    // These are the choices in array
    const choices = ['rock', 'paper', 'scissors'];
    // Math.random() will generate a random number between 0 and 1
    // Math.floor() will floor the random number result between 0 and <3 (choices.length)
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const getWinner = (playerChoice) => {
    const computerChoice = getComputerChoice();

    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (computerChoice === playerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "YOU WIN!";
    } else {
        return "YOU LOSE!";
    }
}

const setupEventListeners = () => {
    let rock_btn = document.querySelector("#rock");
    let paper_btn = document.querySelector("#paper");
    let scissors_btn = document.querySelector("#scissors");

    rock_btn.addEventListener('click', () => {
        const playerChoice = 'rock';
        console.log(getWinner(playerChoice));
    });

    paper_btn.addEventListener('click', () => {
        const playerChoice = 'paper';
        console.log(getWinner(playerChoice));
    });

    scissors_btn.addEventListener('click', () => {
        const playerChoice = 'scissors';
        console.log(getWinner(playerChoice));
    });
}

// Call this function to set up the event listeners after the DOM has loaded
setupEventListeners();
