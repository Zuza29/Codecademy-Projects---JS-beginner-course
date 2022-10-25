const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error: you provided an invalid input.')
    };
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    };
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'The user wins!'
    }
    if (userChoice === computerChoice) {
        return 'The game is a tie!'
    };

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer wins!'
        } else {
            return 'The user wins!'
        }
    };

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer wins!'
        } else {
            return 'The user wins!'
        }
    };

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer wins!'
        } else {
            return 'The user wins!'
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();

