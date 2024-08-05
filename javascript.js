const getComputerChoice = () => {
    // These are the choices in array
    const choices = ['rock', 'paper', 'scissors'];
    // Math.random() will generate a random number between 0 and 1
    // Math.floor() will floor the random number result between 0 and <3 (choices.length)
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const getUserChoice = () => {
    const userChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
    return userChoice;
}

const getWinner = () => {
    const computerChoice = getComputerChoice();
    const playerChoice = getUserChoice();
    
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

console.log(getWinner());
