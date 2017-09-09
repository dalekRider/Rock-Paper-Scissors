// A modified version of the Rock, Paper, Scissors project on CodeCademy.

const getUserChoice = (userInput) => {
  //userInput = userInput.toLowerCase();
  userInput = prompt('Please choose Rock, Paper, or Scissors...').toLowerCase();
  //Alternative allowing user to input choice using prompt

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'water') {
    return userInput
  } else {
    window.alert('Invalid Choice: Choose your weapon wisely.');
  }
};


const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      return'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('Something went wrong please try again');
  }
};

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
    return "It's a Tie! Prepare to do battle again!";
  } if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Machine has Triumphed, Long live Skynet!';
    } else {
      return 'You win this time...';
    }
  } if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Machine has Triumphed, Long live Skynet!';
    } else {
      return 'You win this time...';
    }
  } if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Machine has Triumphed, Long live Skynet!';
    } else {
      return 'You win this time...';
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('water');
  const computerChoice = getComputerChoice();
  if (userChoice === 'water') {
    window.alert('BZZT...SCHHHHRK..CHHHZK...KZZZZZZCH!!!');
    window.alert('An unsactioned liquid has been smuggled into the summit. You douse the mainframe with water, shorting out the central computer. This sparks similar revolutions across the globe as humans remind the machines who they serve');
  } else if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors' && userChoice !== 'water')  {
		window.alert('You must try again, not all battles are won with rocks, papers, and scissors...')
  } else {
    window.alert('You have chosen "' + userChoice + '" to represent humanity!');
    window.alert('The machines have selected ' + computerChoice + ' as their champion!');
    window.alert(determineWinner(userChoice, computerChoice));
  }
};

playGame();
