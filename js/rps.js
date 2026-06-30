


const helloWorld = function() {
  return 'Hello, World!'
};

const getComputerChoice = function() {
    var choice = Math.floor(Math.random() *3);

    switch (choice) {
        case 0:
            return("rock");
            break;
        case 1:
            return("paper");
            break;
        case 2:
            return("scissors");
            break;
        default:
            throw Error("Unexpected random value generated");
    }
}

const getHumanChoice = function() {
    var notFinished = true;
    var extratext = "";
    while(notFinished)
    {
        value = prompt(`${extratext}Enter Rock, Paper, or Scissors`);
        value = value.toLowerCase();
        if (["rock", "paper", "scissors"].includes(value)) {
            return value;
        } 
        extratext = `Invalid input: ${value} `;
    }

}

const playRound = function(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a draw");
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win! Rock smashes scissors!");
            humanScore++;
        }
        else {
            console.log("Computer wins! Paper covers rock");
            computerScore++;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("Computer wins! Rock smashes scissors!");
            computerScore++;
        }
        else {
            console.log("You win! Scissors cut paper!");
            humanScore++;
        }
    }
    else { // paper
        if (computerChoice == "rock") { 
            console.log("You win! Paper covers rock");
            humanScore++;
        }
        else {
            console.log("Computer wins! Scissors cut paper!");
            computerScore++;
        }
    }
}

const playGame = function(roundCount) {
    for (var i=0; i < roundCount; i++) {
        var computerChoice = getComputerChoice();
        var humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore)
    {
        console.log(`Human wins the contest ${humanScore} to ${computerScore}!`);
    }
    else if (humanScore < computerScore)
    {
        console.log(`Computer wins the contest ${computerScore} to ${humanScore}!`);
    }
    else {
        console.log(`Contest is a draw!  ${humanScore} : ${computerScore}`);
    }
}

var humanScore = 0;
var computerScore = 0;

playGame(5);


let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)