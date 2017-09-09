const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  //userInput = prompt(userInput).toLowerCase();
  //Alternative allowing user to input choice using prompt

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'water') {
    return userInput
  } else {
    console.log('Invalid Choice: Please choose only paper, scissors, or rock.');
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
}

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
  const userChoice = getUserChoice('ball');
  const computerChoice = getComputerChoice();
  if (userChoice === 'water') {
    console.log('BZZT...SCHHHHRK..CHHHZK...KZZZZZZCH!!!');
    console.log('An unsactioned liquid has been smuggled into the summit. You douse the mainframe with water, shorting out the central computer. This sparks similar revolutions across the globe as humans remind the machines who they serve');
  } else if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors' && userChoice !== 'water')  {
		console.log('You must try again, not all battles are won with rocks, papers, and scissors...')
  } else {
    console.log('You have chosen ' + userChoice + ' to represent humanity!');
    console.log('The machines have selected ' + computerChoice + ' as their champion!');
    console.log(determineWinner(userChoice, computerChoice));
  }
};

playGame();
