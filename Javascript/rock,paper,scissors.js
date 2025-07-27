const getUserInput = userInput => {

  userInput = userInput.toLowerCase();
  if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors') {
    return userInput;
  }
  else {

    console.log('Invalid input. Please enter Rock, Paper, or Scissors.');

  }

}

const getComputerInput = () => {

  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
  console.log(getComputerInput());
}
const determinWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie ';

  }
  else if (userChoice === 'rock' && computerChoice === 'scissors' ||
    userChoice === 'paper' && computerChoice === 'rock' ||
    userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You win! ';
  }
  else {
    return 'You lose! ';
  }
}

const playGame = () => {
  let userChoice = getUserInput('paper');
  console.log(`You chose: ${userChoice}`);
  let computerChoice = getComputerInput();
  console.log(`Computer chose: ${computerChoice}`);

  console.log(determinWinner(userChoice, computerChoice))


}
playGame();



